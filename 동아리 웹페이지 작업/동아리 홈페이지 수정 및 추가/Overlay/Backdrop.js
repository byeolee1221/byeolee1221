import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { LoginActions } from "../../store/LoginSlice";

import classes from "./Backdrop.module.css";

const Backdrop = () => {
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(LoginActions.toggle());
        dispatch(LoginActions.backdrop());
    }

    return ReactDOM.createPortal (
            <div className={classes.backdrop} onClick={closeHandler}></div>, document.getElementById('backdrop')
            ) 
    }

export default Backdrop;