import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { contactActions } from "../../store/ContactSlice";

import classes from "./Backdrop.module.css";

const ContactBackdrop = () => {
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(contactActions.toggle());
        dispatch(contactActions.backdrop());
    }

    return ReactDOM.createPortal (
            <div className={classes.backdrop} onClick={closeHandler}></div>, document.getElementById('backdrop')
            ) 
    }

export default ContactBackdrop;