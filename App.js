import React, {useState} from 'react';

import NewExpense from './components/Expenses/NewExpense/NewExpense';
import ExpenseAmount from './components/Expenses/ExpenseAmount';

const DummyExpenses = [
  {id: 'a1', title: '생필품', amount: '24400', date: new Date(2021, 3, 28)}, 
  {id: 'a2', title: '커피', amount: '9500', date: new Date(2022, 3, 28)}, 
  {id: 'a3', title: '건전지', amount: '15400', date: new Date(2023, 3, 28)}
];

const App = () => {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
  <div>
    <h2>Let's get started!</h2>
    <NewExpense onAddExpense={addExpenseHandler} />
    <ExpenseAmount items={expenses} />
  </div>
  );
}

export default App;
