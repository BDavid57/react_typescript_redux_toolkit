import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todos/todosSlice';
import navigationSlice from './navigation/slice';

export const appReducer = combineReducers({
  todos: todosSlice,
  navigation: navigationSlice,
});

export const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
