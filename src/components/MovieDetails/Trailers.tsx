import React, { useEffect, useState } from "react";
import { baseApi } from "../../api/axiosInstance";
import YouTube from "react-youtube";

function Trailers() {
  const [trailers, setTrailers] = useState<{ key: string; name: string }[]>([]);

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

  const options = {
    height: "280",
    width: "380",
  };

  return (
    <div>
      {trailers.length > 0 && (
        <div className="mt-16">
          <h1 className="text-3xl text-yellow-500 font-bold">Watch Trailers</h1>
          <div className="flex flex-wrap gap-4">
            {trailers.map((link, ind) => (
              <div key={ind} className="flex flex-col gap-2 mt-4">
                <YouTube videoId={link.key} opts={options} />
                <h1 className="text-xl w-[380px]">{link.name}</h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Trailers;
