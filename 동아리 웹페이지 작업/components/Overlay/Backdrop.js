import React from "react";
import ReactDOM from "react-dom";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
    const backdropClasses = `${classes.backdrop} ${!props.valueBackdrop ? 'close' : ''}`;

    return ReactDOM.createPortal (
            ( props.valueBackdrop && ( <div className={backdropClasses} onClick={props.onOverlayClose}></div> )
            ), document.getElementById('backdrop')
        )
    }

export default Backdrop;