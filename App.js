import ExpenseAmount from './components/Expenses/ExpenseAmount';

const App = () => {
  const expenses = [
    {title: '생필품', amount: '24,400원', date: new Date(2023, 3, 28)}, 
    {title: '커피', amount: '9,500원', date: new Date(2023, 3, 28)}, 
    {title: '건전지', amount: '15,400원', date: new Date(2023, 3, 28)}
  ];

  return (
  <div>
    <h2>Let's get started!</h2>
    <ExpenseAmount items={expenses} />
  </div>
  );
}

export default App;
