import React, { useEffect, useState } from 'react';
import { ArtistCard, Error, Loader, SongCard } from '../components';
import { chartsTrackTestData } from '../data';

const TopArtists = () => {
    // temperary---
    const tracks = chartsTrackTestData;
    console.log(tracks);

    // const { data:{tracks}, isFetching, error } = useGetChartsTrackQuery();
    
    // fixIt
    // if(isFetching) return <Loader title="Loading Top Charts..."/>
    // if(error) return <Error />
    return(
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover Top Artists</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {tracks?.map((track) => (
                    <ArtistCard key={track.key} track={track}/>
                ))}
            </div>
        </div>
    )
}

export default TopArtists;



