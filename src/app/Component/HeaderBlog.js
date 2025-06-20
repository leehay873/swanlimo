import React from 'react'
import Image from 'next/image'
import ServerSection from "../../../public/services/nominated-car-carrier-auto-transport-truck-filled-2023-11-27-05-20-37-utc.jpg"
import ServerSection2 from "../../../public/services/transportation-and-logistics-car-hauler-2023-11-27-05-30-13-utc (1).jpg"

import BookingForm from './BookingForm'
const HeaderAll = ({data}) => {

  return (
    <div>
            <div className="relative isolate overflow-hidden bg-gray-900 py-10 sm:py-18 w-11/12 sm:w-4/5 mx-auto rounded-lg sm:rounded-2xl">
       
       <Image
         src={data? data.imageUrl:ServerSection2}
         alt={data?.title}
         className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
         width={1344}
         height={596}
       />

<div className="absolute inset-0 -z-10 rounded-2xl ring-1 bg-black opacity-35 ring-inset ring-gray-900/10" />
<div className="absolute inset-0 -z-10 bg-gradient-to-t  from-gray-900 via-gray-900/40" />

        <div className="mx-auto  max-w-7xl  lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
         <div className="px-6 lg:px-0 lg:pt-12 ">
           <h1 className="header_heading text-white">{data?data.titleMain:'Our Car Shipping Services'}</h1>
           <p className="mt-6 text-lg leading-8 text-gray-300">
           For over a decade, individuals and businesses have relied on Swanlimo for the safe luxury rides from their vehicles throughout the United States. We have experience in all freight transport verticals and our transport coordinators are waiting to provide you will excellent freight transport services throughout the US, Hawaii and Alaska.
           </p>
         
         </div>

       </div>
       
     </div>
    </div>
  )
}

export default HeaderAll