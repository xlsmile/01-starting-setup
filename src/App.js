import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Card from './components/UI/Card';

const App = () => {

  const db = [
    {
      id: 'e1',
      title: 'Chilean Pine',
      amount: 390.25,
      timepoint: new Date(2022, 7, 14),
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
      timepoint: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'Iron Spade',
      amount: 650.55,
      timepoint: new Date(2023, 5, 12),
    },
  ];

  const handleNewExpense = (newexpense) => {
    console.log('New Expense From App: ', newexpense);
  }

  return (
    <div className="content">
      <Card className="heading-primary">
        <h1>Funeral Expenses</h1>
        <NewExpense getNewExpenseInApp={handleNewExpense} />
      </Card>
      <Expenses expenses={db} />
    </div>
  );
}

export default App;
