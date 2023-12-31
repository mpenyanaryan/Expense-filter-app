import { useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/expenses/Expenses';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 8, 14)
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];
const App = () => {
  const [AddExpense, setAddedExpense] = useState(INITIAL_EXPENSES);

  // function renders a new item to existing list
  const addExpenseData = expense => {
    // updates state
    setAddedExpense(previousExpenses => {
      return [expense, ...previousExpenses];
    });
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses items={AddExpense} />
    </>
  );
};

export default App;
