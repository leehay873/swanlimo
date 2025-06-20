"use client";

import Image from "next/image";

import StateData from "../state.json";
import Link from "next/link";
const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};
// const clients = [
//   {
//     id: 1,
//     name: 'Alabama ',
//     imageUrl: Alabama,

//     desc:"Car shipping services anywhere to or from The Golden State"
//   },
//   {
//     id: 1,
//     name: 'New york',
//     imageUrl: newyork,

//     desc:"Florida auto transport services, to and from The Sunshine State"
//   },
//   {
//     id: 1,
//     name: 'Florida',
//     imageUrl: florida,

//     desc:"Florida auto transport services, to and from The Sunshine State"
//   },

//   {
//     id: 1,
//     name: 'Texas',
//     imageUrl: texas,

//     desc:"Vehicle shipping services to and throughout The Lone Star State"
//   },

//   {
//     id: 1,
//     name: 'Chicago',
//     imageUrl: Chicago_car_shipping,

//     desc:"Vehicle shipping services to and throughout The Lone Star State"
//   },

//   {
//     id: 1,
//     name: 'Georgia',
//     imageUrl: georgia,

//     desc:"Vehicle shipping services to and throughout The Lone Star State"
//   },
//   {
//     id: 1,
//     name: 'Illinois',
//     imageUrl: illinois,

//     desc:"Vehicle shipping services to and throughout The Lone Star State"
//   },

//   {
//     id: 1,
//     name: 'Washington',
//     imageUrl: Washington,

//     desc:"Vehicle shipping services to and throughout The Lone Star State"
//   },

// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className=" py-24 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ship a car to another{" "}
            <span className="MainColor">state - Nationwide </span>
          </h2>

          <p className="custom-paragraph">
            There is no limit when it comes to transporting a car to another
            state. Our state to state auto transport services cover all 50
            states.
          </p>
        </div>

        <ul
          role="list"
          className="grid mt-10 grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-4 xl:gap-x-8"
        >
          {StateData?.map((client) => (
            <li
              key={client.id}
              className="overflow-hidden rounded-xl border border-gray-200"
            >
              <Link href={client ? client.link : "/"}>
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50">
                  <Image
                    src={client.imageUrl}
                    alt={client.titleMain}
                    width={100}
                    height={100}
                    className="h-24 w-full flex-none   object-cover ring-1 ring-gray-900/10"
                  />
                </div>
                <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                  <div className="flex justify-between gap-x-4 ">
                    <h3
                      className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                      dangerouslySetInnerHTML={{ __html: client.titleMain }}
                    ></h3>
                  </div>
                  <div className="flex justify-between gap-x-4 py-2">
                    <dt className="text-gray-500">{client.desc}</dt>
                  </div>
                </dl>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-6xl  flex justify-center mt-10 ">
        <Link href="/states">
          <button type="button" className="rounded-md  text-sm  getAllButton">
            Get a FREE  Quote
          </button>
        </Link>
      </div>
    </div>
  );
}
