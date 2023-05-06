import ExpenseItem from "./ExpenseItem";
import "./ExpenseExampleData.css";

const ExpenseExampleData = (props) => {
    return (
        <div className="main_expanselist_data">
            <ExpenseItem itemName={props.item[0].itemName} price={props.item[0].price} date={props.item[0].date} />
            <ExpenseItem itemName={props.item[1].itemName} price={props.item[1].price} date={props.item[1].date} />
            <ExpenseItem itemName={props.item[2].itemName} price={props.item[2].price} date={props.item[2].date} />
            <ExpenseItem itemName={props.item[3].itemName} price={props.item[3].price} date={props.item[3].date} />
        </div>
    );
}

export default ExpenseExampleData;