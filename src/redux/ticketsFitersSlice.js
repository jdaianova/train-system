import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fromCityName: "",
  toCityName: "",
  fromCityId: "",
  toCityId: "",
  dateStart: "",
  dateEnd: "",
  haveWifi: null,
  isExpress: null,
  haveFirstClass: null,
};

export const ticketsFilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFromCityName: (state, action) => {
      state.fromCityName = action.payload
    },
    setToCityName: (state, action) => {
      state.toCityName = action.payload
    },
    setFromCityId: (state, action) => {
      state.fromCityId = action.payload
    },
    setToCityId: (state, action) => {
      state.toCityId = action.payload
    },
    setDateStart: (state, action) => {
      state.dateStart = action.payload
    },
    setDateEnd: (state, action) => {
      state.dateEnd = action.payload
    },
    setHaveWifi: (state, action) => {
      state.haveWifi = action.payload
    },
    setIsExpress: (state, action) => {
      state.isExpress = action.payload
    },
    setHaveFirstClass: (state, action) => {
      state.haveFirstClass = action.payload
    },
    // updateFilters: (state, action) => {
    //   return { ...state, filters: { ...state.filters, ...action.payload } };
    // },
  },
})

export const {
  setFromCityName,
  setToCityName,
  setFromCityId,
  setToCityId,
  setDateStart,
  setDateEnd,
  setHaveWifi,
  setIsExpress,
  setHaveFirstClass, } = ticketsFilterSlice.actions;

export default ticketsFilterSlice.reducer