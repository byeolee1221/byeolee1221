import { configureStore } from "@reduxjs/toolkit";

import LoginSlice from "./LoginSlice";
import ContactSlice from "./ContactSlice";

const store = configureStore({
    reducer: { login: LoginSlice, contact: ContactSlice }
});

export default store;
