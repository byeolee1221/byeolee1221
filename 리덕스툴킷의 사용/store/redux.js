// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterslice';
import authReducer from './authSlice';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;