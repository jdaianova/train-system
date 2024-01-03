import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  passengersFormsData: [],
  payingClient: {
    lastName: "",
    firstName: "",
    middleName: "",
    phone: '',
    email: '',
    payingType: 'online' //cash или online
  },
};

const initialElement = {
  idPassenger: "",
  type: "adult", // детский=child, взрослый=adult
  lastName: "",
  firstName: "",
  middleName: "",
  gender: "", // M или Ж
  birthDate: "",
  mobility: false, // ограниченная подвижность
  documentType: "passport", // passport or birthCertificate
  documentNumber: "",
  isValid: false,
}

export const passengersFormsData = createSlice({
  name: 'passengersFormsData',
  initialState,
  reducers: {

    addPassengerForm: (state, action) => {
      const { idPassenger } = action.payload;
      state.passengersFormsData.push({ ...initialElement, idPassenger: idPassenger });
    },


    removePassengerForm: (state, action) => {
      const idPassengerToRemove = action.payload;
      const index = state.passengersFormsData.findIndex(
        passenger => passenger.idPassenger === idPassengerToRemove
      );

      if (index !== -1) {
        state.passengersFormsData.splice(index, 1);
      }
    },


    updatePassengerForm: (state, action) => {
      const { name, value, idPassenger } = action.payload;
      const index = state.passengersFormsData.findIndex(form => form.idPassenger === idPassenger);
      if (index !== -1) {
        state.passengersFormsData[index] = { ...state.passengersFormsData[index], [name]: value };
      }
    },

    clearPassengerForms(state) {
      state.passengersFormsData = [];
    },

    updatePayingClient: (state, action) => {
      state.payingClient = action.payload;
    },

  }
});

export const { removePassengerForm, updatePassengerForm, addPassengerForm, clearPassengerForms, updatePayingClient } = passengersFormsData.actions;

export default passengersFormsData.reducer;