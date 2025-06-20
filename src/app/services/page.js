import React from 'react'
import Navbar from '../Component/navbar'
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import ServerSection from "../../../public/services/serviceHero.svg"
import Indivilidual from "./indivlidual"
import Image from 'next/image'
import Business from "./Business"
import Services from "../Component/services"
import Cta from "../Component/Cta"
import BookingForm from '../Component/BookingForm'
import HeaderAll from '../Component/HeaderAll'
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

const page = () => {
  return (
    <div>
<title>Reliable Auto Transport Services | USA BEST CAR SHIPPING</title>
<meta name="description" content="USA BEST CAR SHIPPING offers reliable auto transport services, including open/enclosed carrier, cross-country, classic, exotic, military, and student car shipping."/>
<meta property="og:site_name" content="USA Best Car Shipping" />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="Ship a car, another state, car shipping, vehicle shipping,Door to door,Open carrier,Enclosed carrier, car shipping, Guaranteed pick-up, car shipping, Hawaii, car shipping,Seasonal, car shipping,Exotic automobile, car shipping, Expedited, car shipping,Motorcycle shipping, Military vehicle shipping,privately owned vehicle,Student car shipping,Electric vehicle,Travel healthcare, nurse car transport, physician car transport, ATV shipping, UTV shipping, vehicle shipping, Golf cart shipping, vehicle shipping,Alaska, car shipping,Collector car, classic car shipping, Jet ski shipping, watercraft transport"
      />
<link rel="canonical" href="https://www.usabestcarshipping.com/services" />
      <Navbar/>
      <HeaderAll/>
      <Services/>
        {/* <Indivilidual/> */}
        <Cta />
        <Business/>
    </div>
  )
}

export default page