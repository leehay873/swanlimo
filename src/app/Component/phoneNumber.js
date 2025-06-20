"use client"
import React, { useState } from 'react';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return !match[2] ? match[1] : '(' + match[1] + ') ' + match[2] + (match[3] ? '-' + match[3] : '');
    }
    return null;
  };

  const handleChange = (e) => {
    const inputPhoneNumber = e.target.value;
    const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        Phone Number
      </label>
        <div className="relative mt-2 rounded-md shadow-sm">
    
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#A2384D" class="w-4 h-4">
  <path fill-rule="evenodd" d="M1 3a2 2 0 0 1 2-2h.875c.688 0 1.287.469 1.455 1.135l.879 3.516a1.25 1.25 0 0 1-.462 1.307l-1.096.822c-.094.07-.114.174-.088.246a7.52 7.52 0 0 0 4.465 4.465c.088.032.213.007.299-.088l.822-1.096a1.25 1.25 0 0 1 1.307-.462l3.516.879c.633.158 1.135.725 1.135 1.375V13a2 2 0 0 1-2 2h-1.5C7.552 15 1 8.448 1 4.5V3Z" clip-rule="evenodd" />
</svg>

    </div>
    <input
      type="text"
      name="phone"
      id="phone"
              value={phoneNumber}
        onChange={handleChange}
      maxLength="14"
      className="customer_name      block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="(123) 456-7890"
    />
  </div>
  </div>


    // <div className="flex items-center">
    //   <svg
    //     className="h-5 w-5 mr-2 text-gray-500"
    //     fill="none"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth="2"
    //     viewBox="0 0 24 24"
    //     stroke="currentColor"
    //   >
    //     <path d="M12 6V3m0 12v3M4 4v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6a2 2 0 00-2 2z"></path>
    //   </svg>
    //   <input
    //     type="text"
    //     value={phoneNumber}
    //     onChange={handleChange}
    //     className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    //     placeholder="(123) 456-7890"
    //     maxLength="14"
    //   />
    // </div>
  );
};

export default PhoneNumberInput;
