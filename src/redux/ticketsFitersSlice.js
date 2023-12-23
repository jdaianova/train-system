import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fromCityName: "Москва",
  toCityName: "Анапа",
  fromCityId: "641037eb5c49ea004632ee6e",
  toCityId: "641037eb5c49ea004632ee73",
  dateStart: "2023-12-12",
  dateEnd: "2023-12-18",
  haveAirConditioning: false,
  haveFirstClass: false,
  haveFourthClass: false,
  haveSecondClass: false,
  haveThirdClass: false,
  haveWifi: false,
  isExpress: false,
  priceFrom: 0,
  priceTo: 10000,
  start_departure_hour_from: 0,
  start_departure_hour_to: 24,
  start_arrival_hour_from: 0,
  start_arrival_hour_to: 24,
  end_departure_hour_from: 0,
  end_departure_hour_to: 24,
  end_arrival_hour_from: 0,
  end_arrival_hour_to: 24,
  sort: 'date', // 'price', 'duration', 'date'
  currentPage: 1,
  limit: 10,
  offset: 1,
};

export const ticketsFilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFieldFilters: (state, action) => {
      const [field, value] = action.payload;
      if (field in state) { state[field] = value; }
    },
  },
})

export const { setFieldFilters } = ticketsFilterSlice.actions;

export default ticketsFilterSlice.reducer