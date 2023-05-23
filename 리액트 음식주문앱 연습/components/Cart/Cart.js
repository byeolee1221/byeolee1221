import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const CartItems = (
      <ul className={classes.cart_list}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );

    return (
        <div>
            {CartItems}
            <div className={classes.cart_info}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.cart_btn_box}>
                {hasItems && <button id={classes.cart_btn_order}>Order</button>}
                <button onClick={props.onModalClose} id={classes.cart_btn_close} >Close</button>
            </div>
        </div>
    );
}

export default Cart;