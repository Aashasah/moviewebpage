import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { CiSearch } from "react-icons/ci";


function Header() {





  return (
 <>
 <div className="header   mx-5 text-center flex justify-between ">
    <div className="headerleft flex text-center  ">
        <Link to='/'><img className=' header-icon cursor-pointer w-[80px]' src="https://cdn.iconscout.com/icon/free/png-512/free-imdb-logo-icon-download-in-svg-png-gif-file-formats--brand-company-brands-pack-logos-icons-2284972.png?f=webp&w=512" alt="" /></Link>
        <Link className='mt-4 mx-5 font-bold text-2xl' to={'Popular'}><span className='   cursor-pointer text-blue-500 hover:text-red-700 '>popular</span></Link>
        <Link className='mt-4 mx-5 font-bold text-2xl' to={"/Toppage"}><span className='py-2    cursor-pointer text-blue-400 hover:text-red-700'>Top_Rated</span></Link>
        <Link className='mt-4 mx-5 font-bold text-2xl' to={'/upcoming'} ><span className='pt-2 cursor-pointer text-blue-500 hover:text-red-700'>Upcoming</span></Link>
    </div>
   <section className=" ">

   </section>
 </div>
 
 </>
  )
}

export default Header
