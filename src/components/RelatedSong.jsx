import React from "react";
import { Link } from "react-router-dom";

import PlayPause from "./PlayPause1";

const RelatedSong = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePause,
  handlePlay,
}) => {
  return (
    <div
      className={`flex w-full flex-row items-center hover:bg-[#4c426e] ${
        activeSong?.id === song?.id ? "bg-[#4c426e]" : "bg-transparent"
      } mb-2 cursor-pointer rounded-lg p-4 py-2`}
    >
      <h3 className="mr-3 text-base font-bold text-white">{i + 1}.</h3>
      <div className="flex flex-1 flex-row items-center justify-between">
        <img
          className="h-20 w-20 rounded-lg"
          src={song?.attributes?.artwork?.url
            .replace("{w}", "125")
            .replace("{h}", "125")}
          alt={song?.attributes?.albumName}
        />
        <div className="mx-3 flex flex-1 flex-col justify-center">
          <Link to={`/songs/${song?.id}`}>
            <p className="text-xl font-bold text-white">
              {song?.attributes?.name}
            </p>
          </Link>
          <p className="mt-1 text-base text-gray-300">
            {song?.attributes?.albumName}
          </p>
        </div>
      </div>
      <PlayPause
        isSmall
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePause}
        handlePlay={() => handlePlay({ song, i })}
      />
    </div>
  );
};

export default RelatedSong;
