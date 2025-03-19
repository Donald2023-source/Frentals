import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types";

interface AuthState {
  user: User[] | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = [];
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
