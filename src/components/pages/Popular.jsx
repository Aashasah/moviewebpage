import React, { useEffect, useState } from 'react'


function Popular() {
  const [pop, setPop]=useState([])





useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=519cba6155095e4c59da0a05a7b4bdf2')
    .then((Response)=> Response.json())
    .then ((data)=> setPop(data.results))
},[])





  return (
 <>
 <div className="my-10">
      <h1 className="text-white text-3xl  py-3  ">Trendings</h1>
      <div className="flex gap-x-4   overflow-x-scroll  px-4">
        {pop.map((lists, index) => (
        
          <img
            key={index}
            className="h-[400px] w-fit object-cover "
            src={`https://image.tmdb.org/t/p/w500/${lists.poster_path}
            
           `}
            alt={lists.title}
          />
        ))}
      </div>
    </div>
 </>
  )
}

export default Popular
