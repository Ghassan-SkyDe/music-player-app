import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const PlayPause = ({ song, isPlaying, activeSong, handlePause, handlePlay, isSmall }) => {
  const isTypeOne = song?.title ? true : false;
  
  if(isTypeOne) return(<>
    {isPlaying && activeSong?.title === song.title ? 
    <FaPauseCircle size={isSmall ? 35 : 55} className="text-gray-300" onClick={handlePause}/> : 
    <FaPlayCircle size={isSmall ? 35 : 55} className="text-gray-300" onClick={handlePlay}/>}
  </>)
  else return(<>
    {isPlaying && activeSong?.id === song.id ? 
    <FaPauseCircle size={isSmall ? 35 : 55} className="text-gray-300" onClick={handlePause}/> : 
    <FaPlayCircle size={isSmall ? 35 : 55} className="text-gray-300" onClick={handlePlay}/>}
  </>)
}

export default PlayPause;
