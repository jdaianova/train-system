import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        "user": {
          "first_name": "",
          "last_name": "",
          "patronymic": "",
          "phone": "",
          "email": "",
          "payment_method": ""
        },
        "departure": {
          "route_direction_id": "",
          "seats": [
            {
              "coach_id": "",
              "person_info": {
                "is_adult": true,
                "first_name": "",
                "last_name": "",
                "patronymic": "",
                "gender": true,
                "birthday": "",
                "document_type": "",
                "document_data": ""
              },
              "seat_number": 0,
              "is_child": true,
              "include_children_seat": true
            }
          ]
        },
        "arrival": {
          "route_direction_id": "",
          "seats": [
            {
              "coach_id": "",
              "person_info": {
                "is_adult": true,
                "first_name": "",
                "last_name": "",
                "patronymic": "",
                "gender": true,
                "birthday": "",
                "document_type": "",
                "document_data": ""
              },
              "seat_number": 0,
              "is_child": true,
              "include_children_seat": true
            }
          ]
        }
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrderDeparture: (state, action) => {
            state.departure = action.payload
        },
        setOrderArrival: (state, action) => {
            state.arrival = action.payload
        },
    },
});

export const { setOrderDeparture, setOrderArrival } = orderSlice.actions;

export default orderSlice.reducer;
