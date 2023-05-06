import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    return (
        <div className="main_expenseItem">
            <div className="expenseItem_box">
                <div className="expenseItem_box_date">
                    <ExpenseDate date={props.date} />
                </div>
                <div className="expenseItem_box_history">
                    {props.itemName}
                </div>
                <div className="expenseItem_box_price">
                    {props.price}원
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;