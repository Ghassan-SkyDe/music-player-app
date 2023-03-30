import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { artistTopSongTestData, songDetailsTestData } from "../data";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetArtistTopSongsQuery, useGetSongDetailsQuery } from "../redux/services/shazamApi";

const SongDetails = () => {
    
    const { songId } = useParams();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongData, error } = useGetSongDetailsQuery({songId});
    const artistId = songData?.artists[0]?.adamid;
    const { data: artistTopSongsData, isFetching: isFetchingArtistTopSongsData, error: relatedError } = useGetArtistTopSongsQuery({artistId});
    
    
    if(isFetchingSongData) return <Loader title="Searching song details..."/>
    if(error) return <Error/>;
    
    const handlePauseClick = () => {
      dispatch(playPause(false));
    };

    const handlePlayClick = ({ song, i }) => {
      dispatch(setActiveSong({ song, songData, i}));
      dispatch(playPause(true));
    };
    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData} />

            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics for <span className="text-red-400">{songData?.title}</span> : </h2>
                <div className="mt-5">
                    {songData?.sections[1].type === "LYRICS" ? songData?.sections[1].text.map((line,i) => (
                        <p key={i} className="text-gray-400 text-base my-1">{line}</p>
                    )) : <p className="text-gray-400 text-base my-1">No lyrics found...!</p>}
                </div>
            </div>

            {/* related Songs */}
            <RelatedSongs
             data={artistTopSongsData?.data}
            //  data={artistTopSongsData}
             isPlaying={isPlaying}
             activeSong={activeSong}
             handlePause={handlePauseClick}
             handlePlay={handlePlayClick}
             />
        </div>
    )
};

export default SongDetails;
