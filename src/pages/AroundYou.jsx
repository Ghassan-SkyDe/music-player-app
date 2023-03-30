import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetAroundYouQuery } from '../redux/services/shazamApi2';

const AroundYou = () => {
    const { isPlaying, activeSong } = useSelector((state) => state.player);
    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get("https://geo.ipify.org/api/v2/country?apiKey=at_r0e7fYTaJklEh3yDAiS5QrO4d4ry9")
        .then((res) => setCountry(res?.data?.location?.country))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
        console.log(country);
    },[country])
    
    const { data, isFetching, error } = useGetAroundYouQuery(country);
    const tracks = data?.result?.tracks;
    
    if(loading || isFetching) return <Loader title="Loading around you SONGS..."/>
    if(error) return <Error/>
    
    if(loading) return <Loader title="Loading SONGS around you..."/>
    return(
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You <span className='text-red-400'>({country})</span></h2>
            {!data?.ok && <Error title="Your copuntry is not SUPPORTED!"/>}

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

export default AroundYou;
