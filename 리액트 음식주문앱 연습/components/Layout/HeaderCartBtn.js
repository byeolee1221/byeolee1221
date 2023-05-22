import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";

const HeaderCartBtn = (props) => {
    return (
        <button onClick={props.onModal} className={classes.cart_btn}>
            <span className={classes.cart_img}>
                <CartIcon />
            </span>
            <span className={classes.btn_name}>Your Cart</span>
            <span className={classes.cart_status}>0</span>
        </button>
    );
}

export default HeaderCartBtn;