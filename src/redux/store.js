import {configureStore} from '@reduxjs/toolkit';
import { apiTicketsRoutesSlice } from './apiTicketsRoutesSlice';
import { ticketsFilterSlice } from './ticketsFitersSlice';


export const store = configureStore({
    reducer: {
        [apiTicketsRoutesSlice.reducerPath]: apiTicketsRoutesSlice.reducer,
        filters: ticketsFilterSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiTicketsRoutesSlice.middleware), 
    devTools: true,
});