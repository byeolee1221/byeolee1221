import React, { useEffect, useState } from "react";

import classes from "./MainCart.module.css";
import cart from "../../Assets/shopping-cart.svg";

const MainCart = (props) => {
    const [bumpClass, setBumpClass] = useState(false);
    const btnClasses = `${classes.cart_amount} ${bumpClass ? classes.bump : ''}`;

    useEffect(() => {
        if (props.onCount === 0) {
            return;
        }
        setBumpClass(classes.bump);
        
        const timer = setTimeout(() => {
            setBumpClass('');
        }, 300);

        return () => {
            clearTimeout(timer);
            setBumpClass(classes.bump);
        }

    }, [props.onCount]);

    return (
        <div className={classes.main_cart_container}>
            <button className={classes.cart_btn}>
                <img src={cart} alt="cart"/>
                <span className={btnClasses}>{props.onCount}</span>
            </button>
        </div>
    );
}

export default MainCart;