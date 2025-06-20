"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../Component/navbar";
import HeaderAll from "@/app/Component/HeaderAll";
import ServiceDetailsContent2 from "./servicesDetailsContent2";
import ServicesData from "../../data/services.json";
import ServicesTable from "./servicesTable";
import ReviewsPage from "@/app/services/[services]/reviews";
import CTA from "../../Component/Cta";
import BookingStep from "../../Component/BookingSteps";
import Faq from "@/app/Component/Faq";
import Blog from "../../Component/Blog";
import Feater from "../../Component/Feature";
import Card from "../Card";
const page = ({ params }) => {
  const [data, setData] = useState("");

  const getServices = () => {
    const filter = ServicesData?.map((p) => {
      if (p.slug === params?.services) {
        setData(p);
      }
    });
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <title>{data?.meta?.title}</title>
      <meta name="description" content={data?.meta?.description} />

      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={data?.meta?.keywords} />
      <link
        rel="canonical"
        href={`https://www.usabestcarshipping.com${data?.link}`}
      />
      <Navbar />
      <HeaderAll data={data} />

      {/* <CTA /> */}
      {/* <ServiceCTA/> */}
      {/* <ServiceDetailsContent1/> */}
      {/* <ServiceDetailsContent2 /> ------------- */}
      {/* <Card/> */}
      <BookingStep />
      <CTA />
      {/* <Feater /> */}
      {/* <ServicesTable /> */}

      {/* <CTA /> */}

      {/* <ReviewsPage /> */}
      <Faq />
      {/* <Blog /> */}
    </>
  );
};
export default page;
