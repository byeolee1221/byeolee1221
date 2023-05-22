import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const CartItems = <ul className={classes.cart_list}>{[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <div>
            {CartItems}
            <div className={classes.cart_info}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.cart_btn_box}>
                <button id={classes.cart_btn_order}>Order</button>
                <button onClick={props.onModalClose} id={classes.cart_btn_close} >Close</button>
            </div>
        </div>
    );
}

export default Cart;