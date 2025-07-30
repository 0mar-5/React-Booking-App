import { createSlice } from "@reduxjs/toolkit";

const initialBookings = JSON.parse(localStorage.getItem("bookings")) || [];

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: initialBookings,
  },
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
    loadBookingsFromStorage: (state) => {
      const stored = JSON.parse(localStorage.getItem("bookings")) || [];
      state.bookings = stored;
    },
  },
});

export const { addBooking, loadBookingsFromStorage } = bookingSlice.actions;
export default bookingSlice.reducer;
