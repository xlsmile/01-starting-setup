import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card';

const db = [
  {
    id: 'e1',
    title: 'Chilean Pine',
    amount: 390.25,
    timepoint: new Date(2022, 7, 14)
  },
  {
    id: 'e2',
    title: 'Hearse Limo',
    amount: 295.35,
    timepoint: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Oak Coffin',
    amount: 850.65,
    timepoint: new Date(2022, 2, 28)
  },
  {
    id: 'e4',
    title: 'Iron Spade',
    amount: 650.55,
    timepoint: new Date(2023, 5, 12)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(db);

  const handleNewExpense = (newexpense) => {
    setExpenses([newexpense, ...expenses]);
  };

  return (
    <div className="content">
      <Card className="heading-primary">
        <h1>Funeral Expenses</h1>
        <NewExpense getNewExpenseInApp={handleNewExpense} />
      </Card>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
