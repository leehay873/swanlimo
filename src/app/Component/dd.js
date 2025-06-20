"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import BeatLoader from "react-spinners/BeatLoader";
import Image from "next/image";
import { Store, UpdateStore } from "../../StoreContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationInputs from "./LocationInputs";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Hours from "../data/Hours.json";
import style from "@/app/style/state.module.css";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import TimePicker from "./TimePicker";
import Info from "../../../public/updated-home/hero-section/info.svg";
import dayjs from "dayjs";

import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
  TimePicker as MuiTimePicker,
} from "@mui/x-date-pickers";
import { initialStoreState } from "@/initialState";

const center = { lat: 40.6413, lng: -73.7781 }; // center for map

const minDate = dayjs(new Date());

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("id", id);
  script.src = src;
  script.async = true;

  position.appendChild(script);
}

function homepage({ image, title, subtitle }) {
  // ============================================
  //  text animation there
  // useEffect(() => {
  //   const words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'];
  //   let part;
  //   let i = 0;
  //   let offset = 0;
  //   const len = words.length;
  //   let forwards = true;
  //   let skip_count = 0;
  //   const skip_delay = 15;
  //   const speed = 70;

  //   // Create an interval ID to clear it later
  //   const intervalId = setInterval(() => {
  //     if (forwards) {
  //       if (offset >= words[i].length) {
  //         ++skip_count;
  //         if (skip_count === skip_delay) {
  //           forwards = false;
  //           skip_count = 0;
  //         }
  //       }
  //     } else {
  //       if (offset === 0) {
  //         forwards = true;
  //         i++;
  //         offset = 0;
  //         if (i >= len) {
  //           i = 0;
  //         }
  //       }
  //     }
  //     part = words[i].substr(0, offset);
  //     if (skip_count === 0) {
  //       if (forwards) {
  //         offset++;
  //       } else {
  //         offset--;
  //       }
  //     }
  //     document.querySelector('.word').textContent = part;
  //   }, speed);

  //   // Cleanup function to clear the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);

  // ============================================

  const googleApiKey = process.env.NEXT_PUBLIC_API_KEY;


  const router = useRouter();
  const updateStore = UpdateStore();
  const store = Store();
  // console.log(store,'Store')

  const { originalPoint } = store;

  const [isPointToPointHire, setIsPointToPointHire] = useState(true);
  const [loading, setLoading] = useState(null);
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

  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [dateError, setDateError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [dateTimeMsg, setDateTimeMsg] = useState("");

  const [inputClick, setInputClick] = useState(false);
  const [selectedHour, setSelectedHour] = useState(12); // Initial hour value
  const [selectedMinute, setSelectedMinute] = useState(0); // Initial minute value
  const [isAM, setIsAM] = useState(true); // Initial AM/PM value

  const [hour, setHour] = useState(Hours[0]);
  const [inputHour, setInputHour] = useState("");

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const loaded = useRef(false);
  const autocompleteService = useRef(null);
  const [showMap, setShowMap] = useState(false);
  const [hourlyMsg, setHourlyMsg] = useState(false);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Declare the callback function in the global scope
      window.onGoogleMapsLoad = () => {
        autocompleteService.current =
          new window.google.maps.places.AutocompleteService();
        loaded.current = true;
        setShowMap(true);
      };

      if (!loaded.current || !document.querySelector("#google-maps")) {
        // Reset loaded.current to false when the component unmounts and mounts again
        loaded.current = false;

        // Load the script
        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places&callback=onGoogleMapsLoad`,
          document.querySelector("head"),
          "google-maps"
        );
      }
    }
  }, [googleApiKey]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  useEffect(() => {
    updateStore(initialStoreState);
  }, []);

  // Effect to get values from local storage when the component mounts
  useEffect(() => {
    // Check if localStorage is available (client side)
    if (typeof window !== "undefined" && image !== "master-page") {
      localStorage.clear();
      return;
    }
    if (typeof window !== "undefined" && image === "master-page") {
      // Use localStorage as needed
      const storedIsPointToPointHire =
        localStorage.getItem("isPointToPointHire");
      if (storedIsPointToPointHire !== null)
        setIsPointToPointHire(JSON.parse(storedIsPointToPointHire));

      const storedPickupValue = localStorage.getItem("pickupValue");
      if (storedPickupValue !== null)
        setPickupValue(JSON.parse(storedPickupValue));

      const storedPickupInputValue = localStorage.getItem("pickupInputValue");
      if (storedPickupInputValue !== null)
        setPickupInputValue(JSON.parse(storedPickupInputValue));

      const storedDropoffValue = localStorage.getItem("dropoffValue");
      if (storedDropoffValue !== null)
        setDropoffValue(JSON.parse(storedDropoffValue));

      const storedDropoffInputValue = localStorage.getItem("dropoffInputValue");
      if (storedDropoffInputValue !== null)
        setDropoffInputValue(JSON.parse(storedDropoffInputValue));

      const hour = localStorage.getItem("hour");
      if (hour !== null) setHour(JSON.parse(hour));

      const inputHour = localStorage.getItem("inputHour");
      if (inputHour !== null) setInputHour(JSON.parse(inputHour));

      const storedDate = localStorage.getItem("selectedDate");
      if (storedDate !== null) {
        const parsedDate = JSON.parse(storedDate);
        // Check if the parsedDateTime is a valid DateTime object
        if (dayjs(parsedDate).isValid()) {
          setSelectedDate(dayjs(parsedDate));
        } else {
          // Handle the case where the stored DateTime is not valid
          console.error("Invalid Date stored in localStorage");
        }
      }

      const inputClick = localStorage.getItem("inputClick");
      if (inputClick) {
        setInputClick(JSON.parse(inputClick));
      }
      const storedHour = localStorage.getItem("selectedHour");
      console.log(storedHour, "dddd");
      if (storedHour !== null) {
        setSelectedHour(JSON.parse(storedHour));
      }
      const storedMinute = localStorage.getItem("selectedMinute");
      if (storedMinute !== null) {
        setSelectedMinute(JSON.parse(storedMinute));
      }
      const storedAM = localStorage.getItem("isAM");
      if (storedAM !== null) {
        setIsAM(JSON.parse(storedAM));
      }

      const addStops = localStorage.getItem("addStopArray");
      if (addStops !== null) setAddStopArray(JSON.parse(addStops));
    }
  }, [image]);

  // Effect to set pickupValue to local storage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (pickupValue !== null) {
        localStorage.setItem("pickupValue", JSON.stringify(pickupValue));
        localStorage.setItem(
          "pickupInputValue",
          JSON.stringify(pickupInputValue)
        );
        localStorage.setItem("returndropoffValue", JSON.stringify(pickupValue));
        localStorage.setItem(
          "returndropoffInputValue",
          JSON.stringify(pickupInputValue)
        );
      } else {
        // If pickupValue is set to null, remove it from local storage
        localStorage.removeItem("pickupValue");
        localStorage.removeItem("pickupInputValue");
        localStorage.removeItem("returndropoffValue");
        localStorage.removeItem("returndropoffInputValue");
      }
      if (dropoffValue !== null) {
        localStorage.setItem("dropoffValue", JSON.stringify(dropoffValue));
        localStorage.setItem(
          "dropoffInputValue",
          JSON.stringify(dropoffInputValue)
        );
        localStorage.setItem("returnpickupValue", JSON.stringify(dropoffValue));
        localStorage.setItem(
          "returnpickupInputValue",
          JSON.stringify(dropoffInputValue)
        );
      } else {
        // If dropoffValue is set to null, remove it from local storage
        localStorage.removeItem("dropoffValue");
        localStorage.removeItem("dropoffInputValue");
        localStorage.removeItem("returnpickupValue");
        localStorage.removeItem("returnpickupInputValue");
      }
      if (selectedDate !== null) {
        localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
      } else {
        localStorage.removeItem("selectedDate");
      }
      if (addStopArray.length > 0) {
        const array = addStopArray.filter((stop) => stop?.location != null);
        if (array.length > 0) {
          localStorage.setItem("addStopArray", JSON.stringify(array));
          localStorage.setItem("returnaddStopArray", JSON.stringify(array));
        } else {
          localStorage.removeItem("addStopArray");
          localStorage.removeItem("returnaddStopArray");
        }
      } else {
        localStorage.removeItem("addStopArray");
        localStorage.removeItem("returnaddStopArray");
      }
    }
  }, [pickupValue, dropoffValue, selectedDate, addStopArray]);

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
    if (inputClick) {
      setTimeError(false);
    }
  }, [pickupValue, dropoffValue, selectedDate, inputClick]);

  useEffect(() => {
    if (loading === true) {
      router.push("/booking/vehicle");
    } else if (loading === false && distance !== "") {
      HandleSubmit(); // Call HandleSubmit function when distance is available
    }
  }, [loading, distance]);

  useEffect(() => {
    if (
      (pickupValue && dropoffValue && showMap) ||
      (pickupValue &&
        showMap &&
        addStopArray.length > 0 &&
        addStopArray.some((stop) => stop?.location))
    ) {
      calculateRoute();
    } else {
      setDirectionsResponse(null);
      setDistance("");
      setDuration("");
      setShowMap(false);
    }
  }, [pickupValue, dropoffValue, addStopArray, showMap]);

  const calculateRoute = async () => {
    // console.log('Calculating route...');
    // console.log('Pickup:', pickupInputValue);
    // console.log('Dropoff:', dropoffInputValue, addStopArray);

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
      const lastStopIndex = addStopWaypoints.length - 1;

      const results = await directionsService.route({
        origin: pickupInputValue,
        destination: dropoffInputValue
          ? dropoffInputValue
          : addStopWaypoints[lastStopIndex]?.location,
        waypoints: !dropoffInputValue
          ? addStopWaypoints.slice(0, lastStopIndex)
          : addStopWaypoints, // Use all stops except the last one
        travelMode: google.maps.TravelMode.DRIVING,
      });

      console.log("Results:", results);

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

        // console.log(`Total time: ${totalHours} hours ${totalMinutes} mins`);
        const time = `${totalHours} hours ${totalMinutes} mins`;
        setDuration(time);
      }
    } catch (error) {
      console.error("Error calculating route:", error);
    }
  };

  // Function to add a new stop
  const addStop = () => {
    if (isPointToPointHire && addStopArray.length === 3) {
      setHourlyMsg(true);
      return;
    } else {
      setHourlyMsg(false);
    }
    if (addStopArray.length > 0) {
      const lastStopIndex = addStopArray.length - 1;
      if (!addStopArray[lastStopIndex].location) {
        // Update the existing stop with error flag set to true
        setAddStopArray((prev) => [
          ...prev.slice(0, lastStopIndex), // Keep previous stops unchanged
          { ...prev[lastStopIndex], error: true }, // Update the last stop with error flag
        ]);
        return;
      }
    }

    // Add a new stop
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

    setHourlyMsg(false);
    setShowMap(false);
  };

  const deleteStopAtIndex = (index) => {
    setAddStopArray((prev) => prev.filter((_, i) => i !== index));
    setTimeout(() => {
      setShowMap(true);
    }, 100);
  };

  const handleDeleteStop = (index) => {
    // Call the function to delete the stop at the specified index
    deleteStopAtIndex(index);
  };

  const handleChange = (event, newValue, type, index) => {
    if (type === "stop" && !newValue) {
      setShowMap(false);
    } else {
      setShowMap(true);
    }
    if (type === "pickUp") {
      // setPickupOptions(newValue ? [newValue, ...pickupOptions] : pickupOptions);
      setPickupValue(newValue);
    } else if (type === "dropOff") {
      // setDropoffOptions(
      //   newValue ? [newValue, ...dropoffOptions] : dropoffOptions
      // );
      setDropoffValue(newValue);
    } else if (type === "stop") {
      setAddStopArray((prev) =>
        prev.map((stop, i) =>
          i === index ? { ...stop, location: newValue } : stop
        )
      );
      // setStopOptionsAtIndex(newValue, index);
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

    if (!inputClick) {
      setTimeError(true);
      valid = false;
    }

    if (!selectedDate) {
      setDateError(true);
      valid = false;
    }
    if (selectedDate) {
      // Get the current date and time
      const currentDateTime = new Date();

      // Add 3 hours to the current date and time
      const minimumDateTime = new Date(
        currentDateTime.getTime() + 3 * 60 * 60 * 1000
      );

      // Combine selected date and time
      const selectedDateTime = new Date(selectedDate);
      selectedDateTime.setHours(
        selectedHour +
          (isAM && selectedHour === 12
            ? -12
            : !isAM && selectedHour !== 12
            ? 12
            : 0)
      );
      selectedDateTime.setMinutes(selectedMinute);

      // console.log(selectedDateTime, "dddd", minimumDateTime);

      // Check if the selected date and time is at least 3 hours ahead
      const isValidDateTime = selectedDateTime >= minimumDateTime;
      // console.log(isValidDateTime, "fffffffff");
      if (!isValidDateTime) {
        setDateTimeMsg(
          "Reservations are disallowed less than 3 hour(s) before trip time."
        );
        valid = false;
      } else {
        setDateTimeMsg("");
      }
    }
    if (addStopArray.length > 0) {
      addStopArray.forEach((stop) => {
        if (!stop.location) {
          stop.error = true;
          valid = false;
        }
      });
      setAddStopArray([...addStopArray]); // Update the state of the array
    }
    // if (addStopArray.length > 0) {
    //   const lastStopIndex = addStopArray.length - 1;
    //   if (!addStopArray[lastStopIndex].location) {
    //     addStopArray[lastStopIndex].error = true;
    //     valid = false;
    //   }
    //   setAddStopArray([...addStopArray]); // Update the state of the array
    // }

    if (!isPointToPointHire && addStopArray.length === 0) {
      setHourlyMsg(true);
      valid = false;
    }

    if (isPointToPointHire) {
      setHourlyMsg(false);
    }

    return valid;
  };

  const HandleSubmit = async () => {
    const { coordinates } = store;
    let result = await checkValidation();
    // let result = true;
    console.log(result, "result");
    if (result === true) {
      let stopStates = [];
      if (addStopArray.length > 0) {
        stopStates = addStopArray
          .filter((stop) => stop?.location)
          .map((stop) => ({
            address: stop.inputValue,
            time: 15,
            type: "stops",
          }));
      }

      const mainData = {
        isPointToPointHire,
        pickUpLocation: pickupInputValue,
        dropOffLocation: dropoffInputValue,
        stops: stopStates,
        hour: +hour.split(" ")[0],
        // selectedTime: selectedDateTime?.format("h:mm A"),
        selectedTime: `${selectedHour
          ?.toString()
          .padStart(2, "0")}:${selectedMinute?.toString().padStart(2, "0")} ${
          isAM ? "AM" : "PM"
        }`,
        selectedDate: selectedDate?.format("ddd, MMM DD[th], YYYY"),
        // selectedDate: selectedDateTime?.format("ddd, MMM DD[th], YYYY"),
        totalDistance: parseFloat(distance?.replace(" mi", "")),
        totalDuration: duration,
      };

      const coordinatesData = {
        pickUp: pickupValue,
        dropOff: dropoffValue,
        pickUpLocation: pickupInputValue,
        dropOffLocation: dropoffInputValue,
        stops: addStopArray,
      };
      // console.log(stopStates, 'stopStates');
      updateStore({
        originalPoint: {
          ...originalPoint,
          OriginalReservation: mainData,
        },
        coordinates: {
          ...coordinates,
          ...coordinatesData,
        },
      });

      if (!distance) {
        setLoading(false);
        // return
      } else {
        // Storing the object in localStorage
        localStorage.setItem("originalPointData", JSON.stringify(mainData));
        localStorage.setItem(
          "coordinatesData",
          JSON.stringify(coordinatesData)
        );
        setLoading(true);
      }
    }
  };

  return (
    <div className="font-inter">
      <div className="mx-auto max-w-7xl headerpxset">
        <div
          className={
            image === "master-page" || image === "homepage"
              ? "mapdiv"
              : "mainheadersize"
          }
        >
          {(pickupValue && dropoffValue && showMap) ||
          (pickupValue &&
            showMap &&
            addStopArray.length > 0 &&
            addStopArray.some((stop) => stop?.location)) ? (
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}
            >
              {/* {directionsResponse && <Marker position={center} />} */}

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
                    left: "10px",
                  }}
                >
                  <p>Distance: {distance}</p>
                  <p>Duration: {duration}</p>
                </div>
              )}
            </GoogleMap>
          ) : (
            <div
              id={
                image !== "master-page" && image !== "homepage"
                  ? style.mainheadersize
                  : ""
              }
              className={style[image]}
            >
              {image === "homepage" && (
                <div className=" mb-8 max-w-7xl  pl-6 sm:pl-4 md:pl-5 lg:pl-10">
                  <p className="welco     rounded-md">
                    Welcome to Prestige Ride
                  </p>
                  <h1 className="newhomefont2">
                    The Future of <br />
                    <span className="newhomefont1 ">Black Car Service</span>
                  </h1>
                </div>
              )}

              {image === "master-page" && (
                <div className="item  display col-span-5 pt-96 mb-8 max-w-7xl  pl-6 sm:pl-4 md:pl-5 lg:pl-10">
                  <h1 className="newhomefont2 secondary">
                    Book your <br />
                    <span className="newhomefont1 secondary">
                      LUXURY TRANSFER
                    </span>
                  </h1>
                </div>
              )}

              {image !== "master-page" && image !== "homepage" && (
                <div className=" mb-8 max-w-3xl  pl-6 sm:pl-4 md:pl-5 lg:pl-10">
                  <h1 className="serviceh1">
                    <span className="">{subtitle}</span>
                    <span className="text-[#D5AF34] ">{title}</span>{" "}
                  </h1>
                </div>
              )}
            </div>
          )}
        </div>
        <div className=" grid grid-cols-1   sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2">
          <div className=" display-laptop lg:display-desktop  display  "></div>

          <div
            className={`lg:max-w-3xl  ${
              image !== "master-page" && image !== "homepage"
                ? "lg:pt-11 updateform2"
                : "updateform"
            }  order-3 md:order-none`}
          >
            <div className="master-shadow  relative lg:rounded-3xl bg-white ">
              <div className="text-center  flex justify-between p-0">
                <div
                  className={`label-form font0 ${
                    isPointToPointHire ? "point-to-pintborder" : ""
                  } w-1/2  pt-3  pl-2 pr-10 px-1 cursor-pointer lg:rounded-tl-3xl`}
                  onClick={() => {
                    setIsPointToPointHire(true);
                    setHourlyMsg(false);
                    if (typeof window !== "undefined") {
                      localStorage.setItem(
                        "isPointToPointHire",
                        JSON.stringify(true)
                      );
                    }
                  }}
                >
                  POINT TO POINT
                </div>
                <div
                  className={`label-form font0 ${
                    !isPointToPointHire ? "point-to-pintborder" : ""
                  } w-1/2 pt-3 px-1 cursor-pointer xl:rounded-tr-3xl`}
                  onClick={() => {
                    setIsPointToPointHire(false);
                    setHourlyMsg(false);
                    setDropoffValue(null);
                    setDropoffInputValue("");

                    if (typeof window !== "undefined") {
                      localStorage.setItem(
                        "isPointToPointHire",
                        JSON.stringify(false)
                      );
                    }
                  }}
                >
                  HOURLY HIRE
                </div>
              </div>
              <div className=" px-4 pt-4 grid grid-cols-1 gap-2">
                <div>
                  <label
                    htmlFor="pickupLocation"
                    className="block label-form fontsmall"
                  >
                    Pick-up Location
                  </label>
                  <LocationInputs
                    id="pickup-location"
                    text="Pick-Up Location"
                    value={pickupValue}
                    inputValue={pickupInputValue}
                    // options={pickupOptions}
                    // setOptions={setPickupOptions}
                    onChange={(event, newValue) => {
                      handleChange(event, newValue, "pickUp");
                    }}
                    onInputChange={(event, newInputValue) => {
                      handleInputChange(event, newInputValue, "pickUp");
                    }}
                    placeholder="Address, Airport, Hotel, ..."
                    error={pickupError}
                  />
                </div>

                {/* Second Row */}
                <div>
                  <div
                    onClick={addStop}
                    className="label-form   font0 cursor-pointer"
                    style={{ width: "max-content" }}
                  >
                    <span className="main_color"> + Add Stop</span>
                    {!isPointToPointHire && hourlyMsg && (
                      <span className="stopErrorMsg">Add atleast one Stop</span>
                    )}
                    {isPointToPointHire && hourlyMsg && (
                      <span className="stopErrorMsg">3 Stops Allowed</span>
                    )}
                  </div>

                  {/* Add Stop Inputs */}
                  {addStopArray.map((stop, i) => {
                    return (
                      <div key={i}>
                        <div className="  grid grid-cols-5 gap-3">
                          <div className="  col-span-4">
                            <label
                              htmlFor={`add-stop-location-${i}`}
                              className=" pl-2 label-form"
                            >
                              Stop Location
                            </label>
                            <div className="mt-2.5 ">
                              <LocationInputs
                                key={i}
                                text="Stop Location"
                                id={`stop-location-${i}`}
                                value={stop.location}
                                inputValue={stop.inputValue}
                                // options={stop.options}
                                // setOptions={(newOptions) =>
                                //   setStopOptionsAtIndex(newOptions, i)
                                // }
                                onChange={(event, newValue) =>
                                  handleChange(event, newValue, "stop", i)
                                }
                                onInputChange={(event, newInputValue) =>
                                  handleInputChange(
                                    event,
                                    newInputValue,
                                    "stop",
                                    i
                                  )
                                }
                                placeholder={`Stop Location`}
                                error={stop.error}
                              />
                            </div>
                          </div>

                          <div className="col-span-1">
                            <span
                              className={`absolute ${
                                isPointToPointHire ? "" : ""
                              }  mt-16 transform -translate-y-1/2 cursor-pointer`}
                              onClick={() => {
                                setShowMap(false);
                                handleDeleteStop(i);
                              }}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </span>
                          </div>
                        </div>
                        {isPointToPointHire === true && (
                          <div className=" pt-2 mb-2 flex text-xs ">
                            <div className="">
                              <Image
                                src={Info}
                                className="h-5"
                                alt="Info-icon"
                              />
                            </div>
                            <div className="pt-0 ml-1">
                              15 minutes stop time is available. If the wait
                              time exceeds it will be charged accordingly.
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Third Row */}
                {isPointToPointHire ? (
                  <div>
                    <label
                      htmlFor="dropOffLocation"
                      className="block label-form fontsmall]"
                    >
                      Drop-off Location
                    </label>
                    <LocationInputs
                      id="dropoff-location"
                      text="Drop-off Location"
                      value={dropoffValue}
                      inputValue={dropoffInputValue}
                      // options={dropoffOptions}
                      // setOptions={setDropoffOptions}
                      onChange={(event, newValue) => {
                        handleChange(event, newValue, "dropOff");
                      }}
                      onInputChange={(event, newInputValue) => {
                        handleInputChange(event, newInputValue, "dropOff");
                      }}
                      placeholder="Address, Airport, Hotel, ..."
                      error={dropoffError}
                    />
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor=" SelectHours"
                      className="block label-form fontsmall]"
                    >
                      Select Hours
                    </label>
                    <Autocomplete
                      value={hour}
                      onChange={(event, newValue) => {
                        setHour(newValue);
                        if (typeof window !== "undefined") {
                          localStorage.setItem(
                            "hour",
                            JSON.stringify(newValue)
                          );
                        }
                      }}
                      inputValue={inputHour}
                      onInputChange={(event, newInputValue) => {
                        setInputHour(newInputValue);
                        if (typeof window !== "undefined") {
                          localStorage.setItem(
                            "inputHour",
                            JSON.stringify(newInputValue)
                          );
                        }
                      }}
                      id="controllable-states-demo"
                      options={Hours}
                      disableClearable
                      renderInput={(params) => (
                        <div style={{ position: "relative" }}>
                          <AccessTimeFilledIcon
                            color="gray"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: 10,
                              color: "gray",
                              transform: "translateY(-50%)",
                            }}
                          />
                          <TextField
                            {...params}
                            // label="Select Hours"
                            className="customAutocomplete"
                          />
                        </div>
                      )}
                    />
                  </div>
                )}

                {/* Fourth Row */}
                <div className="grid gap-1.5  grid-cols-2">
                  <div>
                    <div
                      style={{ marginLeft: "1.9px" }}
                      className="grid grid-cols-1"
                    >
                      <label htmlFor="firstName" className="  label-form">
                        Pick-Up Date
                      </label>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {/* <DateTimePicker
                    id="pickUpDateTime"
                    minDate={minDate}
                    disableHighlightToday
                    disablePast // Disable time selection if date is not selected
                    ampm={false} // Disable AM/PM option
                    format="DD/MM/YYYY hh:mm a"
                    value={selectedDateTime}
                    open={isCalendarOpen}
                    onClose={() => setIsCalendarOpen(false)}
                    // closeOnSelect={true}
                    onChange={(newValue) => setSelectedDateTime(newValue)}
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: dateTimeError ? "" : "#2B3252",
                        },
                    }}
                    slotProps={{
                      textField: {
                        helperText: dateTimeError
                          ? "Pick-up Date & Time is required"
                          : "",
                        clearable: true,
                        error: dateTimeError,
                        onClick: () => {
                          setIsCalendarOpen(!isCalendarOpen);
                        },
                        onKeyDown: (e) => {
                          e.preventDefault();
                        },
                      },
                    }}
                  /> */}
                        <MuiDatePicker
                          minDate={minDate}
                          format="DD/MM/YYYY"
                          value={selectedDate}
                          onChange={handleDateChange}
                          open={isCalendarOpen}
                          onClose={() => setIsCalendarOpen(false)}
                          slotProps={{
                            textField: {
                              helperText: dateError
                                ? "Pick-up Date is required"
                                : "",
                              clearable: false,
                              error: dateError,
                              onClick: () => {
                                setIsCalendarOpen(!isCalendarOpen);
                              },
                              onKeyDown: (e) => {
                                e.preventDefault();
                              },
                            },
                          }}
                        />
                      </LocalizationProvider>
                    </div>
                  </div>

                  <div className="">
                    <div className=" pl-1 grid grid-cols-1">
                      <label htmlFor="firstName" className="label-form">
                        Pick-Up Time
                      </label>
                      <TimePicker
                        inputClick={inputClick}
                        setInputClick={setInputClick}
                        selectedHour={selectedHour}
                        setSelectedHour={setSelectedHour}
                        selectedMinute={selectedMinute}
                        setSelectedMinute={setSelectedMinute}
                        isAM={isAM}
                        setIsAM={setIsAM}
                        timeError={timeError}
                      />
                      {timeError === true && (
                        <div className="time-picker-style">
                          Pick-up Time is required
                        </div>
                      )}
                      {dateTimeMsg !== "" && (
                        <div className="time-picker-style">{dateTimeMsg}</div>
                      )}
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MuiTimePicker
                    format="h:mm A"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    open={isTimeOpen}
                    onClose={() => setIsTimeOpen(false)}
                    slotProps={{
                      textField: {
                        helperText: timeError ? "Pick-up Time is required" : "",
                        clearable: true,
                        error: timeError,
                        onClick: () => {
                          setIsTimeOpen(!isTimeOpen);
                        },
                        onKeyDown: (e) => {
                          e.preventDefault();
                        },
                      },
                    }}
                  />
                </LocalizationProvider> */}
                    </div>
                  </div>
                </div>

                <div>
                  <div className=" mt-2 mb-3  flex justify-center border-gray-900/10 ">
                    <button
                      onClick={HandleSubmit}
                      type="submit"
                      className="block w-full rounded-md bgseconday    px-3.5 py-2.5 text-center text-Large font-semibold text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <span>
                        {" "}
                        {loading === true || loading === false ? (
                          <>
                            <BeatLoader size={10} color="#ffff" />
                          </>
                        ) : (
                          "NEXT"
                        )}{" "}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homepage;