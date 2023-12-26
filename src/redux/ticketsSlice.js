import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departure: {
    withoutSeats: null,
    adultPassengers: null,
    childPassengers: null,
  },
  arrival: {
    withoutSeats: null,
    adultPassengers: null,
    childPassengers: null,
  },
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setWithOutSeats: (state, action) => {
      const { value, direction } = action.payload;
      state[direction].withoutSeats = value;
    },
    setAdultPassengers: (state, action) => {
      const { value, direction } = action.payload;
      state[direction].adultPassengers = value;
    },
    setChildPassengers: (state, action) => {
      const { value, direction } = action.payload;
      state[direction].childPassengers = value;
    },
  },
});

export const { setWithOutSeats, setAdultPassengers, setChildPassengers } = ticketsSlice.actions;

export default ticketsSlice.reducer;
