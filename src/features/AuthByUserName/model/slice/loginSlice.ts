import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { LoginSchema } from '../types/loginSchema';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUserName.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(loginByUserName.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginByUserName.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions, reducer: loginReducer } = loginSlice;
