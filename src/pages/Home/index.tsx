import React, { useEffect, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { baseApi } from "../../api/axiosInstance";
import { MovieCard } from "../../utils/constant";
import MovieList from "../../components/Home/MovieList";

function Home() {
  const [movies, setMovies] = useState<MovieCard[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await baseApi.get(
        "/3/movie/top_rated?language=en-US&page=1"
      );
      // console.log(response.data.results);
      setMovies(response.data.results);
    } catch (err) {
      console.log("Error in homepage Top Rated movies");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="w-[90%] mx-auto">
      <HomeSlider />
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
