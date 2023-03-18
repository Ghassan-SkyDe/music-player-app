import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { artistTopSongTestData, songDetailsTestData } from "../data";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetArtistTopSongsQuery, useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
    // temperary to prevent running out of rapid api requests(only 500per month)--fixIt
    const songData = songDetailsTestData;
    const artistId = songData?.artists[0]?.adamid;
    const artistTopSongsData = artistTopSongTestData;

    const handlePauseClick = () => {
      dispatch(playPause(false));
    };

    const handlePlayClick = ({ song, i }) => {
      dispatch(setActiveSong({ song, data, i}));
      dispatch(playPause(true));
    };

    const { songId } = useParams();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    // const { data: songData, isFetching: isFetchingSongData, error } = useGetSongDetailsQuery({songId});
    // const { data: artistTopSongsData, isFetching: isFetchingArtistTopSongsData } = useGetArtistTopSongsQuery({artistId});
    
    // if(isFetchingSongData || isFetchingArtistTopSongsData) return <Loader title="Searching song details..."/>
    // if(error) return <Error/>;

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData} />

            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics for <span className="text-red-400">{songData?.title}</span> : </h2>
                <div className="mt-5">
                    {songData?.sections[1].type === "LYRICS" ? songData?.sections[1].text.map((line,i) => (
                        <p className="text-gray-400 text-base my-1">{line}</p>
                    )) : <p className="text-gray-400 text-base my-1">No lyrics found...!</p>}
                </div>
            </div>

            {/* related Songs */}
            <RelatedSongs
             data={artistTopSongTestData}
             isPlaying={isPlaying}
             activeSong={activeSong}
             handlePause={handlePauseClick}
             handlePlay={handlePlayClick}
             />
        </div>
    )
};

export default SongDetails;
