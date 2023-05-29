import React from "react";
import ReactDOM from "react-dom";

import CartList from "./CartList";
import classes from "./CartModal.module.css";

const CartModal = (props) => {
    return ReactDOM.createPortal (
        <aside className={classes.cart_overlay}>
            <div className={classes.overlay_container}>
                <ul>
                    <CartList />
                </ul>
            </div>
        </aside>, document.getElementById('overlay')
    );
}

export default CartModal;