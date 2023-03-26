import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetChartsTrackQuery } from "../redux/services/shazamApi";
import { chartsTrackTestData } from "../data";


import 'swiper/css';
import 'swiper/css/free-mode';
// links-fixIt
const TopChartCard = ({ song, i, handlePauseClick, handlePlayClick, isPlaying, activeSong }) => (
    <div 
     className="w-full flex flex-row items-center
     hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
     <h4 className="text-white font-bold text-base mr-3">{i+1}. </h4>
     <div className="flex-1 flex justify-between items-center">
      <img className="w-16 h-16 rounded-lg" src={song?.images?.coverart} alt={song?.name} />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song?.key}`}>
          <p className="text-xl font-bold text-white hover:text-red-600 w-[200px]">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base font-semibold text-gray-300 hover:text-red-600 w-[200px]">{song?.artists[0].alias}</p>
        </Link>
      </div>
     </div>
     <PlayPause 
      isSmall
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={() => handlePlayClick(song,i)} />
   </div>
  )


const TopPlay = ({ song }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data } = useGetChartsTrackQuery();
  // temperary--fixIt
  const data = chartsTrackTestData;
  const divRef = useRef();
  // fixIt
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  },[])

  // const topPlays = data?.slice(0, 5);
  const topPlays = data?.slice(0, 8);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song,i) => {
    dispatch(setActiveSong({ song, data, i}));
    dispatch(playPause(true));
  };

  return(
  <div ref={divRef} 
   className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[650px] md:max-w-[80vw] max-w-[90vw] flex flex-col select-none">
    <div className="w-full flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-2xl">Top Charts</h2>
        <Link to="/top-charts"><p className="text-gray-300 text-base cursor-pointer">See more</p></Link>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        {data?.slice(0, 5).map((song, i) => (
          <TopChartCard 
           key={song.key} 
           song={song} 
           i={i} 
           isPlaying={isPlaying}
           activeSong={activeSong}
           handlePauseClick={handlePauseClick}
           handlePlayClick={handlePlayClick}
           />
        ))}
      </div>
    </div>

    {/* topArtist */}
    <div className="w-full flex flex-col mt-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-2xl">Top Artists</h2>
        <Link to="/top-artists"><p className="text-gray-300 text-base cursor-pointer">See more</p></Link>
      </div>

      <Swiper 
       slidesPerView="auto" 
       spaceBetween={20}
       freeMode
       centeredSlidesBounds
       modules={[FreeMode]}
       className="my-8">
        {data?.slice(0, 10).map((song, i) => (
          <SwiperSlide 
           key={song?.key}
           style={{ width: "15%", height: "auto"}}
           className="shadow-lg rounded-full animate-slideright select-none">
            <Link to={`/artists/${song?.artists[0].adamid}`} className="group">
              <img src={song?.images.background} alt={song.name} className="rounded-full w-full object-cover"/>
              <h6 className="text-center text-white group-hover:text-red-600">{song?.artists[0].alias}</h6>
            </Link>
           </SwiperSlide>
        ))}
       </Swiper>
    </div>

   </div>
);
}

export default TopPlay;
