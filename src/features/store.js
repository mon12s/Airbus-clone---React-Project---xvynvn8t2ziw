import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { searchReducer } from "./userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});
