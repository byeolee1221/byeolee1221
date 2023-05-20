import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.orderList}>
            <div>
                <div>
                    <h3 className={classes.list_title}>{props.name}</h3>
                </div>
                <div className={classes.list_description}>{props.description}</div>
                <div className={classes.list_price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} />
            </div>
        </li>
    );
}

export default MealItem;