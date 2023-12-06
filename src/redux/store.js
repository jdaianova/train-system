import {configureStore} from '@reduxjs/toolkit';
import { apiSlice } from './apSlice';
import { ticketsFilterSlice } from './ticketsFitersSlice';


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filters: ticketsFilterSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware), 
    devTools: true,
});