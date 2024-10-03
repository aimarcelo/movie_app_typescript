import { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";
import { CarouselMovie } from "../../utils/constant";
import HomeCarousel from "./HomeCarousel";
import HomeCarouselList from "./HomeCarouselList";

function HomeSlider() {
  const [carouselMovies, setCarouselMovies] = useState<CarouselMovie[]>([]);
  const [next, setNext] = useState<number[]>([1, 2, 3]);

  const fetchUpcoming = async () => {
    try {
      const response = await baseApi.get(
        "/3/movie/upcoming?language=en-US&page=1"
      );
      console.log(response.data.results);
      setCarouselMovies(response.data.results);
    } catch (err) {
      console.log("fetch upcoming movies error", err);
    }
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);

  return (
    <div className="row">
      <div className="relative col-8">
        <div id="carouselExample" className="carousel slide">
          <HomeCarousel carouselMovies={carouselMovies} />
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="col-4">
        <HomeCarouselList next={next} carouselMovies={carouselMovies} />
      </div>
    </div>
  );
}

export default HomeSlider;
