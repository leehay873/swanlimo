"use client"
import React, { useState } from 'react';

const CitySection = () => {
    const locations = [
      {
        city: "Albany, NY",
        services: "Auto Transport Services to or from Albany New York:",
        zipCodes: "12202, 12203, 12204, 12205, 12206, 12207, 12208, 12209, 12210, 12211, 12222 & surrounding areas"
      },
      {
        city: "Binghamton, NY",
        services: "Auto Transport Services to or from Binghamton New York:",
        zipCodes: "13901, 13903, 13904, 13905 & surrounding areas"
      },
      {
        city: "Albany, NY",
        services: "Auto Transport Services to or from Albany New York:",
        zipCodes: "12202, 12203, 12204, 12205, 12206, 12207, 12208, 12209, 12210, 12211, 12222 & surrounding areas"
      },
      {
        city: "Binghamton, NY",
        services: "Auto Transport Services to or from Binghamton New York:",
        zipCodes: "13901, 13903, 13904, 13905 & surrounding areas"
      },
      {
        city: "Albany, NY",
        services: "Auto Transport Services to or from Albany New York:",
        zipCodes: "12202, 12203, 12204, 12205, 12206, 12207, 12208, 12209, 12210, 12211, 12222 & surrounding areas"
      },
      {
        city: "Binghamton, NY",
        services: "Auto Transport Services to or from Binghamton New York:",
        zipCodes: "13901, 13903, 13904, 13905 & surrounding areas"
      },
      {
        city: "Albany, NY",
        services: "Auto Transport Services to or from Albany New York:",
        zipCodes: "12202, 12203, 12204, 12205, 12206, 12207, 12208, 12209, 12210, 12211, 12222 & surrounding areas"
      },
      {
        city: "Binghamton, NY",
        services: "Auto Transport Services to or from Binghamton New York:",
        zipCodes: "13901, 13903, 13904, 13905 & surrounding areas"
      }
      ,
      {
        city: "Binghamton, NY",
        services: "Auto Transport Services to or from Binghamton New York:",
        zipCodes: "13901, 13903, 13904, 13905 & surrounding areas"
      }
      ,
      {
        city: "Binghamton, NY",
        services: "Auto Transport Services to or from Binghamton New York:",
        zipCodes: "13901, 13903, 13904, 13905 & surrounding areas"
      }
      ,
      {
        city: "Binghamton, NY",
        services: "Auto Transport Services to or from Binghamton New York:",
        zipCodes: "13901, 13903, 13904, 13905 & surrounding areas"
      }
      ,
      {
        city: "Binghamton, NY",
        services: "Auto Transport Services to or from Binghamton New York:",
        zipCodes: "13901, 13903, 13904, 13905 & surrounding areas"
      }
      ,
      {
        city: "Binghamton, NY",
        services: "Auto Transport Services to or from Binghamton New York:",
        zipCodes: "13901, 13903, 13904, 13905 & surrounding areas"
      }

    ];
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };
  
    const visibleLocations = showMore ? locations : locations.slice(0, 3);
    return (
      <div className="footer_bg py-16 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="work_heading text-3xl sm:text-4xl">
            How Long Does It Take To
            <span className='MainColor'> Auto-Transport a Vehicle? </span>
          </h2>
          
          <p className="custom-paragraph">
            The different destinations located under 500–600 miles from a pickup location will require, on average, 24 hours or 1–2 days for Vehicle Auto Transportation. Places that are 600 miles distant from the pickup location will usually need more time.
          </p>
         
        </div>
        <div className=" ">
          {visibleLocations.map((location, index) => (
            <div key={index} className="MainBackgroundColor p-4 my-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-white">{location.city}</h2>
              <p className="mt-2 text-white">{location.services}</p>
              <p className="mt-1 text-white">{location.zipCodes}</p>
            </div>
          ))}
          {locations.length > 3 && (
            <button
              onClick={toggleShowMore}
              className="MainBackgroundColor text-white px-4 py-2 rounded-md mt-4"
            >
              {showMore ? 'See Less Locations' : 'See More Locations'}
            </button>
          )}
        </div>
      </div>
    </div>
    );
  };
  
  export default CitySection;
  