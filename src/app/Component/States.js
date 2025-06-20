"use client";
import Image from "next/image";
import california from "../../../public/states/california.jpg";
import florida from "../../../public/states/florida.jpg";
import texas from "../../../public/states/texas.jpg";
import newyork from "../../../public/states/new-york.jpg";
import Chicago_car_shipping from "../../../public/states/Chicago_car_shipping.jpg";
import georgia from "../../../public/states/georgia.jpg";
import illinois from "../../../public/states/illinois.jpg";
import Washington from "../../../public/states/washington.jpg";
import pennsylvania from "../../../public/states/pennsylvania.jpg"; // Make sure to add this image
import StateData from "../state.json";
import Link from "next/link";

const clients = [
  {
    id: 1,
    name: "California",
    imageUrl: california,
    desc: "Premium car & limousine shipping services to/from California with white-glove delivery.",
  },
  {
    id: 2,
    name: "New York",
    imageUrl: newyork,
    desc: "Luxury auto & limo transport throughout New York with climate-controlled options.",
  },
  {
    id: 3,
    name: "Florida",
    imageUrl: florida,
    desc: "Executive vehicle and limousine shipping solutions across Florida's major cities.",
  },
  {
    id: 4,
    name: "Texas",
    imageUrl: texas,
    desc: "Statewide limousine and luxury car transport with enclosed carrier options.",
  },
  {
    id: 5,
    name: "Chicago",
    imageUrl: Chicago_car_shipping,
    desc: "Premium Chicago limo shipping with GPS tracking and full insurance coverage.",
  },
  {
    id: 6,
    name: "Georgia",
    imageUrl: georgia,
    desc: "Luxury vehicle and limousine transport with experienced chauffeur services.",
  },
  {
    id: 7,
    name: "Illinois",
    imageUrl: illinois,
    desc: "White-glove limousine shipping services for all luxury vehicle types.",
  },
  {
    id: 8,
    name: "Washington",
    imageUrl: Washington,
    desc: "VIP limo transport with flexible scheduling and premium concierge service.",
  },
  {
    id: 9,
    name: "Pennsylvania",
    imageUrl: pennsylvania,
    desc: "Executive limousine transport services throughout Pennsylvania with door-to-door delivery.",
  },
];

export default function StateShippingGrid() {
  let filteredStates = StateData.filter((state) => {
    return [
      "California",
      "New York",
      "Florida",
      "Texas",
      "Georgia",
      "Illinois",
      "Washington",
      "Pennsylvania",
    ].includes(state.title);
  });

  return (
    <div className="py-16 sm:py-18">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
          <h2 className="custom-heading-all">
            Ship Luxury Vehicles Nationwide
            <span className="MainColor">Including Limousines</span>
          </h2>
          <p className="custom-paragraph">
            Our premium transportation services cover luxury cars, limousines and executive vehicles 
            across all 50 states with VIP treatment.
          </p>
        </div>

        <ul
          role="list"
          className="grid mt-10 grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-4 md:grid-cols-3 xl:gap-x-8"
        >
          {filteredStates?.map((client) => (
            <li
              key={client.id}
              className="overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <Link 
                href={client?.link || "/"} 
                className="block"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50">
                  <Image
                    src={client.imageUrl}
                    alt={`Luxury vehicle shipping in ${client.title}`}
                    width={278}
                    height={96}
                    className="h-24 w-full flex-none object-cover ring-1 ring-gray-900/10"
                    priority
                  />
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {client.title} Limo Services
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {clients.find(c => c.name === client.title)?.desc}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
<div className="mx-auto max-w-6xl flex justify-center mt-10">
  <Link
    href="/limousine-shipping"
    className="rounded-md px-8 py-3 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
  >
    View All Limousine Services
  </Link>
</div>    </div>
  );
}