import React from "react";

import Header from "./Component/Header";
// import BookingStep from "./Component/BookingSteps";
import Fleet from "./Component/fleet";
import Deals from "./Component/deals";
import Services from "./Component/services";
import Reviews from "./Component/reviews";
import Feature from "./Component/Feature";
import CTA from "./Component/Cta";
import States from "./Component/States";
import Blog from "./Component/Blog";
import Faq from "./Component/Faq";
import Charges from "./Component/charges";
import Location from "./Component/locations";
import Route from "./Component/routes";
const page = () => {
  return (
    <div>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/Favicon.png" sizes="32x32" />
      <link rel="icon" href="/Favicon.png" sizes="16x16" />
      <link rel="apple-touch-icon" href="/Favicon.png" />
      <title>USA Best Car Shipping | Your Trusted Car Transport Company</title>
      <meta
        name="description"
        content="Looking for the best car shipping in USA? Get reliable and affordable auto transport services to safely move your vehicle. Get a FREE Quote  Today!"
      />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="" />
      <link rel="canonical" href="https://www.usabestcarshipping.com/" />

      <Header />
                  <Fleet/>

      {/* <CTA /> */}
      <Services />
      {/* <BookingStep/> */}


      {/* <Deals /> */}
      {/* <Feature /> */}

      <States />

      {/* <Location /> */}
      {/* <CTA /> */}
      <Route />
      <Charges />
      <Faq />
      <Reviews />
      {/* <Blog /> */}
      {/* <CTA /> */}
    </div>
  );
};

export default page;
