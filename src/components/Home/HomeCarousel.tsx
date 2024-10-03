import React, { useEffect, useState } from 'react'
import { FiThumbsUp } from "react-icons/fi";
import axios from 'axios';
import { imagepath } from '../../utils/constant';
import { baseApi } from '../../api/axiosInstance';

function HomeCarousel() {
  interface CarouselMovies {
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_count: number
  }

  const [carouselMovies, setCarouselMovies] = useState<CarouselMovies[]>([])

  const fetchUpcoming = async () => {
    try {
      const response = await baseApi.get("/3/movie/upcoming?language=en-US&page=1")
      console.log(response.data.results)
      setCarouselMovies(response.data.results)
    }
    catch (err){
      console.log("fetch upcoming movies error", err)
    }
  }

  useEffect(()=>{
    fetchUpcoming()
  },[])

  return (
    <div className='relative'>
      <div className="relative w-[900px]">
        {/* <div className="block bg-red-300 aspect-[7/4]"></div> */}
        <img src={ imagepath + carouselMovies[1]?.backdrop_path } className='w-full aspect-[7/4]' alt=""/>
        <div className="absolute bottom-0 w-full h-44 _carouselGradient"></div>
      </div>
      <div className="absolute bottom-0 flex items-end gap-4 flex px-4">
        {/* <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div> */}
        <img src={imagepath + carouselMovies[1].poster_path} alt='' className='w-[160px] aspect-[4/5]' />
        <div className='flex flex-col gap-1'>
          <h1 className='text-4xl text-white'>{carouselMovies[1].title}</h1>
          <h2 className='w-[600px] text-xl line-clamp-3 text-zinc-400'>{carouselMovies[1].overview}</h2>
          <div className='flex items-center gap-1 text-zinc-400 text-xl'>
            <FiThumbsUp />
            <h3 className="text-lg">{carouselMovies[1].vote_count}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel
