import React from 'react';
const coverUrl = "https://img.freepik.com/free-vector/music-record-vinyl-with-audio-beats_1017-30116.jpg" ;
const Track = ({ isPlaying, isActive, activeSong }) => {
  // due to 2 diffrent api structure
  const title = activeSong?.title || activeSong?.attributes?.name;
  const subTitle = activeSong?.subtitle || activeSong?.attributes?.albumName;
  return(
  <div className="flex-1 flex items-center justify-start">
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.images?.coverart || coverUrl} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {title ? title : 'No active Song'}
      </p>
      <p className="truncate w-56 text-gray-300">
        {subTitle ? subTitle : 'No active Song'}
      </p>
    </div>
  </div>
)};

export default Track;
