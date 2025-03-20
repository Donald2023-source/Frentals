import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  phoneNumber: string;
  token: string | null;
  id: string;
}
interface AuthState {
  user: User | null;
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
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
