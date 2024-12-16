/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface authState {
  loginState: any;
}

const initialState = {
  loginState: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginState(state, action) {
      state.loginState = action.payload;
    },
  },
});

export { authSlice };
export default authSlice.reducer;
