import { useParams } from "react-router-dom";
import { useGetSearchedSongQuery } from "../redux/services/shazamApi";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useEffect, useRef } from "react";

const Search = () => {
  // in mobile devices add scroll down after search btn clicked---fixIt
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetSearchedSongQuery(searchTerm);
  const songs = data?.tracks?.hits.map((song) => song.track);

  if (isFetching) return <Loader title="Loading Searched SONG..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="mt-4 mb-10 text-left text-3xl font-bold text-white">
        Showing Results For :{" "}
        <span className="text-red-300"> {searchTerm} </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song?.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={songs}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
