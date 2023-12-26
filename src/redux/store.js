import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apSlice';
import { ticketsFilterSlice } from './ticketsFitersSlice';
import { ticketsSlice } from './ticketsSlice';
import { seatsFiltersSlice } from './seatsFiltersSlice';
import { seatsSelectedSlice } from './seatsSelectedSlice';


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filters: ticketsFilterSlice.reducer,
        seatsFilters: seatsFiltersSlice.reducer,
        tickets: ticketsSlice.reducer,
        seatsSelected: seatsSelectedSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
});