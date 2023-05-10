import ExpenseItem from "./ExpenseItem";
import "./ExpenseExampleData.css";

const ExpenseExampleData = (props) => {
  let expenseListMsg = <p>해당 연도의 지출내역이 없습니다.</p>;

  if (props.onFilterExpenseList.length > 0) {
        expenseListMsg = props.onFilterExpenseList.map((expensesExample) => (
            <ExpenseItem
                key={expensesExample.id}
                itemName={expensesExample.itemName}
                price={expensesExample.price}
                date={expensesExample.date}
            />
        )); 
  }

  return (
    <div className="main_expanselist_data">
      {expenseListMsg}
    </div>
  );
};

export default ExpenseExampleData;
