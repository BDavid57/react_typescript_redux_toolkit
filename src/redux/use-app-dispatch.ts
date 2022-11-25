import { useDispatch } from 'react-redux';
import { AppDispatch } from '.';
import { RootState } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch<RootState>>();
