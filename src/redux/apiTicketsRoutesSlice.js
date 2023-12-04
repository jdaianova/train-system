import { BASE_URL } from '../utils/constants';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiTicketsRoutesSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['TicketsRoutes'],
    endpoints: (builder) => ({
        getTicketsRoutes: builder.query({
            query: ({ url }) => url,
            providesTags: ['TicketsRoutes'],
        }),
    })
})

export const { useGetTicketsRoutesQuery } = apiTicketsRoutesSlice;

