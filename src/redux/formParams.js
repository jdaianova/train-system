import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fromCityNameInForm: "",
  toCityNameInForm: "",
  dateStartInForm: "",
  dateEndInForm: "",
};

export const formParamsSlice = createSlice({
  name: 'formParams',
  initialState,
  reducers: {
    setFromCityNameInForm: (state, action) => {
      state.fromCityNameInForm = action.payload
    },
    setToCityNameInForm: (state, action) => {
      state.toCityNameInForm = action.payload
    },
    setDateStartInForm: (state, action) => {
      state.dateStartInForm = action.payload
    },
    setDateEndInForm: (state, action) => {
      state.dateEndInForm = action.payload
    },
  },
})

export const {
  setFromCityNameInForm,
  setToCityNameInForm,
  setDateStartInForm,
  setDateEndInForm } = formParamsSlice.actions;

export default formParamsSlice.reducer