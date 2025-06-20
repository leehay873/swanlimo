import Image from "next/image";
import aramy from "../../../public/deals/aramy.svg";

import Senior from "../../../public/deals/senior.webp";
import student from "../../../public/deals/student.webp";
import Link from "next/link";
const people = [
  {
    name: " Senior Discount",
    role: "Saluting Those Who Serve!",
    imageUrl: Senior,
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Military Discount",
    role: "Saluting those who serve the nation!",
    imageUrl: aramy,
    xUrl: "#",
    linkedinUrl: "#",
  },
  // {
  //   name: "📚 👨‍🎓 Student Discount ",
  //   role: "Study Smart, Spend Less: Our Student Car Shipping Discounts",
  //   imageUrl: student,
  //   xUrl: "#",
  //   linkedinUrl: "#",
  //   metaTitle: "Student Car Shipping Discount | USA Best Car Shipping",
  //   metaDescription:
  //     "Save on car shipping with USA Best Car Shipping’s student discounts. Study smart and spend less with our special offer.",
  //   keywords:
  //     "Student Discount, Car Shipping for Students, USA Best Car Shipping, Education Savings",
  // },
  // More people...
];

export default function Example() {
  return (
    <div className="bg-white py-16 sm:py-18 border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl lg:mx-0 text-center">
          <h2 className="custom-heading-all">
            Uncover Exclusive 
            <span className="MainColor">Car Shipping Deals </span>
          </h2>
          <p className="custom-paragraph">
            USABCS offers some amazing discounts for its customers.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {people.map((person) => (
            <article
              key={person.name}
              className="dealarticle relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-40 sm:pt-40 lg:pt-60"
            >
              <Image
                src={person.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"></div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={person.name}>
                  <span className="absolute inset-0" />
                  {person.name}{" "}
                  {/* <span className="" aria-hidden="true">
                    {" "}
                    &rarr;
                  </span> */}
                </a>
              </h3>
              <p className="text-sm text-white mb-4">{person.role}</p>
              <button type="button" className="getdealBtn">
                Get Deal
              </button>
            </article>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-7xl mt-10 flex justify-center  ">
        <Link href="deals">
          <button type="button" className="rounded-md  text-sm  getAllButton">
            View all Deals
          </button>
        </Link>
      </div>
    </div>
  );
}
