import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";
import classes from "./HeaderCartBtn.module.css";

const HeaderCartBtn = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(cartContext);
    
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)


    const btnClasses = `${classes.cart_btn} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
        
    }, [items]);

    return (
        <button onClick={props.onModal} className={btnClasses}>
            <span className={classes.cart_img}>
                <CartIcon />
            </span>
            <span className={classes.btn_name}>Your Cart</span>
            <span className={classes.cart_status}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartBtn;