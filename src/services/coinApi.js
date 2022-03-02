import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const headers = {
  'x-rapidapi-host': import.meta.env.VITE_HOST_KEY,
  'x-rapidapi-key': import.meta.env.VITE_API_KEY,
};

const createRequest = (url) => ({ url, headers: headers });

export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
});

export const { useGetCoinsQuery } = coinApi;
