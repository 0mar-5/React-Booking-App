import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bookingReducer from "./bookingSlice";
import sidebarReducer from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer,
    sidebar: sidebarReducer,
  },
});
