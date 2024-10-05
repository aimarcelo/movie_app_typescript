import React, { useEffect, useState } from "react";
import { category, MovieCardType } from "../../utils/constant";
import { baseApi } from "../../api/axiosInstance";
import MovieList from "../../components/Home/MovieList";

function Movies() {
  const [filter, setFilter] = useState(category[0].name);

  const [nowPlaying, setNowPlaying] = useState<MovieCardType[]>([]);
  const [popular, setPopular] = useState<MovieCardType[]>([]);
  const [topRated, setTopRated] = useState<MovieCardType[]>([]);
  const [upcoming, setUpcoming] = useState<MovieCardType[]>([]);

  const toggleSelection = (item: string) => {
    setFilter(item);
  };

  const fetchMovies = async (path: string) => {
    try {
      console.log(path);
      const response = await baseApi.get(
        `/3/movie/${path}?language=en-US&page=1`
      );
      console.log(response.data.results);
      switch (path) {
        case "now_playing":
          setNowPlaying(response.data.results);
          break;
        case "popular":
          setPopular(response.data.results);
          break;
        case "top_rated":
          setTopRated(response.data.results);
          break;
        case "upcoming":
          setUpcoming(response.data.results);
          break;
        default:
          break;
      }
    } catch (error) {
      console.log("Fetch error in Movies Page", error);
    }
  };

  useEffect(() => {
    const current = category.filter((item) => item.name == filter);
    console.log(current);
    fetchMovies(current[0].path);
  }, [filter]);

  return (
    <div className="w-[90%] mx-auto mt-4">
      <h1 className="text-3xl font-bold text-yellow-500">Explore Movies</h1>
      <div className="flex mt-2">
        {category.map((item, ind) => (
          <div key={ind} className="">
            <button
              onClick={() => toggleSelection(item.name)}
              className="text-base font-semibold w-44 h-10 hover:bg-[#121212]"
            >
              {item.name}
            </button>
            <div
              className={`h-0.5 bg-blue-400 mx-auto ${
                filter == item.name ? "w-full" : "w-0"
              } duration-200`}
            ></div>
          </div>
        ))}
      </div>
      {filter == "Now Playing" && <MovieList movies={nowPlaying} />}
      {filter == "Popular" && <MovieList movies={popular} />}
      {filter == "Top Rated" && <MovieList movies={topRated} />}
      {filter == "Upcoming" && <MovieList movies={upcoming} />}
    </div>
  );
}

export default Movies;
