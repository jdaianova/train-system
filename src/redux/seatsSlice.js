import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '64103c205c49ea0046365050',
  have_first_class: false,
  have_second_class: false,
  have_third_class: false,
  have_fourth_class: false,
  have_wifi: false,
  have_air_conditioning: false,
  have_express: false,
};

export const seatsSlice = createSlice({
    name: 'seats',
    initialState,
    reducers: {
        setFieldFilters: (state, action) => {
            const [field, value] = action.payload;
            if (field in state) { state[field] = value; }
          },
    },
});

export const { setOrderDeparture, setOrderArrival } = seatsSlice.actions;

export default seatsSlice.reducer;
