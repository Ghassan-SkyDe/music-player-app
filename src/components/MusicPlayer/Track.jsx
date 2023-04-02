import React from "react";
const coverUrl =
  "https://img.freepik.com/free-vector/music-record-vinyl-with-audio-beats_1017-30116.jpg";
const Track = ({ isPlaying, isActive, activeSong }) => {
  // due to 2 diffrent api structure
  const title = activeSong?.title || activeSong?.attributes?.name;
  const subTitle = activeSong?.subtitle || activeSong?.attributes?.albumName;
  return (
    <div className="flex flex-1 items-center justify-start">
      <div
        className={`${
          isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
        } mr-4 hidden h-16 w-16 sm:block`}
      >
        <img
          src={activeSong?.images?.coverart || coverUrl}
          alt="cover art"
          className="rounded-full"
        />
      </div>
      <div className="w-[50%]">
        <p className="truncate text-lg font-bold text-white">
          {title ? title : "No active Song"}
        </p>
        <p className="w-56 truncate text-gray-300">
          {subTitle ? subTitle : "No active Song"}
        </p>
      </div>
    </div>
  );
};

export default Track;
