import { BASE_URL } from '../utils/constants';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiTicketsRoutesSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['TicketsRoutes'],
    endpoints: (builder) => ({
        getTicketsRoutes: builder.query({
            query: ({ url }) => `/routes?from_city_id=${url.fromCityId}&to_city_id=${url.toCityId}&date_start=${url.dateStart}&date_end=${url.dateEnd}`,
            providesTags: ['TicketsRoutes'],
        })
    })
})

export const { useGetTicketsRoutesQuery } = apiTicketsRoutesSlice;

