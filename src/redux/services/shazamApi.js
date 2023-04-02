import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "46df751629msh1a69fb40c97a19ep16b29fjsn21872e6dd0a1"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChartsTrack: builder.query({ query: () => "/charts/track" }),
    getSongDetails: builder.query({
      query: ({ songId }) => `/songs/get-details?key=${songId}`,
    }),
    getArtistTopSongs: builder.query({
      query: ({ artistId }) => `/artists/get-top-songs?id=${artistId}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/get-summary?id=${artistId}`,
    }),
    getSearchedSong: builder.query({
      query: (searchTerm) => `/search?term=${searchTerm}`,
    }),
  }),
});

export const {
  useGetChartsTrackQuery,
  useGetSongDetailsQuery,
  useGetArtistTopSongsQuery,
  useGetArtistDetailsQuery,
  useGetSearchedSongQuery,
} = shazamApi;
