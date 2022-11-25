import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { appReducer } from './store';

export { store } from './store';
export type RootState = ReturnType<typeof appReducer>;
export type ThunkResult<R> = ThunkAction<R, RootState, unknown, AnyAction>;
export type AppDispatch<RespType> = ThunkDispatch<
  RootState,
  RespType,
  AnyAction
>;
export type AppState = RootState;
