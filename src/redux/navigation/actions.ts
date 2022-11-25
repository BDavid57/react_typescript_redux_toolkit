import { createAsyncThunk } from '@reduxjs/toolkit';

export const addPath = createAsyncThunk(
  'path/addPath',
  async (path: string, thunkApi) => {
    try {
      return path;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);
export const deletePath = createAsyncThunk(
  'path/deletePath',
  async (path: string, thunkApi) => {
    try {
      return path;
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  },
);
