import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  departure: {
    id: null,
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    have_express: false,
  },
  arrival: {
    id: null,
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    have_express: false,
  },
};

export const seatsFiltersSlice = createSlice({
  name: 'seatsFilters',
  initialState,
  reducers: {
    setFieldSeatsFilters: (state, action) => {
      const [field, value, direction] = action.payload;
      if (direction in state && field in state[direction]) {
        state[direction][field] = value;
      }
    },

    clearSeatsFilters: () => {
      return {
        departure: {
          id: null,
          have_first_class: false,
          have_second_class: false,
          have_third_class: false,
          have_fourth_class: false,
          have_wifi: false,
          have_air_conditioning: false,
          have_express: false,
        },
        arrival: {
          id: null,
          have_first_class: false,
          have_second_class: false,
          have_third_class: false,
          have_fourth_class: false,
          have_wifi: false,
          have_air_conditioning: false,
          have_express: false,
        },
      };
    },

  },
});

export const { setFieldSeatsFilters, 
  clearSeatsFilters 
} = seatsFiltersSlice.actions;

export default seatsFiltersSlice.reducer;