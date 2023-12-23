import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apSlice';
import { ticketsFilterSlice } from './ticketsFitersSlice';
import { passengersSlice } from './passemgersSlice';
import { seatsSlice } from './seatsSlice';


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filters: ticketsFilterSlice.reducer,
        seats: seatsSlice.reducer,
        passengers: passengersSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
});