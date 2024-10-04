import React, { useEffect, useState } from "react";
import HomeSlider from "../../components/Home/HomeSlider";
import { baseApi } from "../../api/axiosInstance";
import { MovieCardType } from "../../utils/constant";
import MovieList from "../../components/Home/MovieList";
import LoadMoreBtn from "../../components/Button/LoadMoreBtn";

function Home() {
  const [movies, setMovies] = useState<MovieCardType[]>([]);

  const [page, setPage] = useState<number>(1);

  const fetchMovies = async (page: number) => {
    try {
      const response = await baseApi.get(
        `/3/movie/top_rated?language=en-US&page=${page}`
      );
      // console.log(response.data.results);
      setMovies(response.data.results);
    } catch (err) {
      console.log("Error in homepage Top Rated movies");
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handlePageUpdate = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="w-[90%] mx-auto mb-44">
      <HomeSlider />
      <MovieList movies={movies} />
      <div onClick={() => handlePageUpdate()}>
        <LoadMoreBtn />
      </div>
    </div>
  );
}

export default Home;
