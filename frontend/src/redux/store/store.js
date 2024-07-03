// redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer.js';
import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector
} from 'react-redux';

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();
