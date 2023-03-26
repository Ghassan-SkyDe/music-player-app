import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shazamApi2 = createApi({
    reducerPath: 'shazamApi2',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-song-recognizer.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '46df751629msh1a69fb40c97a19ep16b29fjsn21872e6dd0a1');

            return headers;
        },
    }),
    endpoints: (builder) => ({
    getAroundYou: builder.query({ query: (countryId) => `/top_country_tracks?country_code=${countryId}` }),
    
  }),
});

export const { useGetAroundYouQuery } = shazamApi2;
