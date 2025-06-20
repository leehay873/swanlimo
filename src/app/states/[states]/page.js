"use client"
import React,{useEffect,useState} from 'react'
import Navbar from '../../Component/navbar'
import StateData from "../../state.json"
import ServerSection from "../../../../public/services/serviceHero.svg"
import Image from 'next/image';
import BookingForm from '../../Component/BookingForm'; 
import BookingStep from "../../Component/BookingSteps" 
import HowMuch from "./HowMuch" 
import TableState from './TablesState';
import TablesStateTwo from './TablesStateTwo';
import CTA from "../../Component/Cta"
import City from "./citys"
import Reviews from "../../Component/reviews"
import States from "../../Component/States"
import Blog from "../../Component/Blog"
import HeaderAll from '@/app/Component/HeaderAll';
import Services from "./services"
import Popluar from "./Popluar"
const page = ({params}) => {
  const [data, setData] = useState('')


  const getServices = () => {
    const filter = StateData?.map((p) => {
      if(p.slug === params?.states)
        {
          setData(p)
        }
    })

  }

  useEffect(() => {
    getServices()
  }, [])
  


  return (
    <div>
    <Navbar/>
    <HeaderAll data={data}/>
     <BookingStep/>
     <CTA/>
     <HowMuch/>
     <Popluar/>
     <TableState/>
     <TablesStateTwo/>
     <CTA/>
     <City/>
     <States/>
     <Reviews/>
     <CTA/>

    </div>
  )
}

export default page