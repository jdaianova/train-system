import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departure: {
    selectedSeats: [],
    selectedComfort: [],
  },
  arrival: {
    selectedSeats: [],
    selectedComfort: [],
  },
  selectedPriceAdult: 0,
  selectedlPriceChild: 0,
  selectedNumAdult: 0,
  selectedNumChild: 0,
  selectedPriceComfort: 0,
};

export const seatsSelectedSlice = createSlice({
  name: 'seatsSelected',
  initialState,
  reducers: {
    addSelectedSeat: (state, action) => {
      const { direction, ...seatInfo } = action.payload;
      if (direction === 'departure' || direction === 'arrival') {
        state[direction].selectedSeats.push(seatInfo);
      };
      if (seatInfo.isAdult === true) {
        state.selectedNumAdult += 1;
        state.selectedPriceAdult += seatInfo.price;
      } else {
        state.selectedNumChild += 1;
        state.selectedlPriceChild += seatInfo.price / 2;
      };
    },

    removeSelectedSeat: (state, action) => {
      const { seat, direction } = action.payload;
      if (direction === 'departure' || direction === 'arrival') {
        const indexToRemove = state[direction].selectedSeats.findIndex((s) => s.seat === seat);
        if (indexToRemove !== -1) {
          const seatInfo = state[direction].selectedSeats[indexToRemove];
          state[direction].selectedSeats.splice(indexToRemove, 1);

          if (seatInfo.isAdult === true) {
            state.selectedNumAdult -= 1;
            state.selectedPriceAdult -= seatInfo.price;
          } else {
            state.selectedNumChild -= 1;
            state.selectedlPriceChild -= seatInfo.price / 2;
          };
        }
      }
    },

    addComfortOption: (state, action) => {
      const { direction, coachId, optionComfort, price } = action.payload;

      if (direction === 'departure' || direction === 'arrival') {
        const comfortOption = { coachId, optionComfort, price };

        state[direction].selectedComfort.push(comfortOption);
        state.selectedPriceComfort += comfortOption.price;
      }
    },


    removeComfortOption: (state, action) => {
      const { direction, coachId, optionComfort, price } = action.payload;
      if (direction === 'departure' || direction === 'arrival') {
        const optionIndex = state[direction].selectedComfort.findIndex(option =>
          option.coachId === coachId && option.optionComfort === optionComfort && option.price === price);
        if (optionIndex !== -1) {
          state[direction].selectedComfort.splice(optionIndex, 1);
          state.selectedPriceComfort -= price;
        }
      }
    },


  },
});

export const { addSelectedSeat, removeSelectedSeat, addComfortOption, removeComfortOption } = seatsSelectedSlice.actions;

export default seatsSelectedSlice.reducer;
