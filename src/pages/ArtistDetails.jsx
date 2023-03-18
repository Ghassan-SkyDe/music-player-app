import { useParams } from "react-router-dom";

const ArtistDetails = () => { 
  const { artistId } = useParams();
  return(
  <div className="text-white font-bold text-3xl">ArtistDetails: {artistId}</div>
)};

export default ArtistDetails;
