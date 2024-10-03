import React from "react";
import { CarouselMovie, imagepath } from "../../utils/constant";
import { FiThumbsUp } from "react-icons/fi";

interface HomeCarouselListProps {
  next: number[];
  carouselMovies: CarouselMovie[];
}

function HomeCarouselList({ next, carouselMovies }: HomeCarouselListProps) {
  return (
    <div>
      <h1 className="font-bold text-xl text-yellow-500">Up next</h1>
      {next.map((item, ind) => (
        <div key={ind} className="flex gap-2">
          <img
            src={imagepath + carouselMovies[item]?.poster_path}
            className="w-[100px]"
            alt=""
          />
          <div className="flex flex-col justify-between py-2">
            <div className="leading-5">
              <h1>{carouselMovies[item]?.title}</h1>
              <h1 className="text-md text-zinc-300 line-clamp-3">
                {carouselMovies[item]?.overview}
              </h1>
            </div>
            <div className="flex gap-1 text-center">
              <FiThumbsUp />
              <h2>{carouselMovies[item]?.vote_count}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeCarouselList;