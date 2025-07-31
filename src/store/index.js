import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bookingReducer from "./bookingSlice";
import sidebarReducer from "./sidebarSlice";
import searchReducer from "./searchSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    booking: bookingReducer,
    sidebar: sidebarReducer,
    search: searchReducer,
  },
});
