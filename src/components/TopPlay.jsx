import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetChartsTrackQuery } from "../redux/services/shazamApi";
import { Loader, Error } from "./";

import "swiper/css";
import "swiper/css/free-mode";
const TopChartCard = ({
  song,
  i,
  handlePauseClick,
  handlePlayClick,
  isPlaying,
  activeSong,
}) => (
  <div
    className="mb-2 flex w-full cursor-pointer
     flex-row items-center rounded-lg p-4 py-2 hover:bg-[#4c426e]"
  >
    <h4 className="mr-3 text-base font-bold text-white">{i + 1}. </h4>
    <div className="flex flex-1 items-center justify-between">
      <img
        className="h-16 w-16 rounded-lg"
        src={song?.images?.coverart}
        alt={song?.name}
      />
      <div className="mx-3 flex flex-1 flex-col justify-center">
        <Link to={`/songs/${song?.key}`}>
          <p className="w-[200px] text-xl font-bold text-white hover:text-red-600">
            {song?.title}
          </p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="w-[200px] text-base font-semibold text-gray-300 hover:text-red-600">
            {song?.artists[0].alias}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isSmall
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={() => handlePlayClick(song, i)}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetChartsTrackQuery();

  const divRef = useRef();
  // fixIt
  useEffect(() => {
    if (divRef) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // if (isFetching) return <Loader title="loading..." />;
  // if (error) return <Error />;

  return (
    <div
      ref={divRef}
      className="ml-0 mb-6 flex max-w-[90vw] flex-1 select-none flex-col md:max-w-[80vw] xl:ml-6 xl:mb-0 xl:max-w-[650px]"
    >
      <div className="flex w-full flex-col">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Top Charts</h2>
          <Link to="/top-charts">
            <p className="cursor-pointer text-base text-gray-300">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {data?.tracks?.slice(0, 5).map((song, i) => (
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
      <div className="mt-8 flex w-full flex-col">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Top Artists</h2>
          <Link to="/top-artists">
            <p className="cursor-pointer text-base text-gray-300">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          freeMode
          centeredSlidesBounds
          modules={[FreeMode]}
          className="my-8"
        >
          {data?.tracks?.slice(0, 10).map((song) => (
            <SwiperSlide
              key={song?.key}
              style={{ width: "15%", height: "auto" }}
              className="animate-slideright select-none rounded-full shadow-lg"
            >
              <Link
                to={`/artists/${song?.artists?.[0]?.adamid}`}
                // to={`/`}
                className="group"
              >
                <img
                  // src={""}
                  src={song?.images?.background}
                  alt={song.name}
                  className="w-full rounded-full object-cover"
                />
                <h6 className="text-center text-white group-hover:text-red-600">
                  {song?.artists?.[0]?.alias}
                </h6>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
