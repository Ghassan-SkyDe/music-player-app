import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useState } from "react";
import { useGetChartsTrackQuery } from "../redux/services/shazamApi";
import { useSelector } from "react-redux";

const Discover = () => {
  const { data, isFetching, error } = useGetChartsTrackQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [selectedGenre, setSelectedGenre] = useState("Musics");

  if (error) return <Error />;

  const genreTitle = "Musics";
  return (
    <div className="flex flex-col">
      <div className="mt-4 mb-10 flex w-full flex-col items-center justify-between sm:flex-row ">
        <h1 className="mb-2 w-1/2 text-left text-6xl font-bold text-white lg:text-8xl">
          Discover {selectedGenre}
        </h1>
        {/* <select
          onChange={(e) => setSelectedGenre(e.target.value)}
          value={selectedGenre}
          className="mt-5 rounded-lg bg-black p-3 text-sm text-gray-300 outline-none sm:mt-0"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select> */}
      </div>
      {/* <span className="mb-6 text-center text-xs text-red-300">
        Because apis for genres was premium functionality of this option menu
        did not implant
      </span> */}

      {isFetching ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {data?.tracks?.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              activeSong={activeSong}
              isPlaying={isPlaying}
              data={data}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Discover;
