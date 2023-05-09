import React, {useState} from "react";
import ExpenseHeader from "./components/ExpenseHeader";
import ExpenseMainTitle from "./components/ExpenseMainTitle";
import ExpenseExampleData from "./components/ExpensesExampleData";
import ExpenseUser from "./components/ExpenseUser";
import ExpenseListFilter from "./components/ExpenseListFilter";
import "./App.css";

const expensesDummy = [
  {id: 'ex1', itemName: '커피', price: 9500, date: new Date('2020-01-26')},
  {id: 'ex2', itemName: '스피커', price: 106000, date: new Date('2021-04-16')},
  {id: 'ex3', itemName: '로션', price: 12000, date: new Date('2022-07-05')},
  {id: 'ex4', itemName: '컴퓨터부품', price: 3300000, date: new Date('2023-02-20')}
];

const App = () => {
  const [expense, setExpense] = useState(expensesDummy);

  const addExpenseListHandler = (newExpense) => {
    setExpense((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  }
  
  const [selectedYear, setSelectedYear] = useState('2023');
  
  const filterHandler = (userYear) => {
    setSelectedYear(userYear);
  }

  return (
    <div className="App">
      <ExpenseHeader />
      <ExpenseUser onAddList={addExpenseListHandler} />
      <ExpenseMainTitle />
      <ExpenseListFilter selectYear={selectedYear} onFilterChange={filterHandler} />
      <ExpenseExampleData item={expense} />
    </div>
  );
}

export default App;
