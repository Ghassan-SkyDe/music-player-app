import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
const SongCard = ({ song, i, activeSong, isPlaying, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div
      className="flex w-[250px] animate-slideup cursor-pointer flex-col
   rounded-lg bg-white/5 bg-opacity-80 p-4 backdrop-blur-sm"
    >
      <div className="group relative h-56 w-full select-none">
        <div
          className={`absolute inset-0 items-center 
       justify-center bg-black bg-opacity-50 group-hover:flex 
       ${
         activeSong?.key === song.key
           ? " flex bg-black bg-opacity-70 "
           : "hidden"
       }`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img
          src={song.images?.coverart}
          alt="song_img"
          className="rounded-lg"
        />
      </div>
      <div className="mt-4 flex select-none flex-col">
        <p className="truncate text-lg font-semibold text-white hover:text-red-600">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="mt-1 text-sm text-gray-300 hover:text-red-600">
          <Link
            to={
              song?.artists
                ? `/artists/${song?.artists[0].adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
