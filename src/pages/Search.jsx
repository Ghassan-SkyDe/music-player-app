
import { useParams } from "react-router-dom";
import { useGetSearchedSongQuery } from "../redux/services/shazamApi";
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { searchedSongTestData } from '../data';
import { useEffect, useRef } from "react";


const Search = () => {
    
    // in mobile devices add scroll down after search btn clicked---fixIt
    const { isPlaying, activeSong } = useSelector((state) => state.player);
    // temperary---
    const songs = searchedSongTestData.map((song) => song?.track);
    
    const { searchTerm } = useParams();
    // const { data , isFetching, error } = useGetSearchedSongQuery(searchTerm);
    // const songs = data?.tracks?.hits.map((song) => song.track);
    
    // fixIt
    // if(isFetching) return <Loader title="Loading Searched SONG..."/>
    // if(error) return <Error />
    return(
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Showing Results For : <span className="text-red-300"> {searchTerm} </span></h2>
            <div className="flex flex-wrap justify-center gap-8">
                {songs?.map((song,i) => (
                    <SongCard 
                      key={song?.key}
                      song={song}
                      isPlaying={isPlaying} 
                      activeSong={activeSong}
                      data={songs}
                      i={i}/>
                ))}
            </div>
        </div>
    )
}

export default Search;


