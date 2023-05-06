import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import i18n from 'shared/config/i18n/i18n';

import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>('login/loginByUserName', async (authData, thunkApi) => {
  try {
    const response = await axios.post('http://localhost:8000/login', authData);
    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(i18n.t('wrong_auth'));
  }
});
