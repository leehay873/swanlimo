
import Image from "next/image";
import Pickup from "../../../public/deals/pickup.svg"
import Summer from "../../../public/deals/summer.webp"
import Multiple from "../../../public/deals/mutiple.webp"
import Aramy from "../../../public/deals/aramy.svg"
import Senior from "../../../public/deals/senior.webp"
import Sunday from "../../../public/deals/sunday.webp"
import student from "../../../public/deals/student.webp"

const people = [
    {
      name: "Guaranteed Pick-up",
      role: "Spring Savings for Returning Snowbirds",
      imageUrl:Pickup,
      xUrl: "#",
      linkedinUrl: "#",
      "metaTitle": "Guaranteed Pick-Up Car Shipping Deal | USA Best Car Shipping",
      "metaDescription": "Take advantage of our guaranteed pick-up car shipping deal with USA Best Car Shipping. Perfect for returning snowbirds looking for spring savings.",
      "keywords": "Guaranteed Pick-Up, Car Shipping Deal, USA Best Car Shipping, Spring Savings"
    },
    {

      name: " Senior Discount",
      role: "Saluting Those Who Serve!",
      imageUrl:
      Senior,
      xUrl: "#",
      linkedinUrl: "#",
      "metaTitle": "Senior Car Shipping Discount | USA Best Car Shipping",
      "metaDescription": "USA Best Car Shipping offers special discounts for seniors. Salute those who serve with our exclusive car shipping discount.",
      "keywords": "Senior Discount, Car Shipping Discount, USA Best Car Shipping, Military Discount"
    },
    {
      name: "Summer Deal",
      role: "Saluting Those Who Serve!",
      imageUrl:
      Summer,
      xUrl: "#",
      linkedinUrl: "#",
      "metaTitle": "Summer Car Shipping Deal | USA Best Car Shipping",
      "metaDescription": "Enjoy our summer car shipping deal at USA Best Car Shipping. Saluting those who serve with special summer savings.",
      "keywords": "Summer Deal, Car Shipping Savings, USA Best Car Shipping, Seasonal Discounts"
    },
    {
        name: "Multiple Cars Discount",
        role: "Spring Savings for Returning Snowbirds",
        imageUrl:Multiple,
        xUrl: "#",
        linkedinUrl: "#",
        "metaTitle": "Multiple Cars Discount on Auto Transport | USA Best Car Shipping",
        "metaDescription": "Save more on shipping multiple cars with USA Best Car Shipping's spring savings. Ideal for returning snowbirds.",
        "keywords": "Multiple Cars Discount, Auto Transport Savings, USA Best Car Shipping, Spring Offer"
      
      },
      {
        name: "Military Discount",
        role: "Saluting Those Who Serve!",
        imageUrl:
        Aramy,
        xUrl: "#",
        linkedinUrl: "#",
        "metaTitle": "Military Car Shipping Discount | USA Best Car Shipping",
        "metaDescription": "USA Best Car Shipping honors military personnel with special discounts on car shipping. Salute your service with our exclusive offer.",
        "keywords": "Military Discount, Car Shipping for Military, USA Best Car Shipping, Special Discounts"
      },  
          {
        name: "Sunday Saving",
        role: "Spring Savings for Returning Snowbirds",
        imageUrl:
        Sunday,
        xUrl: "#",
        linkedinUrl: "#",
        "metaTitle": "Sunday Car Shipping Savings | USA Best Car Shipping",
        "metaDescription": "Take advantage of our Sunday savings on car shipping with USA Best Car Shipping. Perfect for returning snowbirds and seasonal needs.",
        "keywords": "Sunday Savings, Car Shipping Deal, USA Best Car Shipping, Spring Savings"
      },
      {
        name: "📚 👨‍🎓 Student Discount ",
        role: "Study Smart, Spend Less: Our Student Car Shipping Discounts",
        imageUrl:
        student,
        xUrl: "#",
        linkedinUrl: "#",
        "metaTitle": "Student Car Shipping Discount | USA Best Car Shipping",
        "metaDescription": "Save on car shipping with USA Best Car Shipping’s student discounts. Study smart and spend less with our special offer.",
        "keywords": "Student Discount, Car Shipping for Students, USA Best Car Shipping, Education Savings"
      },

      // {
      //   name: " Sunday Discount",
      //   role: "Saluting Those Who Serve!",
      //   imageUrl:
      //     "https://sgtautotransport.com/sites/default/files/styles/deal_teaser/public/storage/military_dealbox_1.jpg.webp?itok=O90_t79D",
      //   xUrl: "#",
      //   linkedinUrl: "#",
      // },
    // More people...
  ];
  
  export default function Example() {
    return (
    
      <div className="bg-white py-24 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 text-center">
            <h2 className="custom-heading-all">
              Discover Exclusive <span className='MainColor'>Auto Transport Offers </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              USABCS offers some specialized discounts for its customers.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            {people.map((person) => (
  
              <article
                key={person.name}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-60"
              >
                <Image
                  src={person.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"></div>
                <h3 className="leading-6 text-white  deals_card_h3">
                  <a href={person.name}>
                    <span className="absolute inset-0" />
                    {person.name}
                  </a>
                </h3>
                <p className="text-sm text-white mb-4 ">{person.role}</p>
                <button type="button" className="  getdealBtn">
                  Get Deal
                </button>
              </article>
            ))}
          </ul>
        </div>

      </div>
    );
  }
  