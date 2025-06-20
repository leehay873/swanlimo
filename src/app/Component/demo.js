"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import BeatLoader from "react-spinners/BeatLoader";
import { Store, UpdateStore } from "../../StoreContext";
import Slideimage from "../../../public/images/header/slider-image.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import LocationInputs from "./LocationInputs";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Hours from "../data/Hours.json";
import Info from "../../../public/updated-home/hero-section/info.svg";
import { Skeleton } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
  TimePicker as MuiTimePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

const center = { lat: 40.6413, lng: -73.7781 }; // center for map
const MAP_LIBRARIES = ["places"];

function Hero() {
  const router = useRouter();
  const updateStore = UpdateStore();
  const store = Store();
  // console.log(store,'Store')

  const { originalPoint } = store;

  const [isPointToPointHire, setIsPointToPointHire] = useState(true);
  const [loading, setLoading] = useState(false);
  const [addStopArray, setAddStopArray] = useState([]);

  const [pickupValue, setPickupValue] = useState(null);
  const [pickupInputValue, setPickupInputValue] = useState("");
  const [pickupOptions, setPickupOptions] = useState([]);
  const [pickupError, setPickupError] = useState(false);

  const [dropoffValue, setDropoffValue] = useState(null);
  const [dropoffInputValue, setDropoffInputValue] = useState("");
  const [dropoffOptions, setDropoffOptions] = useState([]);
  const [dropoffError, setDropoffError] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);

  const [hour, setHour] = useState(Hours[0]);
  const [inputHour, setInputHour] = useState("");

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const [OriginalReservation, setOriginalReservation] = useState({
    // "pickUpLocation":"Miami International Airport (MIA) (MIA), Northwest 42nd Avenue, Miami, FL",
    // "dropOffLocation":"Orlando International Airport (MCO), Jeff Fuqua Boulevard, Orlando, FL",
    //   "stops":[
    //   {
    //      "address":"Jupiter, FL 33458 USA",
    //      "time":40
    //   }
    // ],
    //   "carseat":[
    //  {
    //     "name":"Toddler Seat",
    //     "qty":3
    //   }
    // ] ,
    // "totalDistance":"25",
    // "greetingFee":true
  });

  useEffect(() => {
    if (isPointToPointHire && pickupValue && dropoffValue) {
      calculateRoute();
    } else if (
      !isPointToPointHire &&
      pickupValue &&
      addStopArray.length > 0 &&
      addStopArray[0]?.location
    ) {
      calculateRoute();
    } else {
      setDirectionsResponse(null);
      setDistance("");
      setDuration("");
    }
  }, [isPointToPointHire, pickupValue, dropoffValue, addStopArray]);

  const calculateRoute = async () => {
    // console.log('Calculating route...');
    // console.log('Pickup:', pickupInputValue);
    // console.log('Dropoff:', dropoffInputValue);

    try {
      let addStopWaypoints = [];

      if (addStopArray.length > 0) {
        addStopWaypoints = addStopArray
          .filter((stop) => stop?.location)
          .map((stop) => ({
            location: stop.inputValue,
            stopover: true, // This indicates that it's a stop, not just a waypoint
          }));
      }
      // console.log(addStopWaypoints, 'stoppoints');
      const directionsService = new google.maps.DirectionsService();

      const results = await directionsService.route({
        origin: pickupInputValue,
        destination: dropoffInputValue ? dropoffInputValue : pickupInputValue,
        waypoints: addStopWaypoints,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      // console.log('Results:', results);

      setDirectionsResponse(results);
      if (results) {
        let total = 0;
        let durationArray = [];
        results.routes[0].legs.map((obj) => {
          // Remove 'mi' unit, remove commas, and convert to a number
          const distanceWithoutUnitAndCommas = +obj.distance.text
            .replace(/,/g, "")
            .replace(" mi", "");

          // Add the cleaned distance to the total
          if (!isNaN(distanceWithoutUnitAndCommas)) {
            total += distanceWithoutUnitAndCommas;
          }
          // total += parseFloat(obj.distance.text);
          durationArray.push(obj.duration.text);
        });
        const miles = parseFloat(total?.toFixed(2)) + " mi";
        // console.log(miles,'milessssss');
        setDistance(miles);

        // Initialize total hours and total minutes to 0
        let totalHours = 0;
        let totalMinutes = 0;

        // Loop through the duration strings and add hours and minutes to the totals
        durationArray.forEach((durationString) => {
          const parts = durationString.split(" "); // Split the string by space
          // console.log(parts,'parts');
          if (parts.length === 4) {
            // If the string has the format "X hour Y mins"
            const hours = parseInt(parts[0]); // Parse hours
            const minutes = parseInt(parts[2]); // Parse minutes
            totalHours += hours;
            totalMinutes += minutes;
          } else if (parts.length === 2 && parts[1] === "mins") {
            // If the string has the format "Y mins"
            const minutes = parseInt(parts[0]); // Parse minutes
            totalMinutes += minutes;
          }
        });

        // Adjust total hours and minutes if necessary
        if (totalMinutes >= 60) {
          const extraHours = Math.floor(totalMinutes / 60);
          totalHours += extraHours;
          totalMinutes = totalMinutes % 60;
        }

        // Output the total time
        // console.log(`Total time: ${totalHours} hours ${totalMinutes} mins`);
        const time = `${totalHours} hours ${totalMinutes} mins`;
        setDuration(time);
      }
      // ... other logic
    } catch (error) {
      console.error("Error calculating route:", error);
    }
  };

  // Function to add a new stop
  const addStop = () => {
    if (addStopArray.length > 0) {
      const lastStopIndex = addStopArray.length - 1; // Assuming addStopArray holds stop locations
      if (!addStopArray[lastStopIndex].location) {
        addStopArray[lastStopIndex].error = true;
      } else {
        setAddStopArray((prev) => [
          ...prev,
          {
            location: null,
            inputValue: "",
            options: [],
            time: "",
            error: false,
          },
        ]);
      }
    } else {
      setAddStopArray((prev) => [
        ...prev,
        {
          location: null,
          inputValue: "",
          options: [],
          time: "",
          error: false,
        },
      ]);
    }
  };

  const [flightDetails, setFlightDetails] = useState(false);

  const handleAddReturnStopClick = () => {
    setShowAddStop(true);
  };

  const deleteStopAtIndex = (index) => {
    setAddStopArray((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteStop = (index) => {
    // Call the function to delete the stop at the specified index
    deleteStopAtIndex(index);
    // Optionally, you can perform other actions after deleting the stop
  };

  const handleCheckboxChange = () => {
    setFlightDetails(!flightDetails);
  };

  const handleChange = (event, newValue, type, index) => {
    if (type === "pickUp") {
      setPickupOptions(newValue ? [newValue, ...pickupOptions] : pickupOptions);
      setPickupValue(newValue);
    } else if (type === "dropOff") {
      setDropoffOptions(
        newValue ? [newValue, ...dropoffOptions] : dropoffOptions
      );
      setDropoffValue(newValue);
    } else if (type === "stop") {
      setAddStopArray((prev) =>
        prev.map((stop, i) =>
          i === index ? { ...stop, location: newValue } : stop
        )
      );
      setStopOptionsAtIndex(newValue, index);
    }
  };

  const handleInputChange = (event, newInputValue, type, index) => {
    if (type === "pickUp") {
      setPickupInputValue(newInputValue);
    } else if (type === "dropOff") {
      setDropoffInputValue(newInputValue);
    } else if (type === "stop") {
      setStopInputValueAtIndex(newInputValue, index);
    }
  };

  const setStopOptionsAtIndex = useCallback(
    (newOptions, index) => {
      setAddStopArray((prev) =>
        prev.map((stop, i) =>
          i === index
            ? {
                ...stop,
                options: Array.isArray(newOptions)
                  ? newOptions
                  : stop.options || [],
              }
            : stop
        )
      );
    },
    [setAddStopArray]
  );

  const setStopInputValueAtIndex = (newInputValue, index) => {
    setAddStopArray((prev) =>
      prev.map((stop, i) =>
        i === index
          ? { ...stop, inputValue: newInputValue, error: false }
          : stop
      )
    );
  };

  const handleDurationChange = (event, index) => {
    const { value } = event.target;
    const integerValue = parseInt(value, 10);

    setAddStopArray((prev) =>
      prev.map((stop, i) =>
        i === index
          ? { ...stop, time: isNaN(integerValue) ? "" : integerValue }
          : stop
      )
    );
  };

  // console.log('fffff', addStopArray);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  useEffect(() => {
    localStorage.setItem(
      "OriginalReservation",
      JSON.stringify(OriginalReservation)
    );
  }, [OriginalReservation]);

  useEffect(() => {
    if (pickupValue) {
      setPickupError(false);
    }
    if (dropoffValue) {
      setDropoffError(false);
    }
    if (selectedDate) {
      setDateError(false);
    }
    if (selectedTime) {
      setTimeError(false);
    }
  }, [pickupValue, dropoffValue, selectedDate, selectedTime]);

  const checkValidation = () => {
    let valid = true;
    if (!pickupValue) {
      setPickupError(true);
      valid = false;
    }
    if (isPointToPointHire && !dropoffValue) {
      setDropoffError(true);
      valid = false;
    }

    if (!selectedDate) {
      setDateError(true);
      valid = false;
    }
    if (!selectedTime) {
      setTimeError(true);
      valid = false;
    }
    if (addStopArray.length > 0) {
      const lastStopIndex = addStopArray.length - 1; // Assuming addStopArray holds stop locations
      if (!addStopArray[lastStopIndex].location) {
        addStopArray[lastStopIndex].error = true;
        valid = false;
      }
    }

    return valid;
  };

  const HandleSubmit = async (e) => {
    const { coordinates } = store;
    e.preventDefault();
    let result = await checkValidation();
    // let result = true
    // console.log(result,'result');
    if (result) {
      let stopStates = [];
      if (addStopArray.length > 0) {
        stopStates = addStopArray
          .filter((stop) => stop?.location)
          .map((stop) => ({
            address: stop.inputValue,
            time: stop.time,
          }));
      }
      // console.log(stopStates, 'stopStates');
      updateStore({
        originalPoint: {
          ...originalPoint,
          OriginalReservation: {
            isPointToPointHire,
            pickUpLocation: pickupInputValue,
            dropOffLocation: dropoffInputValue,
            stops: stopStates,
            totalHour: +hour.split(" ")[0],
            selectedTime: selectedTime?.format("h:mm A"),
            selectedDate: selectedDate?.format("ddd, MMM DD[th], YYYY"),
            totalDistance: parseFloat(distance?.replace(" mi", "")),
            // "greetingFee": true
          },
        },
        coordinates: {
          ...coordinates,
          pickUp: pickupValue,
          dropOff: dropoffValue,
          pickUpLocation: pickupInputValue,
          dropOffLocation: dropoffInputValue,
        },
      });
      setLoading(true);
    }
  };

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        setLoading(false)
        router.push("/booking/vehicle");
      }, 1000);
    }
  }, [loading]);

  // console.log(process.env, '=======env')

  return (
    <div className="relative" style={{ background: "rgba(255, 255, 255, 1)" }}>
      <div className="lg:absolute -ml-10 lg:inset-0 lg:left-1/3">
        {typeof google === "object" && pickupValue && dropoffValue ? (
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            {directionsResponse && <Marker position={center} />}

            {directionsResponse && (
              <DirectionsRenderer
                options={{
                  polylineOptions: {
                    strokeColor: "#2B3252",
                    strokeOpacity: 0.7,
                    strokeWeight: 3,
                  },
                }}
                directions={directionsResponse}
              />
            )}
            {directionsResponse && (
              <div
                style={{
                  position: "absolute",
                  background: "white",
                  zIndex: 100,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  bottom: "10px",
                  right: "100px",
                }}
              >
                <p>Distance: {distance}</p>
                <p>Duration: {duration}</p>
              </div>
            )}
          </GoogleMap>
        ) : (
          <Image className="w-full" src={Slideimage} alt="main-header-image" />
        )}
      </div>
      <div className="relative pt-0 lg:mx-auto lg:grid lg:max-w-7xl sm:pt-0 md:pt-5 lg:grid-cols-2  lg:pt-10">
        <div className="px-3 ">
          <div className="mx-auto max-w-xl ">
            {/* <h2 className="text-5xl font-bold tracking-tight display   secondary">Quick Quote</h2> */}

            <form
              onSubmit={HandleSubmit}
              className="  header-shodoww bg-white rounded-3xl sm:-mt-10 md:mt-0 lg:mt-10 "
            >
              <div className="text-center grid grid-cols-2">
                <div
                  className={`label-form ${
                    isPointToPointHire
                      ? "point-to-pintborder rounded-tl-3xl"
                      : ""
                  } pt-3 mb-6 sm:mb-3 md:mb-5 lg:mb-10 cursor-pointer`}
                  onClick={() => setIsPointToPointHire(true)}
                >
                  POINT TO POINT
                </div>
                <div
                  className={`label-form ${
                    !isPointToPointHire
                      ? "point-to-pintborder rounded-tr-3xl"
                      : ""
                  } pt-3 mb-6 sm:mb-3 md:mb-5 lg:mb-10 cursor-pointer`}
                  onClick={() => setIsPointToPointHire(false)}
                >
                  HOURLY HIRE
                </div>
              </div>

              {/* pick-up and drop-up location */}
              <div className="grid grid-cols-1 px-6 gap-x-5 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block pl-2 label-form">
                    Pick-up Location
                  </label>
                  <div className="mt-2.5">
                    <LocationInputs
                      id="pickup-location"
                      text="Pick-Up Location"
                      value={pickupValue}
                      inputValue={pickupInputValue}
                      options={pickupOptions}
                      setOptions={setPickupOptions}
                      onChange={(event, newValue) => {
                        handleChange(event, newValue, "pickUp");
                      }}
                      onInputChange={(event, newInputValue) => {
                        handleInputChange(event, newInputValue, "pickUp");
                      }}
                      placeholder="Address, Airport, Hotel, ..."
                      //  defaultValue="Hello World"
                      error={pickupError}
                    />
                    {/* <input
        type="text"
        name="first-name"
        id="first-name"
        placeholder='Pickup Location'
        autoComplete="given-name"
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
                  </div>
                </div>

                {isPointToPointHire ? (
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block pl-2 label-form"
                    >
                      Drop-off Location
                    </label>
                    <div className="mt-2.5">
                      <LocationInputs
                        id="dropoff-location"
                        // label="Drop-off Location"
                        text="Drop-off Location"
                        value={dropoffValue}
                        inputValue={dropoffInputValue}
                        options={dropoffOptions}
                        setOptions={setDropoffOptions}
                        onChange={(event, newValue) => {
                          handleChange(event, newValue, "dropOff");
                        }}
                        onInputChange={(event, newInputValue) => {
                          handleInputChange(event, newInputValue, "dropOff");
                        }}
                        placeholder="Address, Airport, Hotel, ..."
                        error={dropoffError}
                      />
                      {/* <input
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        placeholder= "Drop-off Location"
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
                    </div>
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block pl-2 label-form"
                    >
                      Select Hours
                    </label>
                    <div className="mt-2.5">
                      <Autocomplete
                        // fullWidth
                        value={hour}
                        onChange={(event, newValue) => {
                          setHour(newValue);
                        }}
                        inputValue={inputHour}
                        onInputChange={(event, newInputValue) => {
                          setInputHour(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={Hours}
                        // sx={{ width: 300 }}
                        disableClearable
                        renderInput={(params) => (
                          <div style={{ position: "relative" }}>
                            <AccessTimeFilledIcon
                              color="action"
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: 10,
                                transform: "translateY(-50%)",
                              }}
                            />
                            <TextField
                              {...params}
                              label="Select Hours"
                              className="customAutocomplete"
                            />
                          </div>
                        )}
                      />
                      {/* <input
        name="last-name"
        id="last-name"
        autoComplete="family-name"
        placeholder={'Enter Duration'}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
                    </div>
                  </div>
                )}
              </div>

              
              <div
                className="text-sm font-medium mb-2 pt-3 main_color cursor-pointer"
                style={{ marginLeft: "1.9rem", width: "max-content" }}
                onClick={addStop}
              >
                + Add Stop
              </div>

              {/* Add Stop Inputs */}
              {addStopArray.map((stop, i) => {
                return (
                  <div key={i}>
                    <div className="flex px-7  gap-3">
                      <div className="w-full  ">
                        <label
                          htmlFor={`add-stop-location-${i}`}
                          className="block pl-2 label-form"
                        >
                          Stop Location
                        </label>
                        <div className="mt-2.5 ">
                          <LocationInputs
                            key={i} // Ensure you have a unique key for each element in the array
                            id={`stop-location-${i}`}
                            // label={`Stop Location`}
                            value={stop.location}
                            inputValue={stop.inputValue}
                            options={stop.options}
                            setOptions={(newOptions) =>
                              setStopOptionsAtIndex(newOptions, i)
                            }
                            onChange={(event, newValue) =>
                              handleChange(event, newValue, "stop", i)
                            }
                            onInputChange={(event, newInputValue) =>
                              handleInputChange(event, newInputValue, "stop", i)
                            }
                            placeholder={`Stop location`}
                            error={stop.error}
                          />
                          {/* <input
                type="text"
                name="add-stop-location"
                id="add-stop-location"
                placeholder="Stop Location"
                autoComplete="off"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> */}
                        </div>
                      </div>

                      <div className="w-2/3 relative mb-6">
                        <div></div>

                        {/* {isPointToPointHire && <>
            <label htmlFor="add-stop-duration" className="block pl-2 label-form">
              Duration
            </label>
            <div className="mt-2.5">
              <TextField
              id="outlined-number"
              placeholder="Duration"
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
              value={stop.time}
              onChange={(event) => handleDurationChange(event, i)} // Assuming `i` is the index of the stop
              fullWidth
              sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#2B3252",
                    },
              }}  
              />
            </div>
              </>
              } */}
                        <span
                          className={`absolute ${
                            isPointToPointHire ? "" : ""
                          } top-12 mt-3 transform -translate-y-1/2 cursor-pointer`}
                          onClick={() => handleDeleteStop(i)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </span>
                      </div>
                    </div>
                    <div className=" pt-2 mb-2 flex text-xs px-6">
                      <div className="">
                        <Image src={Info} className="h-5 h-5" alt="Info-icon" />
                      </div>
                      <div className="pt-0 ml-1">
                        15 minutes stop time is available. If the wait time
                        exceeds it will be charged accordingly.
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* pick-up date and time */}
              <div className=" grid px-6 gap-x-5 grid-cols-2">
                <div className="grid grid-cols-1 ">
                  <label
                    htmlFor="first-name"
                    className=" pl-2  mb-2 label-form"
                  >
                    Pick-up Date
                  </label>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MuiDatePicker
                      // label="Pick-up Date"
                      disablePast
                      format="DD/MM/YYYY"
                      placeholder="Pick-up Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: dateError ? "" : "#2B3252",
                          },
                      }}
                      slotProps={{
                        textField: {
                          helperText: dateError
                            ? "Pick-up Date is required"
                            : "",
                          clearable: true,
                          error: dateError,
                        },
                      }}
                    />
                  </LocalizationProvider>
                  {/* <input
                type="date"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> */}
                </div>

                <div className="grid grid-cols-1">
                  <label htmlFor="last-name" className=" pl-2 mb-2 label-form">
                    Pick-up Time
                  </label>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MuiTimePicker
                      // label="Pick-up Time"
                      // disablePast
                      placeholder="Pick-up Time"
                      format="h:mm A"
                      value={selectedTime}
                      onChange={handleTimeChange}
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: timeError ? "" : "#2B3252",
                          },
                      }}
                      slotProps={{
                        textField: {
                          helperText: timeError
                            ? "Pick-up Time is required"
                            : "",
                          clearable: true,
                          error: timeError,
                        },
                      }}
                    />
                  </LocalizationProvider>
                  {/* <input
                type="time"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block pick-upTime w-full rounded-md header-input px-3.5 py-2 text-gray-900 shadow-sm ring-1 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> */}
                </div>
              </div>
              {/*   Add a Return Trip */}
              {/* Add a Return Trip */}
              {/* {isPointToPointHire && (
  <div className=" px-6">
    <label className="block mt-6 text-sm font-medium text-gray-700">
      <input
        type="checkbox"
        checked={flightDetails}
        onChange={handleCheckboxChange}
        className=""
      />
    <span className='text-sm font-medium text-gray-700 ml-2 '>Add a Return Trip</span>
    </label>
    <span className="text-sm font-medium mb-2 px-1 pt-3 relative block">
      {flightDetails && (
        <div className="flex gap-x-3">
          <div className="w-1/2 pr-2">
            <label htmlFor="return-stop-location" className="block label-form">
              Return Date
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="add-stop-location"
                id="add-stop-location"
                placeholder="Stop Location"
                autoComplete="off"
                className="block w-full rounded-md border-0  py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="return-stop-duration" className="block pl-2 label-form">
              Return Time
            </label>
            <div className="mt-2.5">
              <input
                type="time"
                name="return-stop-duration"
                id="return-stop-duration"
                placeholder="Enter Return Duration"
                autoComplete="off"
                className="block w-full rounded-md border-0 p py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      )}
    </span>
  </div>
)} */}

              <div className=" mt-7  flex justify-center border-gray-900/10 ">
                <button
                  type="submit"
                  className="rounded-md mb-8 p-10 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                  style={{ background: "#2B3252" }}
                >
                  <span> {loading ? <><BeatLoader   size={10} color="#ffff" /></> : "NEXT"} </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;