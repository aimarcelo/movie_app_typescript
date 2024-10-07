import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseApi } from "../../api/axiosInstance";
import { MovieDetailType } from "../../utils/constant";

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

  return <div>{details && <div>{details.id}</div>}</div>;
}

export default Details;
Details;
