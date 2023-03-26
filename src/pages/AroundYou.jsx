import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { aroundYouTestData } from '../data';
import { useGetAroundYouQuery } from '../redux/services/shazamApi2';

const AroundYou = () => {
    const { isPlaying, activeSong } = useSelector((state) => state.player);
    // temperary--make it "" instead of DE
    const [country, setCountry] = useState("DE");
    // change to true
    const [loading, setLoading] = useState(false);
    // temperary---
    const data = aroundYouTestData;
    const {result:{ tracks }} = data;
    console.log(tracks);
    // const { data, isFetching, error } = useGetAroundYouQuery(country);
   
    // useEffect(() => {
    //     axios.get("https://geo.ipify.org/api/v2/country?apiKey=at_r0e7fYTaJklEh3yDAiS5QrO4d4ry9")
    //     .then((res) => setCountry(res?.data?.location?.country))
    //     .catch((err) => console.log(err))
    //     .finally(() => setLoading(false));
    //     console.log(country);
    // },[country])

    if(loading) return <Loader title="Loading"/>
    return(
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You</h2>
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
