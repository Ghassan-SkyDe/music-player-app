import { Link } from "react-router-dom";
import RelatedSongs from "./RelatedSongs";

const DetailsHeader = ({ songData, artistId, artistData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  return (
    <div className="relative mb-10 flex w-full flex-col">
      <div className="h-32 w-full bg-gradient-to-l from-transparent to-black sm:h-48" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? artist.artwork?.url
                  .replace("{h}", "500")
                  .replace("{w}", "{500}")
              : songData?.images?.coverart
          }
          alt="art"
          className="ml-2 w-28 rounded-full border-2 object-cover shadow-xl shadow-black sm:w-48"
        />

        <div className="ml-5 select-none">
          <p className="text-xl font-bold text-white sm:text-3xl">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artist && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="mt-2 text-base text-gray-400 hover:text-red-400">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className="mt-2 text-base text-red-400">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
