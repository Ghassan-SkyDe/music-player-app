const RelatedSongs = ({ data, isPlaying, activeSong, handlePause, handlePlay }) => {
  console.log(data);
  return (
  <div>
    {data.map((item) => (
      <>
      <h2>{item.id}</h2>
      </>
    ))}
  </div>
)};

export default RelatedSongs;
