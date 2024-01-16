import { createSlice } from '@reduxjs/toolkit'

export const currentRoutesSlice = createSlice({
  name: 'currentRoutes',
  initialState: {},
  reducers: {
    setCurrentRoutes: (state, action) => {
      state.currentRoutes = action.payload;
    },
  },
});

export const { setCurrentRoutes } = currentRoutesSlice.actions;

export default currentRoutesSlice.reducer;