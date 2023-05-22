import React, { Fragment } from "react";
import Cart from "./Cart";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
    return (
        <Fragment>
            {props.valueBackdrop && <div className={`${classes.backdrop} ${props.valueBackdrop ? 'close' : ''}`} onClick={props.onModalClose}></div>}
            {props.valueModal && <aside className={`${classes.aside} ${props.valueModal ? 'close' : ''}`}>
                <Cart onModalClose={props.onModalClose}/>
            </aside>}
        </Fragment>
    );
}

export default CartModal;