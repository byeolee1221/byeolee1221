import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: 'login',
    initialState: { loginIsVisible: false, backdropIsVisible: false },
    reducers: {
        toggle(state) {
            state.loginIsVisible = !state.loginIsVisible;
        },
        backdrop(state) {
            state.backdropIsVisible = !state.backdropIsVisible;
        }
    }
})

export const LoginActions = LoginSlice.actions;

export default LoginSlice.reducer;