import {configureStore} from '@reduxjs/toolkit';
import { apiTicketsRoutesSlice } from './apiTicketsRoutesSlice';
import { ticketsFilterSlice } from './ticketsFitersSlice';
import { formParamsSlice } from './formParams';


export const store = configureStore({
    reducer: {
        [apiTicketsRoutesSlice.reducerPath]: apiTicketsRoutesSlice.reducer,
        filters: ticketsFilterSlice.reducer,
        formParams: formParamsSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiTicketsRoutesSlice.middleware), 
    devTools: true,
});