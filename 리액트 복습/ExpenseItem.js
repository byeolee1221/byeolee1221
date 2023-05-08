import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [itemName, setItemName] = useState(props.itemName);
    
    const buttonHandler = () => {
        setItemName('TEST');
        console.log(itemName);
    }

    return (
        <div className="main_expenseItem">
            <div className="expenseItem_box">
                <div className="expenseItem_box_date">
                    <ExpenseDate date={props.date} />
                </div>
                <div className="expenseItem_box_history">
                    {itemName}
                </div>
                <div className="expenseItem_box_price">
                    {props.price}원
                </div>
                <button onClick={buttonHandler} type="button">TEST</button>
            </div>
        </div>
    );
}

export default ExpenseItem;