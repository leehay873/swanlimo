import Link from "next/link";
import React from "react";
import Navbar from "../Component/navbar";
import Thankyou from "../../../public/thankyou.png";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <Navbar />
      <main className="relative isolate min-h-full">
        <div
          className="flex pt-4 pb-4 justify-center  text-3xl font-bold tracking-tight secondary sm:text-4xl"
          style={{ background: "rgba(245, 245, 245, 1)", marginBottom: "20px" }}
        >
          <h1>
            Thank You for Choosing{" "}
            <span className="MainColor">USA Best Car Shipping</span>
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-6 text-center sm:py-4 lg:px-8">
          <div className="flex justify-center  px-10 pt-2 mx-auto max-w-3xl">
            <Image src={Thankyou} alt="Thank-you" />
          </div>
          <h2 className="text-2xl  font-bold mt-3 mb-2 secondary ">
            Quote SUBMITTED
          </h2>
          {/* <h3 className="updatedheading secondary">
            Your Quote Number #{" "}
            <span className="MainColor">
              10001 */}
          {/* {bookingNumber}
            {returnBookingNumber != "" && (
              <>
                {" , "} {returnBookingNumber}
              </>
            )} */}
          {/* </span>
          </h3> */}

          <p className="mt-2 updatedpara mx-auto max-w-2xl secondary sm:mt-6">
            Your request has been submitted. Our customer service representative
            will get back to you shortly. Thank you for choosing{" "}
            <span className="MainColor">USA Best Car Shipping</span>.
          </p>
          <div className=" flex justify-center">
            <Link
              href="/"
              scroll={true}
              className="text-sm font-semibold leading-7 text-white"
            >
              <button className="bgseconday pr-4 pl-4 mb-7 pt-2 pb-2 rounded-xl mt-3">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
