import { BASE_URL } from '../utils/constants';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getTicketsRoutes: builder.query({
            query: ({ url }) => url,
        }),
        getFromCityId: builder.query({
            query: ({ urlFromCityId }) => urlFromCityId,
        }),
        getToCityId: builder.query({
            query: ({ urlToCityId }) => urlToCityId,
        }),
    })
})

export const { useGetTicketsRoutesQuery, useGetFromCityIdQuery, useGetToCityIdQuery } = apiSlice;