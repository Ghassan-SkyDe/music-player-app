import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const PlayPause1 = ({
  song,
  isPlaying,
  activeSong,
  handlePause,
  handlePlay,
  isSmall,
}) => {
  return isPlaying && activeSong?.id === song.id ? (
    <FaPauseCircle
      size={isSmall ? 35 : 55}
      className="text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle
      size={isSmall ? 35 : 55}
      className="text-gray-300"
      onClick={handlePlay}
    />
  );
};

export default PlayPause1;
