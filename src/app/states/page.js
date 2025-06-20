import React from 'react'
import Navbar from "../Component/navbar"
import ServerSection from "../../../public/services/serviceHero.svg"
import BookingForm from '../Component/BookingForm'
import StatesAll from "../Component/StatesAll"
import Image from 'next/image'
import HeaderAll from '../Component/HeaderAll'
const page = () => {
  return (
    <div>
    <Navbar/>
    <HeaderAll/>

  <StatesAll/>
  </div>
  )
}

export default page