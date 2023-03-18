import { Link } from "react-router-dom";
import RelatedSongs from "./RelatedSongs";

const DetailsHeader = ({ songData, artistId, artistData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  return(
  <div className="relative w-full flex flex-col mb-10">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-32"/>
    <div className="absolute inset-0 flex items-center">
      <img 
      src={artistId ? 
        artist.artwork?.url.replace('{h}','500').replace('{w}','{500}') 
      : songData?.images?.coverart}
       alt="art"className="object-cover sm:w-48 w-28 rounded-full border-2 shadow-xl shadow-black ml-2" />

     <div className="ml-5 select-none">
      <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artist?.name : songData?.title}</p>
      {!artist && (
        <Link to={`/artists/${songData?.artists[0].adamid}`}>
          <p className="text-base text-gray-400 mt-2 hover:text-red-400">{songData?.subtitle}</p>
        </Link>
      )}
      <p className="text-base mt-2 text-red-400">
        {artistId 
        ? artist?.genreNames[0]
        : songData?.genres?.primary}
      </p>
     </div>
    </div>
  </div>
)};

export default DetailsHeader;
