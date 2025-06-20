"use client";
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const ReviewsPage = () => {
  const location = [
    {
      name: "New York City",
    },
    {
      name: "Los Angeles",
    },
    {
      name: "Chicago",
    },
    {
      name: "Miami",
    },
    {
      name: "Dallas",
    },
    {
      name: "Philadelphia",
    },
    {
      name: "Houston",
    },
    {
      name: "Atlanta",
    },
    {
      name: "Phoenix",
    },
    {
      name: "Seattle",
    },
  ];
  const reviews = [
    {
      title: [
        {
          name: "New York City",
        },
        {
          name: "Los Angeles",
        },
        {
          name: "Chicago",
        },
      ],
    },
    {
      title: [
        {
          name: "Miami",
        },
        {
          name: "Dallas",
        },
        {
          name: "Philadelphia",
        },
      ],
    },
    {
      title: [
        {
          name: "Houston",
        },
        {
          name: "Atlanta",
        },
        {
          name: "Boston",
        },
      ],
    },

    {
      title: [
        {
          name: "Phoenix",
        },
        {
          name: "Seattle",
        },
        {
          name: "San Francisc0",
        },
      ],
    },
    {
      title: [
        {
          name: "Detroit",
        },
        {
          name: "San Diego",
        },
        {
          name: "Minneapolis",
        },
      ],
    },
    {
      title: [
        {
          name: "Tampa",
        },
        {
          name: "Denver",
        },
        {
          name: "Brooklyn",
        },
      ],
    },

    {
      title: [
        {
          name: "Queens",
        },
        {
          name: "Riverside",
        },
        {
          name: "Baltimore",
        },
      ],
    },

    {
      title: [
        {
          name: "Las Vegas",
        },
        {
          name: "Portland",
        },
        {
          name: "San Antonio",
        },
      ],
    },

    {
      title: [
        {
          name: "St. Louis",
        },
        {
          name: "Sacramento",
        },
        {
          name: "Orlando",
        },
      ],
    },

    {
      title: [
        {
          name: "San Jose",
        },
        {
          name: "Cleveland",
        },
        {
          name: "Pittsburgh",
        },
      ],
    },

    {
      title: [
        {
          name: "Austin",
        },
        {
          name: "Cincinnati",
        },
        {
          name: "Kansas City",
        },
      ],
    },

    {
      title: [
        {
          name: "Manhattan",
        },
        {
          name: "Indianapolis",
        },
        {
          name: "Columbus",
        },
      ],
    },

    {
      title: [
        {
          name: "Charlotte",
        },
        {
          name: "Virginia Beach",
        },
        {
          name: "Bronx",
        },
      ],
    },

    {
      title: [
        {
          name: "Milwaukee",
        },
        {
          name: "Providence",
        },
        {
          name: "Jacksonville",
        },
      ],
    },

    {
      title: [
        {
          name: "Salt Lake City",
        },
        {
          name: "Nashville",
        },
        {
          name: "Richmond",
        },
      ],
    },

    {
      title: [
        {
          name: "Memphis",
        },
        {
          name: "Raleigh",
        },
        {
          name: "New Orleans",
        },
      ],
    },

    {
      title: [
        {
          name: "Louisville",
        },
      ],
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="footer_bg py-16 sm:py-18 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="custom-heading-all" style={{ textAlign: "start" }}>
            Top <span className="MainColor">Auto Transport Locations</span>
          </h2>
          {/* <p className="custom-paragraph">
            We provide direct door to door car shipping services to and from
            every city and state in the country, making{" "}
            <span className="MainColor">USA Best Car shipping</span> a
            convenient option when searching for a reliable auto transport
            company. Check out some of the most popular vehicle shipping
            locations.
          </p> */}
        </div>

        <div className="">
          <div className="grid grid-cols-1 mt-10 gap-4 sm:grid-cols-5">
            {location.map((person, index) => (
              <div
                key={index}
                className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
              >
                <div className="min-w-0 flex-1">
                  <a href="#" className="focus:outline-none">
                    <span aria-hidden="true" className="absolute inset-0" />
                    <p
                      className="text-lg font-medium text-gray-900"
                      style={{ color: "#1d1e22b2" }}
                    >
                      {person.name}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-7xl mt-10 flex justify-end  ">
            <Link href="deals">
              <button
                type="button"
                className="rounded-md  text-sm  getAllButton"
              >
                See all Locations
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
