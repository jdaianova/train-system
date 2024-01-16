import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departure: {
    withoutSeats: 0,
    adultPassengers: 0,
    childPassengers: 0,
    currentPassengers: 0,
  },
  arrival: {
    withoutSeats: 0,
    adultPassengers: 0,
    childPassengers: 0,
    currentPassengers: 0,
  },
  totalTickets: 0,
  totalPassengers: 0,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setWithOutSeats: (state, action) => {
      const { value, direction } = action.payload;
      state[direction].withoutSeats = value;
      updateTotals(state);
    },
    setAdultPassengers: (state, action) => {
      const { value, direction } = action.payload;
      state[direction].adultPassengers = value;
      updateTotals(state);
    },
    setChildPassengers: (state, action) => {
      const { value, direction } = action.payload;
      state[direction].childPassengers = value;
      updateTotals(state);
    },

    clearAllTicketData: () => {
      return {
        departure: {
          withoutSeats: 0,
          adultPassengers: 0,
          childPassengers: 0,
        },
        arrival: {
          withoutSeats: 0,
          adultPassengers: 0,
          childPassengers: 0,
        },
        totalTickets: 0,
        totalPassengers: 0,
      };
    },

  },
});

function updateTotals(state) {
  const departureTickets = (+state.departure.adultPassengers || 0) + (+state.departure.childPassengers || 0);
  const arrivalTickets = (+state.arrival.adultPassengers || 0) + (+state.arrival.childPassengers || 0);
  state.totalTickets = departureTickets + arrivalTickets;

  const maxAdultPassengers = Math.max(+state.departure.adultPassengers || 0, +state.arrival.adultPassengers || 0);
  const maxChildPassengers = Math.max(+state.departure.childPassengers || 0, +state.arrival.childPassengers || 0);
  const maxChildrenWithoutSeats = Math.max(+state.departure.withoutSeats || 0, +state.arrival.withoutSeats || 0);
  state.totalPassengers = maxAdultPassengers + maxChildPassengers + maxChildrenWithoutSeats;

  state.departure.currentPassengers = (+state.departure.adultPassengers || 0) + (+state.departure.childPassengers || 0) + (+state.departure.withoutSeats || 0);
  state.arrival.currentPassengers = (+state.arrival.adultPassengers || 0) + (+state.arrival.childPassengers || 0) + (+state.arrival.withoutSeats || 0);

}


export const { 
  setWithOutSeats, 
  setAdultPassengers, 
  setChildPassengers, 
  clearAllTicketData 
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
