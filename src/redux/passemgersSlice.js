import { createSlice } from '@reduxjs/toolkit';
import { initialPassenger } from './initialPassenger';

const initialState = {
  passengers: []
};

export const passengersSlice = createSlice({
  name: 'passengers',
  initialState,
  reducers: {
    addPassenger: (state, action) => {
      const newPassenger = JSON.parse(JSON.stringify(initialPassenger));
      const isAdult = action.payload; // true для взрослого, false для ребенка

      newPassenger.departure.seat.person_info.is_adult = isAdult;
      newPassenger.arrival.seat.person_info.is_adult = isAdult;
      newPassenger.departure.seat.is_child = !isAdult;
      newPassenger.arrival.seat.is_child = !isAdult;

      state.passengers.push(newPassenger);
    },
    removePassenger: (state, action) => {
      state.passengers = state.passengers.filter((_, index) => index !== action.payload);
    },
    updatePassenger: (state, action) => {
      const { index, passenger } = action.payload;
      state.passengers[index] = passenger;
    }
  }
});

export const { addPassenger, removePassenger, updatePassenger } = passengersSlice.actions;

export default passengersSlice.reducer;