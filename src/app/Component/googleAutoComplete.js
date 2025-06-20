"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { LocationOn, LocalAirport, LocalHospital } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import { debounce } from "@mui/material/utils";

const GOOGLE_MAPS_API_KEY = "";

function loadScript(src, position, id, callback) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;

  script.onload = callback;

  position.appendChild(script);
}

const LocationInputs = React.memo(
  ({
    id,
    label,
    value,
    inputValue,
    options,
    setOptions,
    onChange,
    onInputChange,
    placeholder,
    error,
  }) => {
    const loaded = React.useRef(false);
    const autocompleteService = React.useRef(null);

    if (typeof window !== "undefined" && !loaded.current) {
      if (!document.querySelector("#google-maps")) {
        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
          document.querySelector("head"),
          "google-maps",
          () => {
            autocompleteService.current =
              new window.google.maps.places.AutocompleteService();
            loaded.current = true;
          }
        );
      }

      loaded.current = true;
    }

    const fetch = React.useMemo(
      () =>
        debounce((request, callback) => {
          autocompleteService.current.getPlacePredictions(
            {
              ...request,
              types: ["(regions)"], // Restrict to cities, states, and zip codes
              componentRestrictions: { country: "us" }, // Restrict to USA
            },
            callback
          );
        }, 400),
      []
    );

    React.useEffect(() => {
      let active = true;

      if (!autocompleteService.current && window.google) {
        autocompleteService.current =
          new window.google.maps.places.AutocompleteService();
      }
      if (!autocompleteService.current) {
        return undefined;
      }

      if (inputValue === "") {
        setOptions(value ? [value] : []);
        return undefined;
      }

      fetch({ input: inputValue }, (results) => {
        if (active) {
          let newOptions = [];

          if (value) {
            newOptions = [value];
          }

          if (results) {
            newOptions = [...newOptions, ...results];
          }

          setOptions(newOptions);
        }
      });

      return () => {
        active = false;
      };
    }, [value, inputValue, fetch, setOptions]);

    return (
      <>
        <Autocomplete
          id={id}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.description
          }
          isOptionEqualToValue={(option, val) =>
            option.description === val.description
          }
          filterOptions={(x) => x}
          options={options}
          autoComplete
          includeInputInList
          filterSelectedOptions
          value={value}
          noOptionsText="No locations"
          onChange={onChange}
          onInputChange={onInputChange}
          renderInput={(params) => (
            <div
              className="main_input_location"
              style={{ position: "relative" }}
            >
              <LocationOn
                color="action"
                style={{
                  position: "absolute",
                  top: error ? "35%" : "50%",
                  left: 10,
                  transform: "translateY(-50%)",
                }}
              />
              <TextField
                {...params}
                label={label}
                className="customAutocomplete"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: error ? "" : "##E1E1E1",
                    },
                }}
                placeholder={placeholder}
                error={error && !value}
                helperText={
                  error && !value ? `${placeholder} is required.` : ""
                }
              />
            </div>
          )}
          renderOption={(props, option) => {
            const matches =
              option.structured_formatting.main_text_matched_substrings || [];

            const parts = parse(
              option.structured_formatting.main_text,
              matches.map((match) => [
                match.offset,
                match.offset + match.length,
              ])
            );

            const { key, ...otherProps } = props;

            return (
              <li key={key} {...otherProps}>
                <Grid container alignItems="center">
                  <Grid item sx={{ display: "flex", width: 44 }}>
                    {parts.some((part) =>
                      part.text.toLowerCase().includes("airport")
                    ) ? (
                      <LocalAirport sx={{ color: "text.secondary" }} />
                    ) : parts.some((part) =>
                        part.text.toLowerCase().includes("hospital")
                      ) ? (
                      <LocalHospital sx={{ color: "text.secondary" }} />
                    ) : (
                      <LocationOn sx={{ color: "text.secondary" }} />
                    )}
                  </Grid>
                  <Grid
                    item
                    sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
                  >
                    {parts.map((part, index) => (
                      <Box
                        key={index}
                        component="span"
                        sx={{ fontWeight: part.highlight ? "bold" : "regular" }}
                        style={{ fontSize: "14px" }}
                      >
                        {part.text}
                      </Box>
                    ))}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ fontSize: "14px" }}
                    >
                      {option.structured_formatting.secondary_text}
                    </Typography>
                  </Grid>
                </Grid>
              </li>
            );
          }}
        />
      </>
    );
  }
);

export default LocationInputs;
