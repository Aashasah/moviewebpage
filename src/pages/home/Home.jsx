
import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.css'
import { Link } from 'react-router-dom';
import Popular from '../../components/pages/Popular';
import Toppage from '../../components/pages/Toppage';
import Upcoming from '../../components/pages/Upcoming';
import { CiSearch } from 'react-icons/ci';



function Home() {
    const [conditiom, setCondition]=useState(true)


    useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
.then(res=> res.json())
.then(data=> setPopularmovie(data.results))
    }, [])




    const [movies, setMovies] = useState([]);
    const [searchterm, setSearchterm] = useState("");
  
    const searchmovie = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=519cba6155095e4c59da0a05a7b4bdf2&query=${searchterm}`);
  
      const data = await response.json();
      
      setMovies(data.results);
  
    };
    const search = (e) => {
      e.preventDefault();

    
      setSearchterm(e.target.value);
      searchmovie(searchterm)

      setCondition(false)
    };
  return (
    <>
      <div className="poster text-white">
        {/* <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >
{
    popularmovie.map((movie,index)=>(
      <Link  key={index} className='list-none text-white' >
        <div className="posterimage">
            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
        </div>
        <div className="posterimage_overlay">
            <div className="posterimage_title">
                {movie? movie.original_title:""}
            </div>
            <div className="posterimage_runtime">{movie? movie.release_date:""}
                <span className='posterimage_rating'>{movie? movie.vote_average:""}
                    <i className='fas fa_star'/>{""}
                </span>
            </div>
            <div className="posterimage_description">{movie? movie.overview:""}</div>
        </div>
      
      </Link>
    ))
}

        </Carousel> */}
           <form
         
         className="text-center text-black "
       >
         <CiSearch className="text-1xl border-black " />
         <input
           required
           value={searchterm}
         onChange={search}
     
           className="cursor-pointer p-2 mr-5 text-black border-4 rounded-2xl shadow-1xl"
           type="search"
           name="search"
           id="search"
           placeholder="seacrh for a country"
         />
         
       </form>
       {conditiom===false?(
          <div className="my-10">
          <h1 className="text-white text-3xl  py-3  ">
            <button className='border bg-slate-800 text-white px-3 rounded-full' onClick={()=>setCondition(true)}>Back</button>
            search movie</h1>
          
          <div className="flex gap-x-4  flex-wrap  px-4">
            {movies.map((lists, index) => (
            
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
       ):(<>
       
       <Popular/>
        <Toppage/>
        <Upcoming/>
       </>)}
     
      

      </div>
   
    </>
  )
}

export default Home
