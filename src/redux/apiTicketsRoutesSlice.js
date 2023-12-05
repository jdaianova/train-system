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

// // api.js
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Замените '/api' на ваш базовый URL API
//   endpoints: (builder) => ({
//     getData1: builder.query({
//       query: () => 'data1',
//     }),
//     getData2: builder.query({
//       query: () => 'data2',
//     }),
//     postData: builder.mutation({
//       query: (data) => ({
//         url: 'post',
//         method: 'POST',
//         body: data,
//       }),
//     }),
//   }),
// });

// export const { useGetData1Query, useGetData2Query, usePostDataMutation } = api;

// export default api;
