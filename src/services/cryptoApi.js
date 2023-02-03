import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) =>
        `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1&sparkline=false`,
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => `/coins/${coinId}`,
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        `coins/${coinId}/market_chart?vs_currency=usd&days=${timePeriod}`,
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
