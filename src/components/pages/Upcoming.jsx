import React, { useEffect, useState } from 'react'

function Upcoming() {

const [upmovie, setUpmovie]=useState([])




useEffect(()=>{
  fetch('https://api.themoviedb.org/3/discover/movie?api_key=519cba6155095e4c59da0a05a7b4bdf2')
  .then((res)=>res.json())
  .then((data)=>setUpmovie(data.results))
  .catch((error)=>console.error('blaaaa',error))
},[])


  return (
   <>
    <div className="my-10">
      <h1 className="text-white text-3xl  py-3  ">Upcoming</h1>
      <div className="flex gap-x-4   overflow-x-scroll  px-4">
        {upmovie.map((list,index) => (
          <img
            key={index}
            className="h-[300px] w-full object-cover "
            src={`https://image.tmdb.org/t/p/w500/${list.poster_path}`}
            alt={list.title}
          />
        ))}
      </div>
    </div>
   </>
  )
}

export default Upcoming
