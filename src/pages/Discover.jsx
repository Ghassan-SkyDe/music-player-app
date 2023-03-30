import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useState } from 'react';
import { useGetChartsTrackQuery } from '../redux/services/shazamApi';
import { useSelector } from 'react-redux';

const Discover = () => {
  const { data, isFetching, error } = useGetChartsTrackQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [selectedGenre, setSelectedGenre] = useState("Pop");
  

  if(isFetching) return <Loader/>
  if(error) return <Error />

  const genreTitle = "Pop"
  return (
    <div className='flex flex-col'>
      <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 '>
          <h2 className='font-bold text-3xl text-white text-left mb-2'>Discover {selectedGenre}</h2>
        <select
         onChange={(e)=> setSelectedGenre(e.target.value)}
         value={selectedGenre}
         className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5' 
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
        <span className='text-center text-xs text-red-300 mb-6'>Because apis for genres was premium functionality of this option menu did not implant</span>

      <div className='items-center flex flex-wrap justify-center gap-8'>
        {data?.tracks?.map((song,i) => (
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
    </div>
  )
}

export default Discover