"use client";
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ReviewsPage = () => {
  const reviews = [
    {
      title: "Great product!",
      body: `Impressed by swanlimo's professionalism and punctuality. My car arrived on time, securely transported, exceeding my expectations. Trustworthy and dependable!`,
      author: "John Doe",
    },
    {
      title: "Amazing service!",
      body: `swanlimo delivered exceptional service, ensuring my vehicle's safety and timely delivery. Communication was clear, making the entire experience stress-free. Thank you.`,
      author: "Jane Smith",
    },
    {
      title: "Amazing service!",
      body: `Smooth and seamless transport experience with swanlimo. Their team handled everything efficiently, keeping me updated throughout. Delighted with the service and highly satisfied!`,
      author: "Jane Smith",
    },
    {
      title: "Amazing service!",
      body: `Outstanding service from swanlimo! They were attentive to my needs, delivering my car promptly and in perfect condition. Will definitely use their services again.`,
      author: "Jane Smith",
    },
    {
      title: "Amazing service!",
      body: `“swanlimo exceeded my expectations with their top-notch service. Courteous staff, timely delivery, and my vehicle arrived without a scratch. Highly recommend for hassle-free auto transport!”
`,
      author: "Jane Smith",
    },
    // Add more reviews as needed
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
    <div className="footer_bg py-16 sm:py-18 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="custom-heading-all">
            We Provide Car Shipping Services with{" "}
            <span className="MainColor">Top-tier Service </span>
          </h2>
          <p className="custom-paragraph">
            limousine Service Offers On-Time, Reliable And Excellent
            Customer Service.
          </p>
        </div>

        <div className="">
          <Carousel responsive={responsive}>
            {reviews?.map((review, index) => (
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <p className="sr-only">5 out of 5 stars</p>
                  <div className="flex gap-x-1 mb-2 text-indigo-600">
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                      style={{ color: "#fdc902" }}
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                      style={{ color: "#fdc902" }}
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                      style={{ color: "#fdc902" }}
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                      style={{ color: "#fdc902" }}
                    />
                    <StarIcon
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                      style={{ color: "#fdc902" }}
                    />
                  </div>

                  <blockquote className="text-gray-900">
                    <p>{review?.body}</p>
                  </blockquote>
                  <figcaption className="mt-10 flex items-center gap-x-6">
                    <img
                      className="h-12 w-12 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                      alt=""
                    />
                    <div className="text-sm leading-6">
                      <div className="font-semibold text-gray-900">
                        Judith Black
                      </div>
                      <div className="mt-0.5 text-gray-600">
                        CEO of Workcation
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
