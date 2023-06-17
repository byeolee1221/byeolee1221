import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isFiveChars(enteredPostal);

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalIsValid,
            city: enteredCityIsValid
        });

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostal,
            city: enteredCity
        });
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef}/>
                {!formInputsValidity.name && <p>Check your name!</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef}/>
                {!formInputsValidity.street && <p>Check street name!</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`}>
                <label htmlFor="postal">Postal code</label>
                <input type="text" id="postal" ref={postalInputRef}/>
                {!formInputsValidity.postalCode && <p>Check postalcode! (5 characters long)</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef}/>
                {!formInputsValidity.city && <p>Check your city!</p>}
            </div>
            <div className={classes.actions}>
                <button>Confirm</button>
                <button type="button" onClick={props.onModalClose}>Cancel</button>
            </div>
        </form>
    );
}

export default Checkout;