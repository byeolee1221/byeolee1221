import ExpenseHeader from "./components/ExpenseHeader";
import ExpenseMainTitle from "./components/ExpenseMainTitle";
import ExpenseExampleData from "./components/ExpensesExampleData";
import ExpenseUser from "./components/ExpenseUser";
import "./App.css";

const App = () => {
  const expensesExample = [
    {itemName: '커피', price: 9500, date: new Date('2020-01-26')},
    {itemName: '스피커', price: 106000, date: new Date('2021-04-16')},
    {itemName: '로션', price: 12000, date: new Date('2022-07-05')},
    {itemName: '컴퓨터부품', price: 3300000, date: new Date('2023-02-20')}
  ];

  return (
    <div className="App">
      <ExpenseHeader />
      <ExpenseUser />
      <ExpenseMainTitle />
      <ExpenseExampleData item={expensesExample} />
    </div>
  );
}

export default App;
