import { createSlice } from '@reduxjs/toolkit';
import { addPath, deletePath } from './actions';
import { NavigationState } from './types';

export const initialState: NavigationState = {
  loading: false,
  pathing: [],
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addPath.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addPath.fulfilled, (state, action) => {
      state.loading = false;
      state.pathing = [...state.pathing, action.payload];
    });
    builder.addCase(addPath.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deletePath.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deletePath.fulfilled, (state, action) => {
      state.loading = false;
      state.pathing = state.pathing.filter((el) => el !== action.payload);
    });
    builder.addCase(deletePath.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default navigationSlice.reducer;
