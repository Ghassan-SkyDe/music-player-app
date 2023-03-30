import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetChartsTrackQuery } from '../redux/services/shazamApi';

const TopCharts = () => {
    const { isPlaying, activeSong } = useSelector((state) => state.player);
    const { data:{tracks}, isFetching, error } = useGetChartsTrackQuery();
    
    if(isFetching) return <Loader title="Loading Top Charts..."/>
    if(error) return <Error />
    return(
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover Top Charts</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {tracks?.map((song,i) => (
                    <SongCard 
                      key={song.key}
                      song={song}
                      isPlaying={isPlaying} 
                      activeSong={activeSong}
                      data={tracks}
                      i={i}/>
                ))}
            </div>
        </div>
    )
}

export default TopCharts;


