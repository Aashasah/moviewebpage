import React, { useEffect, useState } from 'react'

function Toppage() {
const [search, setSearch]=useState([])


  useEffect(()=>{
      fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=519cba6155095e4c59da0a05a7b4bdf2')
      .then((res)=> res.json())
      .then((data)=>setSearch(data.results))
  },[])
  
  
  return (
  <>
 <div className='my-8'>
  <h1 className='text-3xl text-white py-2'>Top-Rated</h1>
  <div className="flex gap-x-4   overflow-x-scroll  px-4">
    {search.map((count, index)=>(
    <img
     className="h-[300px] w-full object-cover "
    key={index} src={`https://image.tmdb.org/t/p/w500/${count.poster_path}`} alt={count.title} />
    ))}
  </div>
 </div>


 
  </>
  )
}

export default Toppage
