import Error from "./Error";
import Loader from "./Loader";
import RelatedSong from "./RelatedSong";

const RelatedSongs = ({ data, isPlaying, activeSong, handlePause, handlePlay, isFetching, error }) => {
  if(isFetching) return <Loader title="Related songs are loading..."/>
  if(error) return <Error/>
  return (
  <div>
    {data?.slice(0,9).map((song,i) => (
      <RelatedSong
       key={song.id}
       i={i}
       song={song}
       isPlaying={isPlaying} 
       activeSong={activeSong} 
       handlePause={handlePause} 
       handlePlay={handlePlay}/>
    ))}
  </div>
)};

export default RelatedSongs;
