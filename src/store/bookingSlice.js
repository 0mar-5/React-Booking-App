import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("bookings")) || [];

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("bookings", JSON.stringify(state));
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
