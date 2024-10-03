import React, { useEffect, useState } from 'react'
import { FiThumbsUp } from "react-icons/fi";
import axios from 'axios';


function HomeCarousel() {
  interface CarouselMovies {
    backdrop_path: string,
    poster_path: string,
    title: string,
    overview: string,
    vote_count: number
  }

  const [carouselMovies, setCarouselMovies] = useState<CarouselMovies[]>([])

  const fetchUpcoming = async () => {
    try{
      const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmE5ZjMwMWUzYjAyNmVmZjhiYjE2OGJkYzlhNWM0NiIsIm5iZiI6MTcyNzk0ODA0Mi4xOTgwMzUsInN1YiI6IjY2ZmU1MGE0ZmEzZTY5ZTBlZjdjN2RiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.obIjOZgfdw53Bz4HO1orS9RYrOvqZ1ueCozH7ag7Nrg'
        }
      })
      console.log(response.data.results)
      setCarouselMovies(response.data.results)
    }
    catch (err){
      console.log("fetch upcoming movies error, err")
    }
  }

  useEffect(()=>{
    fetchUpcoming()
  },[])

  return (
    <div className='relative'>
      <div className="relative w-[900px]">
        <div className="block bg-red-300 aspect-[7/4]"></div>
        <div className="absolute bottom-0 w-full h-44 _carouselGradient"></div>
      </div>
      <div className="absolute bottom-0 flex items-end gap-4 flex px-4">
        <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div>
        <div className='flex flex-col gap-1'>
          <h1 className='text-4xl text-white'>Abracadabra</h1>
          <h2 className='w-[600px] text-xl line-clamp-3 text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
          <div className='flex items-center gap-1 text-zinc-400 text-xl'>
            <FiThumbsUp />
            <h3 className="text-lg">457</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel
