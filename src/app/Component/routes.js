"use client";
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";

const ReviewsPage = () => {
  const route = [
    {
      name: "California →  Texas",
    },
    {
      name: "California → Florida",
    },
    {
      name: "Texas → California",
    },
    {
      name: "Florida → California",
    },
    {
      name: "Florida → Texas",
    },
    {
      name: "Florida → New York",
    },
    {
      name: "New York → Florida",
    },
    {
      name: "Texas → Florida",
    },
  ];
  const reviews2 = [
    {
      title: [
        {
          name: "California →  Texas",
        },
        {
          name: "California → Florida",
        },
        {
          name: "Texas → California",
        },
        {
          name: "Florida → California",
        },
        {
          name: "Florida → Texas",
        },
      ],
    },
    {
      title: [
        {
          name: "Florida → New York",
        },
        {
          name: "New York → Florida",
        },
        {
          name: "Texas → Florida",
        },
        {
          name: "California → New York",
        },
        {
          name: "Florida → Massachusetts",
        },
      ],
    },

    {
      title: [
        {
          name: "Florida → New Jersey",
        },
        {
          name: "New Jersey → Florida",
        },
        {
          name: "California → Washington",
        },
        {
          name: "New York → California",
        },
        {
          name: "Florida → Michigan",
        },
      ],
    },

    {
      title: [
        {
          name: "California → Georgia",
        },
        {
          name: "California → Virginia",
        },
        {
          name: "Virginia → California",
        },
        {
          name: "California → North Carolina",
        },
        {
          name: "Florida → Colorado",
        },
      ],
    },
    {
      title: [
        {
          name: "Washington → California",
        },
        {
          name: "Arizona → Texas",
        },
        {
          name: "New Jersey → California",
        },
        {
          name: "California → Pennsylvania",
        },
        {
          name: "Illinois → California",
        },
      ],
    },

    {
      title: [
        {
          name: "Texas → Washington",
        },
        {
          name: "California → Illinois",
        },
        {
          name: "California → Massachusetts",
        },
        {
          name: "California → Tennessee",
        },
        {
          name: "California → Arizona",
        },
      ],
    },
    {
      title: [
        {
          name: "Florida → Illinois",
        },
        {
          name: "North Carolina → California",
        },
        {
          name: "Florida → Pennsylvania",
        },
        {
          name: "Washington → Texas",
        },
        {
          name: "Georgia → California",
        },
      ],
    },
    {
      title: [
        {
          name: "Massachusetts → California",
        },
        {
          name: "California → New Jersey",
        },
        {
          name: "Florida → Ohio",
        },
        {
          name: "Massachusetts → Florida",
        },
        {
          name: "New York → Texas",
        },
      ],
    },
    {
      title: [
        {
          name: "Arizona → Florida",
        },
        {
          name: "Florida → North Carolina",
        },
        {
          name: "Arizona → California",
        },
        {
          name: "Virginia → Texas",
        },
        {
          name: "Pennsylvania → Florida",
        },
      ],
    },
    {
      title: [
        {
          name: "Colorado → California",
        },
        {
          name: "New Jersey → Texas",
        },
        {
          name: "Florida → Washington",
        },
        {
          name: "North Carolina → Texas",
        },
        {
          name: "California → Oregon",
        },
      ],
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
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
    <div className=" py-16 sm:py-18 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="custom-heading-all" style={{ textAlign: "start" }}>
            Top <span className="MainColor">Auto Shipping Routes</span>
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
          <div className="grid grid-cols-1 mt-10 gap-4 sm:grid-cols-4">
            {route.map((person, index) => (
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
