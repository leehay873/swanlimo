"use client";
import emailjs from "emailjs-com";
import React, { useState, useEffect, Fragment } from "react";
import GoogleAutcomplete from "./googleAutoComplete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
  TimePicker as MuiTimePicker,
} from "@mui/x-date-pickers";

import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { index } from "d3";

const people = [
  { id: 1, year: "Select Year" },
  { id: 1, year: 2024 },
  { id: 2, year: 2023 },
  { id: 3, year: 2022 },
  { id: 4, year: 2021 },
  { id: 5, year: 2020 },
  { id: 6, year: 2019 },
  { id: 7, year: 2018 },
  { id: 8, year: 2017 },
  { id: 9, year: 2016 },
  { id: 10, year: 2015 },
  { id: 11, year: 2014 },
  { id: 12, year: 2013 },
  { id: 13, year: 2012 },
  { id: 14, year: 2011 },
  { id: 15, year: 2010 },
  { id: 16, year: 2009 },
  { id: 17, year: 2008 },
  { id: 18, year: 2007 },
  { id: 19, year: 2006 },
  { id: 20, year: 2005 },
  { id: 21, year: 2004 },
  { id: 22, year: 2003 },
  { id: 23, year: 2002 },
  { id: 24, year: 2001 },
  { id: 25, year: 2000 },
  { id: 26, year: 1999 },
  { id: 27, year: 1998 },
  { id: 28, year: 1997 },
  { id: 29, year: 1996 },
  { id: 30, year: 1995 },
  { id: 31, year: 1994 },
  { id: 32, year: 1993 },
  { id: 33, year: 1992 },
  { id: 34, year: 1991 },
  { id: 35, year: 1990 },
  { id: 36, year: 1989 },
  { id: 37, year: 1988 },
  { id: 38, year: 1987 },
  { id: 39, year: 1986 },
  { id: 40, year: 1985 },
  { id: 41, year: 1984 },
  { id: 42, year: 1983 },
  { id: 43, year: 1982 },
  { id: 44, year: 1981 },
  { id: 45, year: 1980 },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const mailingLists = [
  {
    id: 1,
    title: "Open transport",
    tag: "LOWEST COST",
    btn: "Proceed with open",
    description:
      "Vehicles are typically transported on open car carriers, like the ones you see delivering new cars to dealerships.",
    users: "621 users",
  },
  {
    id: 2,
    title: "Enclosed transport",
    tag: "MOST SECURE",
    btn: "Proceed with  enclose",
    description:
      "The cars are transported in a fully enclosed trailer that provides maximum protection from all environmental elements and road hazards.",
    users: "1200 users",
  },
];

const BookingForm = () => {
  const [selectedMailingLists, setSelectedMailingLists] = useState(
    mailingLists[0]
  );

  const [count, setCount] = useState(1);

  const [pickupValue, setPickupValue] = useState(null);
  const [pickupInputValue, setPickupInputValue] = useState("");
  const [dropoffValue, setDropoffValue] = useState(null);
  const [dropoffInputValue, setDropoffInputValue] = useState("");
  const [dropoffOptions, setDropoffOptions] = useState([]);
  const [pickupOptions, setPickupOptions] = useState([]);
  const [pickupError, setPickupError] = useState(false);
  const [dropoffError, setDropoffError] = useState(false);
  const [selectedDate, setSelectedDatePickup] = useState(null);
  const [pickupDateError, setPickupDateError] = useState(false);

  // count 2
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleMakeError, setVehicleMakeError] = useState(false);
  const [vehicleModel, setvehicleModel] = useState("");
  const [vehicleModelError, setvehicleModelError] = useState(false);

  const [selected, setSelected] = useState(people[0]);

  const [error, setError] = useState("");

  const [selectedDateDrop, setSelectedDateDrop] = useState(null);
  const [dropDateError, setDropDateError] = useState(false);

  // customer details
  const [customerName, setCustomerName] = useState("");
  const [customerNameError, setCustomerNameError] = useState(false);
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerEmailError, setCustomerEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return !match[2]
        ? match[1]
        : "(" + match[1] + ") " + match[2] + (match[3] ? "-" + match[3] : "");
    }
    return null;
  };

  const handleChangePhone = (e) => {
    const inputPhoneNumber = e.target.value;
    const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
    setPhoneNumber(formattedPhoneNumber);
    if (phoneNumberError && e.target.value) {
      setPhoneNumberError(false);
    }
  };

  const HandleCustomerName = (e) => {
    setCustomerName(e.target.value);
    if (customerNameError && e.target.value.trim() !== "") {
      setCustomerNameError(false);
    }
  };

  const HandleCustomerEmail = (e) => {
    setCustomerEmail(e.target.value);
    if (customerNameError && e.target.value.trim() !== "") {
      setCustomerEmailError(false);
    }
  };

  const HandleChangeVehicleMake = (e) => {
    setVehicleMake(e.target.value);
    if (vehicleMakeError && e.target.value.trim() !== "") {
      setVehicleMakeError(false);
    }
  };

  const HandleChangeVehicleModel = (e) => {
    setvehicleModel(e.target.value);
    if (vehicleModelError && e.target.value.trim() !== "") {
      setvehicleModelError(false);
    }
  };

  const handleDateChange = (newDate) => {
    setSelectedDatePickup(newDate);
    if (pickupDateError && newDate) {
      setPickupDateError(false);
    }
  };

  const handleDateChangeDropOFF = (newDate) => {
    setSelectedDateDrop(newDate);
    if (dropDateError && newDate) {
      setDropDateError(false);
    }
  };

  const notificationMethods = [
    { id: "Yes", title: "Yes" },
    { id: "No", title: "No" },
  ];

  const handleChange = (event, newValue, type) => {
    if (type === "pickUp") {
      setPickupOptions(newValue ? [newValue, ...pickupOptions] : pickupOptions);
      setPickupValue(newValue);
    } else if (type === "dropOff") {
      setDropoffOptions(
        newValue ? [newValue, ...dropoffOptions] : dropoffOptions
      );
      setDropoffValue(newValue);
    }
  };

  const handleInputChange = (event, newInputValue, type) => {
    if (type === "pickUp") {
      setPickupInputValue(newInputValue);
      if (pickupError && newInputValue.trim() !== "") {
        setPickupError(false);
      }
    } else if (type === "dropOff") {
      setDropoffInputValue(newInputValue);
      if (dropoffError && newInputValue.trim() !== "") {
        setDropoffError(false);
      }
    }
  };

  const HandleNext = () => {
    const areAllFieldsFilled = () => {
      return pickupValue && dropoffValue && selectedDate && selectedDateDrop;
    };
    const areAllFieldsFilledTwo = () => {
      return vehicleMake && vehicleModel;
    };
    const areAllFieldsFilledFour = () => {
      return customerName && customerEmail && phoneNumber;
    };

    if (count === 1) {
      if (!areAllFieldsFilled()) {
        setPickupError(!pickupValue);
        setDropoffError(!dropoffValue);
        setPickupDateError(!selectedDate);
        setDropDateError(!selectedDateDrop);
      } else {
        setCount(count + 1);
      }
    }
    if (count == 2) {
      if (!areAllFieldsFilledTwo()) {
        setVehicleMakeError(!vehicleMake);
        setvehicleModelError(!vehicleModel);
      } else {
        setCount(count + 1);
      }
    }

    if (count == 3) {
      setCount(count + 1);
    }
    if (count == 4) {
      if (!areAllFieldsFilledFour()) {
        setCustomerNameError(!customerName);
        setCustomerEmailError(!customerEmail);
        setPhoneNumberError(!phoneNumber);
      } else {
        const templateParams = {
          pickupInputValue,
          dropoffInputValue,
          selectedDate,
          selectedDateDrop,
          selected: selected.year,
          vehicleMake,
          vehicleModel,
          customerName,
          customerEmail,
          phoneNumber,
          type: selectedMailingLists.title,
        };

        console.log(templateParams, "templateParams");

        emailjs
          .send(
            "service_hix5j5c",
            "template_evlh2ip",
            templateParams,
            "WNYy5i4scU-0-rPDc"
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              window.location.href = "/thank-you"; // Update with the actual route of your Thank You page
            },
            (error) => {
              console.error("FAILED...", error);
            }
          );
        // setCount(count + 1);
      }
    }
  };

  const HandleBack = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <div className="bg-white form_main flex-col md:ml-auto mt-10 md:mt-0">
        <div className="mb-6">
    
          <h6 className="text-center md:text-start text-base md:text-lg">
            or call now{" "}
      
              {" "}
              <a
                className="color-black"
                href="tel:+1201527-4332"
                style={{ fontFamily: "sans-serif" }}
              >
                +1 ‪(201) 374-0018‬
              </a>{" "}

          </h6>
        </div>

        {count === 1 ? (
          <>
            <div>
              <div className="relative mb-2 md:mb-4">
                <label for="Pick-up-location" className="label_form">
                  Pick-Up Location
                </label>

                <div className="mt-2">
                  <GoogleAutcomplete
                    value={pickupValue}
                    id="Pick-up-location"
                    inputValue={pickupInputValue}
                    options={pickupOptions}
                    setOptions={setPickupOptions}
                    onChange={(event, newValue) => {
                      handleChange(event, newValue, "pickUp");
                    }}
                    onInputChange={(event, newInputValue) => {
                      handleInputChange(event, newInputValue, "pickUp");
                    }}
                    placeholder="Pick-up Zip Code "
                    error={pickupError}
                  />
                </div>
              </div>
              <div className="relative mb-2 md:mb-4">
                <label for="dropoff-location" className="label_form">
                  Delivery Location
                </label>
                <div>
                  <div className="mt-2">
                    <GoogleAutcomplete
                      id="dropoff-location"
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
                      placeholder="Delivery Zip Code"
                      error={dropoffError}
                    />
                  </div>
                </div>
              </div>

              <div className="grid max-w-2xl lg:grid-cols-2 gap-x-6 gap-y-2 grid-cols-2">
                <div className="relative w-full mb-2 md:mb-4">
                  <label for="full-name" className="label_form">
                    Pick-Up Date
                  </label>

                  <div className="mt-1 md:mt-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MuiDatePicker
                        disablePast
                        format="DD/MM/YYYY"
                        placeholder="Pick-up Date"
                        value={selectedDate}
                        id="full-name"
                        onChange={handleDateChange}
                        slotProps={{
                          textField: {
                            helperText: pickupDateError
                              ? "Pick-up Date is required"
                              : "",
                            clearable: true,
                            error: pickupDateError,
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                </div>

                <div className="relative w-full mb-2 md:mb-4">
                  <label for="email" className="label_form">
                    Delivery Date
                  </label>

                  <div className="mt-1 md:mt-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MuiDatePicker
                        disablePast
                        format="DD/MM/YYYY"
                        id="email"
                        placeholder="Drop-off Date"
                        value={selectedDateDrop}
                        onChange={handleDateChangeDropOFF}
                        slotProps={{
                          textField: {
                            helperText: dropDateError
                              ? "Drop-off Date is required"
                              : "",
                            clearable: true,
                            error: dropDateError,
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {count === 2 ? (
          <>
            <div className="mb-10">
              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <label className="label_form">Select Year</label>
                    <div className="relative mt-2">
                      <Listbox.Button className="select_year_dropdown relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A2384D] sm:text-sm sm:leading-6">
                        <span className="block truncate">{selected.year}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "bg-[#A2384D] text-white"
                                    : "text-gray-900",
                                  "relative cursor-default select-none py-2 pl-8 pr-4"
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "block truncate"
                                    )}
                                  >
                                    {person.year}
                                  </span>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-indigo-600",
                                        "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>

              <div className="mt-2 mb-0 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="vehiclemake" className="label_form">
                    Vehicle Make
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="vehiclemake"
                      placeholder="Enter Make"
                      className="vehicle_make block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-focus:ring-[#A2384D] sm:text-sm sm:leading-6"
                      value={vehicleMake}
                      onChange={HandleChangeVehicleMake}
                    />

                    {vehicleMakeError && (
                      <p class="error_message">Vehicle make is required.</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="Vehiclemodel" className="label_form">
                    Vehicle model
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="Vehiclemodel"
                      placeholder="Enter Model"
                      className="vehicle_make block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-focus:ring-[#A2384D] sm:text-sm sm:leading-6"
                      value={vehicleModel}
                      onChange={HandleChangeVehicleModel}
                    />
                    {vehicleModelError && (
                      <p class="error_message">Vehicle model is required.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-2 md:mb-4">
                <label className="label_form">Is the vehicle running?</label>

                <fieldset className="mt-2">
                  <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    {notificationMethods.map((notificationMethod, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          id={notificationMethod.id}
                          name="notification-method"
                          type="radio"
                          defaultChecked={notificationMethod.id === "Yes"}
                          className="custom-radio h-4 w-4 checkBtn"
                        />
                        <label
                          htmlFor={notificationMethod.id}
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          {notificationMethod.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          </>
        ) : null}

        {count === 3 ? (
          <>
            <div className="mb-3">
              <RadioGroup
                value={selectedMailingLists}
                onChange={setSelectedMailingLists}
              >
                <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900">
                  What transport method do you perfer ?
                </RadioGroup.Label>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-4">
                  {mailingLists.map((mailingList, index) => {
                    return (
                      <div key={index}>
                        <RadioGroup.Option
                          key={mailingList.id}
                          value={mailingList}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "border-[#a2384d] ring-2 ring-[#a2384d]"
                                : "border-gray-300 overflow-hidden",
                              mailingList.id === selectedMailingLists.id
                                ? "bg-[#a2384d]"
                                : "bg-white overflow-hidden",
                              "relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none  overflow-hidden"
                            )
                          }
                        >
                          {({ checked, active }) => (
                            <>
                              <span className="flex flex-1 ">
                                <h4 className="conv-card-ribbon_form">
                                  {mailingList?.tag}
                                </h4>
                                <span className="flex flex-col">
                                  <RadioGroup.Label
                                    as="span"
                                    className={
                                      mailingList.id === selectedMailingLists.id
                                        ? "block text-sm md:text-lg font-medium text-white"
                                        : "block text-sm md:text-lg font-medium text-gray-900"
                                    }
                                  >
                                    {mailingList.title}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className={
                                      mailingList.id === selectedMailingLists.id
                                        ? "mt-1 flex items-center text-sm text-white"
                                        : "mt-1 flex items-center text-sm text-gray-500"
                                    }
                                  >
                                    {mailingList.description}
                                  </RadioGroup.Description>
                                  <RadioGroup.Description
                                    as="span"
                                    className="mt-6 text-sm font-medium text-gray-900"
                                  ></RadioGroup.Description>
                                </span>
                              </span>
                              <CheckCircleIcon
                                className={classNames(
                                  !checked ? "invisible" : "",
                                  "h-5 w-5 text-indigo-600"
                                )}
                                aria-hidden="true"
                              />
                              <span
                                className={classNames(
                                  active
                                    ? "border-[#a2384d]"
                                    : "border-2-[#a2384d]",
                                  checked
                                    ? "border-[#a2384d]"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-lg"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      </div>
                    );
                  })}
                </div>
              </RadioGroup>
            </div>
          </>
        ) : null}

        {count === 4 ? (
          <>
            <div className=" mb-6 sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="mt-2 md:mt-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="relative mt-2  rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="#A2384D"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM1.667 11.38a5.5 5.5 0 0 1 10.666 0 .5.5 0 0 1-.292.465A12.011 12.011 0 0 1 8 13c-1.786 0-3.483-.39-5.001-1.09a.5.5 0 0 1-.292-.465Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    className="customer_name block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Jane Smith"
                    value={customerName}
                    onChange={HandleCustomerName}
                  />
                </div>
                {customerNameError && (
                  <p class="error_message">Name is required.</p>
                )}
              </div>

              <div className="mt-2 md:mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="relative mt-2  rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="#A2384D"
                      class="w-4 h-4"
                    >
                      <path d="M1 5.8v6.864a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.8l-7.928 4.894a2 2 0 0 1-2.144 0L1 5.8Z" />
                      <path d="M16 4.072V4a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v.072l7.714 4.748a1 1 0 0 0 1.072 0L16 4.072Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="customer_name block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="your@exmaple.com"
                    value={customerEmail}
                    onChange={HandleCustomerEmail}
                  />
                </div>
                {customerEmailError && (
                  <p class="error_message">Email is required.</p>
                )}
              </div>

              <div className="mt-2 md:mt-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="#A2384D"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 3a2 2 0 0 1 2-2h.875c.688 0 1.287.469 1.455 1.135l.879 3.516a1.25 1.25 0 0 1-.462 1.307l-1.096.822c-.094.07-.114.174-.088.246a7.52 7.52 0 0 0 4.465 4.465c.088.032.213.007.299-.088l.822-1.096a1.25 1.25 0 0 1 1.307-.462l3.516.879c.633.158 1.135.725 1.135 1.375V13a2 2 0 0 1-2 2h-1.5C7.552 15 1 8.448 1 4.5V3Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phoneNumber}
                    onChange={handleChangePhone}
                    maxLength="14"
                    className="customer_name  block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="(123) 456-7890"
                  />
                </div>
                {phoneNumberError && (
                  <p class="error_message">Phone Number is required.</p>
                )}
              </div>
            </div>
            <fieldset>
              <legend className="sr-only">Notifications</legend>
              <div className="space-y-5">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="custom-checkbox"
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="comments" className="font-medium MainColor">
                      Agree to receive SMS from USA best Car Shipping.
                    </label>
                    <p
                      id="comments-description"
                      className="text-gray-500 text-xs md:text-sm"
                    >
                      By checking this option you authorize Usa Best Car
                      Shipping . to contact you via SMS with regards to your
                      quote/booking. Message frequency varies. Your agreement is
                      not a condition for purchasing. Text STOP to opt-out. Text
                      HELP for help. Message & data rates may apply.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
          </>
        ) : null}

        <div
          className={
            count > 1
              ? "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
              : null
          }
        >
          {count > 1 ? (
            <>
              {" "}
              <button
                onClick={HandleBack}
                type="button"
                className="back_btn inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Back
              </button>
            </>
          ) : null}
          <button
            type="button"
            onClick={HandleNext}
            className=" get_a_banner_btn"
          >
            {count === 1 ? "Proceed" : ""}
            {count === 2 ? "Proceed" : ""}
            {count === 3 ? selectedMailingLists.btn : ""}
            {count === 4 ? "Get your quote" : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
