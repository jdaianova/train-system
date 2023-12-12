import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apSlice';
import { ticketsFilterSlice } from './ticketsFitersSlice';
import { orderSlice } from './orderSlice';


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filters: ticketsFilterSlice.reducer,
        order: orderSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
});