import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import { CarouselMovieType } from "../../utils/constant";

function Navbar() {
  const [search, setSearch] = useState("");

  const [searchedList, setSearchedList] = useState<CarouselMovieType[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const fetchSearch = async () => {
    try {
      const response = await baseApi.get(
        `3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
      );

      setSearchedList(response.data.results);
    } catch (error) {
      console.log("Fetch search error", error);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, [search]);

  return (
    <nav className="bg-[#121212] py-2">
      <div className="flex justify-between items-center w-[80%] mx-auto">
        <div className="flex space-x-16">
          <Link to="/">
            <div className="flex flex-col text-yellow-500">
              <h1 className="text-[18px] leading-4">ALLABOUT</h1>
              <h1 className="text-[24px] leading-5 font-semibold">MOVIES</h1>
            </div>
          </Link>
          <Link to="/movies">
            <button className="text-[18px] text-yellow-500 hover:underline">
              EXPLORE
            </button>
          </Link>
        </div>
        <div className="">
          <input
            placeholder="search"
            type="text"
            className="w-[500px] h-10 bg-black text-[#c2c2c2] text-md outline-none px-4 placeholder:text-[#646464] rounded-xl"
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
