import Link from "next/link";
import Image from "next/image";

// Replace these with your actual fleet images
import ExecutiveSedan from "../../../public/fleets/Mercedes-Sedan-1.webp";
import PremiumSUV from "../../../public/fleets/Lincoln-Limousine.png";
import LuxurySUV from "../../../public/fleets/premium-suv.jpg";
import ExecutiveSprinter from "../../../public/fleets/Mercedes-Sedan-1.webp";
import PartyBus from "../../../public/fleets/bus.png";

const fleetData = [
  {
    id: 1,
    title: "Executive Sedans",
    description: "BMW 7 Series, Mercedes-Benz S-Class",
    features: ["Premium comfort", "Elegant interiors", "Professional chauffeurs"],
    imageUrl: ExecutiveSedan,
    link: "/fleet/executive-sedans"
  },
  {
    id: 2,
    title: "Premium SUVs",
    description: "Cadillac Escalade, Lincoln Navigator",
    features: ["Spacious seating", "Luxury amenities", "All-weather capability"],
    imageUrl: PremiumSUV,
    link: "/fleet/premium-suvs"
  },
  {
    id: 3,
    title: "Luxury SUVs",
    description: "Mercedes GLS, Range Rover Autobiography",
    features: ["Executive seating", "State-of-the-art tech", "Privacy features"],
    imageUrl: LuxurySUV,
    link: "/fleet/luxury-suvs"
  },
  {
    id: 4,
    title: "Executive Sprinter",
    description: "Mercedes-Benz Sprinter Limousine",
    features: ["10-14 passengers", "VIP configuration", "Entertainment system"],
    imageUrl: ExecutiveSprinter,
    link: "/fleet/executive-sprinter"
  },
  {
    id: 5,
    title: "Party Bus",
    description: "Custom luxury party vehicles",
    features: ["Dance floor", "Premium sound system", "LED lighting"],
    imageUrl: PartyBus,
    link: "/fleet/party-bus"
  }
];

export default function OurFleet() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered Title and Subtitle */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Luxury Fleet
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Premium vehicles for every occasion
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {fleetData.map((vehicle) => (
            <div key={vehicle.id} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-gray-200 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src={vehicle.imageUrl}
                  alt={vehicle.title}
                  className="h-full w-full object-cover object-center"
                  width={500}
                  height={300}
                  priority
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                <Link href={vehicle.link}>
                  <span className="absolute inset-0" />
                  {vehicle.title}
                </Link>
              </h3>
              <p className="text-base text-gray-600 font-medium">{vehicle.description}</p>
              <ul className="mt-4 space-y-2">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={vehicle.link}
                  className="text-sm font-semibold text-black"
                >
                  View details <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}

          {/* Special Fleet Inquiry Card */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-8 text-center">
            <div className="mb-6 rounded-full bg-blue-100 p-4">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Special Requests?</h3>
            <p className="mt-2 text-gray-600">
              Contact us for custom fleet solutions and large group transportation
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contact Us
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}