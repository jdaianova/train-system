import { BASE_URL } from '../utils/constants';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getTicketsRoutes: builder.query({
            query: ({ url }) => url,
        }),
        getCityId: builder.query({
            query: ({ cityName }) => `/routes/cities?name=${encodeURI(cityName)}`,
        }),
    })
})

export const { useGetTicketsRoutesQuery, useGetCityIdQuery, useLazyGetCityIdQuery } = apiSlice;