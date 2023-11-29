import {configureStore} from '@reduxjs/toolkit';
import { apiTicketsRoutesSlice } from './apiTicketsRoutesSlice';

export const store = configureStore({
    reducer: {
        [apiTicketsRoutesSlice.reducerPath]: apiTicketsRoutesSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiTicketsRoutesSlice.middleware), 
    devTools: true,
});