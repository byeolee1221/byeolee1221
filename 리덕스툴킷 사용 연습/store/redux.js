import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./CounterSlice";
import AuthReducer from "./AuthSlice";

const store = configureStore({
    reducer: { counter: CounterReducer, auth: AuthReducer }
});

export default store;