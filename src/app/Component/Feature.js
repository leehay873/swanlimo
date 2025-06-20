// import React from 'react';
import HeaderCard from "../Component/HeaderCard";
import { BoltIcon, UsersIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const actions = [
  {
    title: "Car Dealer",
    description:
      "As a car dealer, you are part of the auto business! We value all your customers. We would love to offer our dedicated and high-value auto transportation services in the way you like.",
    href: "#",
    icon: BoltIcon,
  },
  {
    title: "Family or Mover",
    description:
      "Our reliable and trustworthy auto transport service can help you whether you are a casual vehicle mover looking to relocate across any state or need your family vehicle to get shipped safely!",
    href: "#",
    icon: UsersIcon,
  },
  {
    title: "Auction Buyer",
    description:
      "As an auction broker, you might have to win a good auto deal at an auction. Congratulations! We offer our reliable auto transport service for the on-time and secure arrival of your valuable purchase.",
    href: "#",
    icon: CalendarDaysIcon,
  },
  {
    title: "Online car buyer",
    description:
      "As an online car buyer, you may have selected and purchased your dream car online! Now, it is time to bring it over to your doorstep! We do offer secure, reliable and door-to-door transportation services at affordable rates.",
    href: "#",
    icon: CalendarDaysIcon,
  },
];
const Feature = () => {
  return (
    <div>
      <div className="footer_bg py-16 sm:py-18 border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="custom-heading-all">
              We can help you <span className="MainColor"> if you are</span>
            </h2>
            <p className="custom-paragraph">
              Car shipping charges are estimated in accordance with the current
              market trends for nationwide auto transportation. The total cost
              offered by an auto shipping company will depend on the type of car
              you want to move, the pickup/ delivery locality, its size,
              condition, total transport distance, transport type (open or
              enclosed trailer shipment), and the specific time of year when the
              booking is made.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <HeaderCard actions={actions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```

*/

// import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
// export default function Example() {
//   return (
//     <div className="footer_bg py-16 sm:py-18 border">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="relative  bg-[#a2384d] overflow-hidden  shadow-2xl py-10 xl:px-20 sm:rounded-3xl">
//           <h2 className="mx-auto max-w-2xl text-center  text-3xl text-white sm:text-4xl">
//             We can help you if you are
//           </h2>
//           <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:pt-2 mt-14">
//             {actions?.map((action) => {
//               return (
//                 <>
//                   <div className="flex flex-col items-center text-center">
//                     <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
//                       <HandRaisedIcon
//                         aria-hidden="true"
//                         className="h-12 w-12 text-white"
//                       />
//                     </div>
//                     <dt className="mt-4 font-semibold text-white">
//                       {action?.title}
//                     </dt>
//                     <dd
//                       className="mt-2 line-clamp-5 custom-paragraph-about"
//                       style={{ textAlign: "center", color: "white" }}
//                     >
//                       {action?.description}
//                     </dd>
//                   </div>
//                 </>
//               );
//             })}
//           </dl>
//         </div>
//       </div>
//     </div>
//   );
// }
