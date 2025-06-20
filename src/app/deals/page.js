import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Navbar from '../Component/navbar'
import Deals from "./dealsItem"
import ReviewsPage from "../Component/reviews";
import ServerSection from "../../../public/services/serviceHero.svg";
import States from "../Component/States";
import Image from 'next/image';
import Routes from "../Component/routes"
import BookingForm from '../Component/BookingForm';
import Banner from "../Component/banner"
import Senior from "../../../public/deals/senior.webp"
import HeaderAll from '../Component/HeaderAll';
import CTA from "../Component/Cta"
const cards = [
  {
    name: 'Sales',
    description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Media Inquiries',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
]

export default function Example() {
  return (
    <>
           <title>Special Discounts on Auto Transport - USA Best Car Shipping Offers</title>
      <meta
        name="description"
        content="Explore exclusive discounts on auto transport services with USA Best Car Shipping. Enjoy savings on pick-ups, military, student, and more!"
      />
            <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="Auto Transport Deals
Car Shipping Discounts
USA Best Car Shipping Offers
Guaranteed Pick-Up Discounts
Military Car Shipping Discount
Student Car Shipping Discounts
Multiple Cars Discount
Spring Savings Auto Transport
Exclusive Auto Transport Offers
Special Car Shipping Offers"
      />
<link rel="canonical" href="https://www.usabestcarshipping.com/" />

    <Navbar/>
    <States/>
        <Routes/>

    <HeaderAll />
    {/* <Deals/> */}
    <ReviewsPage/>
    <CTA/>
    </>
  )
}
