import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

// Define the user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    loginuser: (state, action) => {
      state.user = action.payload;
    },
    logoutuser: (state) => {
      state.user = null;
    },
  },
});

export const { loginuser, logoutuser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const userReducer = userSlice.reducer;

// Define the search slice
const searchSlice = createSlice({
  name: 'search',
  initialState: {
    from: '',
    price: 0,
    isUserLogin: false
  },
  reducers: {
    fromToSetInRedux: (state, action) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
    },
    flightPrice: (state, action) => {
      state.price = action.payload;
    },
    UserLogin: (state, action) => {
      state.isUserLogin = action.payload;
    },
  },
});

export const { fromToSetInRedux, flightPrice, UserLogin } = searchSlice.actions;
export const selectFrom = (state) => state.search.from;
export const selectPrice = (state) => state.search.price;
export const selectIsUserLogin = (state) => state.search.isUserLogin;
export const searchReducer = searchSlice.reducer;

// Combine the user and search reducers
const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
});

export default rootReducer;
