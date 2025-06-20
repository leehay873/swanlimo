"use client";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import CTA from "../Component/Cta";
import { Disclosure } from "@headlessui/react";
import Step1 from "../../../public/bookingStep/step1-01.svg";
import Step2 from "../../../public/bookingStep/step2-01.svg";
import Step3 from "../../../public/bookingStep/step3-01.svg";
import Image from "next/image";

import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
export default function Example() {
  return (
    <>
      <div className="overflow-hidden footer_bg py-16 sm:py-18 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl  grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 MainColor">
                  Step 1
                </h2>
                <h2 className="custom-heading-about ">
                  <span className="MainColor ">Get a FREE QUOTE</span> and book
                  your order
                </h2>

                <p className="mt-6 custom-paragraph-about">
                  If you want to know how to ship a car across the country or
                  anywhere else, getting a quote is the first step in the
                  process. Contact us today to get your free instant quote. Use
                  our instant online quote calculator, all it takes is just a
                  couple of minutes of your time. Alternatively, you can speak
                  directly with our shipping advisors at{" "}
                  <a className="MainColor" href="tel:+1201527-4332">
                    +1 ‪(201) 374-0018‬
                  </a>{" "}
                  or use Live Chat.
                </p>
                <p className="mt-6 custom-paragraph-about">
                  When you contact us to find out how to move a car, we’ll ask
                  for some simple details. You’ll need to provide the city and
                  state where you want your vehicle to be picked up, the city
                  and state where you want us to deliver your vehicle, the make,
                  model, and year of the vehicle. You also need to let us know
                  whether it is running or not, how you’d prefer to ship your
                  car, and when it will be ready for pick-up. In the auto
                  transport industry, this is known as the First Available
                  Pick-up Date.
                </p>
                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
              </div>
            </div>
            <Image
              src={Step1}
              alt="Get a FREE Quotea quote and book your order"
              className=""
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      {/* <div className="footer_bg  py-16 sm:py-18 display ">
      <div className="mx-auto max-w-7xl px-2 py-1 mb-12 ">
        <div className="mx-auto max-w-7xl px-6 py-1 divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold secondary">
            Frequently Asked Questions{" "}
            <span style={{ color: "#a2384d" }}>(FAQs)</span>
          </h2>

          <dl className="mt-10 space-y-3 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure
                as="div"
                key={index}
                className="pt-4"
                defaultOpen={index === 0} // Open the first FAQ by default
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="updatedheading">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="updatedparapremu">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>

          <div className="mt-4 text-center"></div>
        </div>
      </div>
    </div> */}

      <CTA />

      <div className=" footer_bg overflow-hidden py-16 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold MainColor">Step 2</h2>

                <h2 className="work_heading text-3xl  sm:text-4xl">
                  We pick up <span className="MainColor "> your vehicle</span>
                </h2>
                <p className="mt-6 custom-paragraph-about">
                  How to ship your car step #2 is the pick up of your vehicle.
                  The carrier assigned to your shipment will contact you a few
                  hours ahead of time to let you know they’re on their way. You
                  will need to confirm that commercial vehicles can access the
                  pick-up location. Before they contact you, check whether there
                  are any restrictions, overhead power cables, or low-hanging
                  branches that will impede the carrier’s truck and trailer.
                </p>
                <p className="mt-6 custom-paragraph-about">
                  Don’t be too concerned if there is a problem, because you can
                  easily arrange a more suitable location. You may, for example,
                  know of a nearby street that’s wider where you could meet. A
                  pick-up where you work or at a nearby parking lot might also
                  be more suitable.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                src={Step2}
                alt="we pick up your vehicle"
                className=""
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer_bg  py-16 sm:py-18 display ">
      <div className="mx-auto max-w-7xl px-2 py-1 mb-12 ">
        <div className="mx-auto max-w-7xl px-6 py-1 divide-y divide-gray-900/10">
          <h2 className="text-3xl font-bold secondary">
            Frequently Asked Questions{" "}
            <span style={{ color: "#a2384d" }}>(FAQs)</span>
          </h2>

          <dl className="mt-10 space-y-3 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure
                as="div"
                key={index}
                className="pt-4"
                defaultOpen={index === 0} // Open the first FAQ by default
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="updatedheading">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="updatedparapremu">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>

          <div className="mt-4 text-center"></div>
        </div>
      </div>
    </div> */}
      <CTA />

      <div className="overflow-hidden bg-white py-16 sm:py-18 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-4xl  grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 ">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 MainColor">
                  Step 3
                </h2>

                <h2 className="work_heading text-3xl  sm:text-4xl">
                  <span className="MainColor ">You receive </span> your vehicle
                </h2>
                <p className="mt-6 scustom-paragraph-about">
                  How to ship a car is not a long, drawn-out process, and before
                  you know it, the carrier will be getting in touch to let you
                  know they’re just a few hours away from the delivery location.
                  This is merely a courtesy call. However, they’re also
                  informing you so you can make sure you’re available to receive
                  your car. Don’t worry if you know you’re going to be busy
                  because it is possible to make alternative arrangements. You
                  can nominate a third party to act on your behalf. The only
                  stipulation is that they have to be 18 years of age or older.
                  The third-party could be a work colleague, neighbor, relative,
                  or friend.
                </p>
                <p className="mt-6 scustom-paragraph-about">
                  When your vehicle is unloaded, the driver will ask you to
                  check the condition of your vehicle and compare it with the
                  Bill of Lading. If you chose the Discounted Price payment
                  option, now is when you hand over the final payment to the
                  driver. You can pay in cash, with a money order or cashier’s
                  check.
                </p>
              </div>
            </div>
            <Image
              src={Step1}
              alt="your receive your vehicle"
              className=""
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="footer_bg  py-16 sm:py-18 display ">
        <div className="mx-auto max-w-7xl px-2 py-1 mb-12 ">
          <div className="mx-auto max-w-7xl px-6 py-1 divide-y divide-gray-900/10">
            <h2 className="text-3xl font-bold secondary">
              Frequently Asked Questions{" "}
              <span style={{ color: "#a2384d" }}>(FAQs)</span>
            </h2>

            <dl className="mt-10 space-y-3 divide-y divide-gray-900/10">
              {faqs.map((faq, index) => (
                <Disclosure
                  as="div"
                  key={index}
                  className="pt-4"
                  defaultOpen={index === 0} // Open the first FAQ by default
                >
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="updatedheading">{faq.question}</span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="updatedparapremu">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>

            <div className="mt-4 text-center"></div>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
