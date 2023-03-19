import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause1 from './PlayPause1';

const RelatedSong = ({ song, i, isPlaying, activeSong, handlePause, handlePlay }) => {
    // console.log(song.attributes);
return(
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.id === song?.id ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')}
        alt={song?.attributes?.albumName}

      />
      <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song?.id}`}>
            <p className="text-xl font-bold text-white">
              {song?.attributes?.name}
            </p>
          </Link>
        <p className="text-base text-gray-300 mt-1">
          {song?.attributes?.albumName}
        </p>
      </div>
    </div>
        <PlayPause1
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePause}
          handlePlay={() => handlePlay({song, i})}
        />
  </div>
)};

export default RelatedSong;