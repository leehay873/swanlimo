import React from 'react'
import Image from 'next/image'
import ServerSection from "../../../public/services/nominated-car-carrier-auto-transport-truck-filled-2023-11-27-05-20-37-utc.jpg"
import ServerSection2 from "../../../public/services/transportation-and-logistics-car-hauler-2023-11-27-05-30-13-utc (1).jpg"
import Contact from "../../../public/contact.jpg"
import BookingForm from './BookingForm'
const BlogHeader = ({data}) => {

  return (
    <div>
            <div className="contact-header relative isolate overflow-hidden bg-gray-900 py-10 sm:py-18 w-11/12 sm:w-4/5 mx-auto rounded-lg sm:rounded-2xl">
       
       {/* <Image
         src={Contact}
         alt="USA Best Car Shipping Contact Team"
        
         className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
         width={1344}
         height={596}
       /> */}

<div className="absolute inset-0 -z-10 rounded-2xl ring-1 bg-black opacity-35 ring-inset ring-gray-900/10" />
<div className="absolute inset-0 -z-10 bg-gradient-to-t  from-gray-900 via-gray-900/40" />

        <div className=" max-w-7xl  lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 ">
         <div className="px-6 lg:px-0 lg:pt-12 ">
           <h1 className="header_heading text-white">CONTACT <span className='MainColor'>US</span></h1>

         
         </div>

       </div>
       
     </div>







    </div>
  )
}

export default BlogHeader