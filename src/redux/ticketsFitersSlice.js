import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   fromCityName: "",
//   toCityName: "",
//   fromCityId: "",
//   toCityId: "",
//   dateStart: "",
//   dateEnd: "",
//   haveWifi: null,
//   isExpress: null,
//   haveFirstClass: null,
// };

const initialState = {
  fromCityName: "Москва",
  toCityName: "Санкт-Петербург",
  fromCityId: "641037eb5c49ea004632ee6e",
  toCityId: "641037eb5c49ea004632ee6f",
  dateStart: "2023-12-12",
  dateEnd: "2023-12-18",
  haveWifi: null,
  isExpress: null,
  haveFirstClass: null,
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