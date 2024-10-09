import React from "react";

function MovieCardSkeleton() {
  return (
    <div>
      <div className="col">
        <div className="my-3 border-zinc-800 border-2 rounded-lg overflow-hidden">
          <div className="relative overflow-hidden">
            <div className="aspect-[3/4] placeholder w-full"></div>
            <div className="absolute -bottom-6 w-full h-28 _carouselGradient"></div>
          </div>
          <div className="bg-[#222] p-2">
            <h1 className="md:text-[17px] text-sm placeholder w-[70%]"></h1>
            <div className="md:text-[15px] text-[13px] text-zinc-300 mt-2">
              <h1 className="w-[90%] placeholder"></h1>
              <h1 className="w-[80%] placeholder"></h1>
              <h1 className="w-[40%] placeholder"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCardSkeleton;
