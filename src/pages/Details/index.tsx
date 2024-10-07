import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import { imagepath, MovieDetailType } from "../../utils/constant";

function Details() {
  const params = useParams();
  console.log(params);

  const [details, setDetails] = useState<MovieDetailType>();

  const fetchDetails = async () => {
    try {
      const response = await baseApi.get(`3/movie/${params.id}?language=en-US`);
      console.log(response.data);
      setDetails(response.data);
    } catch (error) {
      console.log("Fetch Details error", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params]);

  return (
    <div>
      {details && (
        <div className="relative h-fit w-full">
          <div className="relative">
            <img
              src={imagepath + details?.backdrop_path}
              alt="background"
              className="opacity-40 w-full aspect-[7/4] object-center"
            />
            <div className="absolute bottom-0 w-full h-full _carouselGradient"></div>
          </div>
          <div className="absolute top-0 w-full pb-[100px]">
            <div className="w-[90%] mx-auto mt-[500px]">
              <img
                src={imagepath + details?.poster_path}
                className="w-[350px] h-fit"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
Details;
