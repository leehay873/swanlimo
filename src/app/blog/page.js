import React from 'react'
import Blog from "../Component/Blog"
import Navbar from "../Component/navbar"
import HeaderBlog from '../Component/HeaderBlog'


const page = () => {
  return (
    <div>
        <Navbar/>
        <HeaderBlog/>
      <Blog/>
    </div>
  )
}

export default page
