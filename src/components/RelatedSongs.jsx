import RelatedSong from "./RelatedSong";

const RelatedSongs = ({ data, isPlaying, activeSong, handlePause, handlePlay }) => {
  return (
  <div>
    {data.map((song,i) => (
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
