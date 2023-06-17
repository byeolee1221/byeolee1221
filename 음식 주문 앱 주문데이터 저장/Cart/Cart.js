import React, { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const orderHandler = () => {
        setIsCheckout(true);
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-http-d54e9-default-rtdb.firebaseio.com/Order.json', {
          method: 'POST',
          body: JSON.stringify({
            user: userData,
            orderedItem: cartCtx.items
          })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
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

    const modalActions = (
      <div className={classes.cart_btn_box}>
        {hasItems && (
          <button id={classes.cart_btn_order} onClick={orderHandler}>
            Order
          </button>
        )}
        <button onClick={props.onModalClose} id={classes.cart_btn_close}>
          Close
        </button>
      </div>
    );

    const cartModalContent = (
      <Fragment>
        {CartItems}
        <div className={classes.cart_info}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckout && (
          <Checkout
            onConfirm={submitOrderHandler}
            onModalClose={props.onModalClose}
          />
        )}
        {!isCheckout && modalActions}
      </Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = <p>Successfully sent the order!</p>;

    return (
        <div>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </div>
    );
}

export default Cart;