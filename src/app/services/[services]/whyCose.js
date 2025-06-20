import React from 'react';
import  HeaderCard from "../../Component/HeaderCard"
import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const actions = [
  {
    title: 'Car Dealer',
    description:
      'As a car dealer, you are part of the auto business! We value all your customers. We would love to offer our dedicated and high-value auto transportation services in the way you like.',
    href: '#',
    icon: BoltIcon,
  },
  {
    title: 'Family or Mover',
    description:
      'Our reliable and trustworthy auto transport service can help you whether you are a casual vehicle mover looking to relocate across any state or need your family vehicle to get shipped safely!',
    href: '#',
    icon: UsersIcon,
  },
  {
    title: 'Auction Buyer',
    description:
      'As an auction broker, you might have to win a good auto deal at an auction. Congratulations! We offer our reliable auto transport service for the on-time and secure arrival of your valuable purchase.',
    href: '#',
    icon: CalendarDaysIcon,
  },
  {
    title: 'Online car buyer',
    description:
      'As an online car buyer, you may have selected and purchased your dream car online! Now, it is time to bring it over to your doorstep! We do offer secure, reliable and door-to-door transportation services at affordable rates.',
    href: '#',
    icon: CalendarDaysIcon,
  },

  {
    title: 'Auction Buyer',
    description:
      'As an auction broker, you might have to win a good auto deal at an auction. Congratulations! We offer our reliable auto transport service for the on-time and secure arrival of your valuable purchase.',
    href: '#',
    icon: CalendarDaysIcon,
  },
  {
    title: 'Online car buyer',
    description:
      'As an online car buyer, you may have selected and purchased your dream car online! Now, it is time to bring it over to your doorstep! We do offer secure, reliable and door-to-door transportation services at affordable rates.',
    href: '#',
    icon: CalendarDaysIcon,
  },];
const Feature = () => {
  return (
    <div>
    <div className="footer_bg py-16 sm:py-18 border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-7xl lg:mx-0">
        <h2 className="custom-heading-all">
        The benefits of using our <span className='MainColor'> open car shipping service</span>
          </h2>
          <p className="custom-paragraph">
          Car shipping charges are estimated in accordance with the current market trends for nationwide auto transportation. The total cost offered by an auto shipping company will depend on the type of car you want to move, the pickup/ delivery locality, its size, condition, total transport distance, transport type (open or enclosed trailer shipment), and the specific time of year when the booking is made.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-none">

       
          <div className="mx-auto mb-10 max-w-7xl  lg:px-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  ">
      {actions?.map((action, actionIdx) => (
        <div className="headerCard group relative rounded-2xl bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 shadow-md">
          <div className="bg-image h-8 w-8"></div>
          <div className="mt-4 md:mt-8">
            <h3 className="headerCard_heading ">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm headerCard_para">{action.description}</p>
          </div>
          <span
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          ></span>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feature;
