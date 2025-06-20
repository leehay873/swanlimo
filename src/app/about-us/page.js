"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavBar from "../Component/navbar";
import States from "../Component/States";
import Blog from "../Component/Blog";
import aboutPic1 from       "../../../public/fleets/Mercedes-Sedan-1.webp";
import aboutPic2 from      "../../../public/fleets/Mercedes-Sedan-1.webp"
import aboutPic3 from       "../../../public/fleets/Mercedes-Sedan-1.webp"
import aboutpic4 from       "../../../public/fleets/Mercedes-Sedan-1.webp"
import abboutPic5 from       "../../../public/fleets/Mercedes-Sedan-1.webp"
import Image from "next/image";
import CTA from "../Component/Cta";
import Fms from "../Component/HeaderCard";
import Link from "next/link";

const stats = [
  { label: "Limos delivered", value: "1,200+" },
  { label: "Satisfied clients", value: "980+" },
  { label: "Service rating", value: "4.9" },
];

export default function SwanLimoServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <title>
        Swan Limo Services | Premium Luxury Transportation Solutions
      </title>

      <meta
        name="description"
        content="Discover Swan Limo's premium luxury transportation services. Professional chauffeurs, exquisite fleet, and unparalleled service for your special occasions."
      />

      <meta
        name="keywords"
        content="Swan Limo, luxury transportation, limousine service, wedding limo, airport transfer, corporate limo, premium chauffeur service"
      />

      <link rel="canonical" href="https://www.swanlimo.com/about-us" />

      <div className="bg-white">
        <NavBar />

        <main className="isolate">
          <div className="relative isolate -z-10">
            <svg
              className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              />
            </svg>
            <div
              className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
              aria-hidden="true"
            >
              <div
                className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{
                  clipPath:
                    "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                }}
              />
            </div>
            <div className="overflow-hidden">
              <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8 lg:pt-12">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                  <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                    <h1 className="custom-heading-about">
                      Welcome to{" "}
                      <span className="MainColor">Swan Limo Services</span>
                    </h1>
                    <h2 className="custom-heading-about">
                      Luxury Transportation Redefined
                    </h2>

                    <p className="custom-paragraph-about relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      Swan Limo is a premier luxury transportation company 
                      specializing in exquisite limousine services for weddings, 
                      corporate events, proms, and special occasions. Our fleet 
                      of pristine vehicles and professional chauffeurs ensure 
                      an unforgettable experience.
                    </p>
                    <p className="custom-paragraph-about relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                      At Swan Limo, we pride ourselves on delivering white-glove 
                      service with attention to every detail. From our immaculate 
                      stretch limousines to our punctual and discreet chauffeurs, 
                      we provide the ultimate in luxury ground transportation 
                      throughout the region. Our 24/7 concierge service ensures 
                      your complete satisfaction.
                    </p>
                    <div className="mt-10">
                      <Link href="/get-a-quote">
                        <button
                          type="button"
                          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 getFreeQuotebtn"
                        >
                          BOOK NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                      <div className="relative">
                        <Image
                          src={aboutPic1}
                          alt="Swan Limo Fleet"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                      <div className="relative">
                        <Image
                          src={aboutpic4}
                          alt="Luxury Limo Interior"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          src={aboutPic3}
                          alt="Professional Chauffeur"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                      <div className="relative">
                        <Image
                          src={aboutPic2}
                          alt="Wedding Limo Service"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div className="relative">
                        <Image
                          src={abboutPic5}
                          alt="Airport Limo Transfer"
                          className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CTA />
          
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
            <States />
          </div>
        </main>
      </div>
    </>
  );
}