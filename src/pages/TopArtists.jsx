import { ArtistCard, Error, Loader } from "../components";
import { useGetChartsTrackQuery } from "../redux/services/shazamApi";

const TopArtists = () => {
  const {
    data: { tracks },
    isFetching,
    error,
  } = useGetChartsTrackQuery();

  if (isFetching) return <Loader title="Loading Top Charts..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="mt-4 mb-10 text-left text-3xl font-bold text-white">
        Discover Top Artists
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {tracks?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
