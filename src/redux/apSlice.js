import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/constants';

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

        createOrder: builder.mutation({
            query: (orderData) => ({
                url: '/fe-diplom/order',
                method: 'POST',
                body: orderData,
            }),
        }),

        getSeats: builder.query({
            query: (seatsData) => {
                const queryParams = new URLSearchParams();
                Object.entries(seatsData).forEach(([key, value]) => {
                    if (typeof value === 'boolean' && value) {
                        queryParams.append(key, 'true');
                    }
                });
                return `/routes/${seatsData.id}/seats?${queryParams.toString()}`;
            },
        }),

    }),
});

export const {
    useGetTicketsRoutesQuery,
    useGetCityIdQuery,
    useLazyGetCityIdQuery,
    useCreateOrderMutation,
    useGetSeatsQuery 
} = apiSlice;