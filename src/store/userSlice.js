import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoggedIn: !!localStorage.getItem("user"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const userId = Date.now().toString();
      const newUser = { id: userId, ...action.payload };

      // Add to allUsers list
      const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
      allUsers.push(newUser);
      localStorage.setItem("allUsers", JSON.stringify(allUsers));

      // Set current user
      localStorage.setItem("user", JSON.stringify(newUser));
      state.user = newUser;
      state.isLoggedIn = true;
    },

    loginUser: (state, action) => {
      const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
      const user = allUsers.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        state.user = user;
        state.isLoggedIn = true;
      }
    },

    logoutUser: (state) => {
      localStorage.removeItem("user");
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { createUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
