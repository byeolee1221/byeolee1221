import ExpenseItem from "./ExpenseItem";
import "./ExpenseExampleData.css";

const ExpenseExampleData = (props) => {
    return (
        <div className="main_expanselist_data">
            {props.item.map((expensesExample) => 
                <ExpenseItem itemName={expensesExample.itemName} price={expensesExample.price} date={expensesExample.date} />
            )}
        </div>
    );
}

export default ExpenseExampleData;