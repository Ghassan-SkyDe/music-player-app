import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Error, Loader } from '../components';
import { aroundYouTestData } from '../data';
import { useGetAroundYouQuery } from '../redux/services/shazamApi2';

const AroundYou = () => {
    // temperary--make it "" instead of DE
    const [country, setCountry] = useState("DE");
    // change to true
    const [loading, setLoading] = useState(false);
    // temperary---
    const data = aroundYouTestData;
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
        <div className='text-white'>
            <h1>Around you</h1>
             <Error title="Your copuntry is not SUPPORTED!"/>
        </div>
    )
}

export default AroundYou;
