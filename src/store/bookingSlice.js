import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("bookings");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Failed to parse bookings from localStorage", err);
    return [];
  }
};

const saveToLocalStorage = (bookings) => {
  try {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  } catch (err) {
    console.error("Failed to save bookings to localStorage", err);
  }
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: loadFromLocalStorage(),
  },
  reducers: {
    addBooking: (state, action) => {
      const newBooking = {
        ...action.payload,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      state.bookings.push(newBooking);
      saveToLocalStorage(state.bookings);
    },
    loadBookingsFromStorage: (state) => {
      state.bookings = loadFromLocalStorage();
    },
    clearBookings: (state) => {
      state.bookings = [];
      localStorage.removeItem("bookings");
    },
  },
});

export const { addBooking, loadBookingsFromStorage, clearBookings } =
  bookingSlice.actions;

export default bookingSlice.reducer;
