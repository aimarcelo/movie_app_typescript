import React, { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";

function Trailers() {
  const [trailers, setTrailers] = useState<{ key: string }[]>([]);

  const fetchTrailers = async () => {
    try {
      const response = await baseApi.get(`3/movie/238/videos?language=en-US`);
      console.log(response.data.results);
      const trailerObject = response.data.results.filter(
        (data: { type: string }) => data.type == "Trailer"
      );
      setTrailers(trailerObject);
    } catch (error) {
      console.log("Fetch trailer error", error);
    }
  };

  useEffect(() => {
    fetchTrailers();
  }, []);

  return (
    <div className="mt-16">
      <h1 className="text-3xl text-yellow-500 font-bold">Watch Trailers</h1>
      {trailers.length > 0 && trailers.map((data) => <h2>{data.key}</h2>)}
    </div>
  );
}

export default Trailers;
