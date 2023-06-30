import { createSlice } from "@reduxjs/toolkit";

const ContactSlice = createSlice({
    name: 'contact',
    initialState: { contactIsVisible: false, backdropIsVisible: false },
    reducers: {
        toggle(state) {
            state.contactIsVisible = !state.contactIsVisible;
        },
        backdrop(state) {
            state.backdropIsVisible = !state.backdropIsVisible;
        }
    }
})

export const contactActions = ContactSlice.actions;

export default ContactSlice.reducer;