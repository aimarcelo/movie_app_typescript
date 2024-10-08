import React, { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";
import { MovieCardType } from "../../utils/constant";
import MovieList from "../Home/MovieList";

function SimilarMovies({ movieId }: { movieId: string }) {
  const [movies, setMovies] = useState<MovieCardType[]>([]);

  const fetchSimilarMovies = async () => {
    try {
      const response = await baseApi.get(
        `/3/movie/${movieId}/similar?language=en-US&page=1`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.log("Fetch similar movies error", error);
    }
  };

  useEffect(() => {
    fetchSimilarMovies();
  }, [movieId]);

  return (
    <div>
      <MovieList movies={movies} title="Similar Movies" />
    </div>
  );
}

export default SimilarMovies;
