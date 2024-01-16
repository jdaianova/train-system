import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './apiSlice';
import { ticketsFilterSlice } from './ticketsFitersSlice';
import { ticketsSlice } from './ticketsSlice';
import { seatsSelectedSlice } from './seatsSelectedSlice';
import { passengersFormsData } from './passengersFormsData';
import { currentRoutesSlice } from './currentRoutesSlice';
import { seatsFiltersSlice } from './seatsFiltersSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiSlice.reducerPath] // исключаем apiSlice из сохранения
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  filters: ticketsFilterSlice.reducer,
  currentRoutes: currentRoutesSlice.reducer,
  tickets: ticketsSlice.reducer,
  seatsFilters: seatsFiltersSlice.reducer,
  seatsSelected: seatsSelectedSlice.reducer,
  passengersFormsData: passengersFormsData.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER'],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
