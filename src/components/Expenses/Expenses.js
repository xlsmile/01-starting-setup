import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        timepoint={expenses[0].timepoint}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        timepoint={expenses[1].timepoint}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        timepoint={expenses[2].timepoint}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        timepoint={expenses[3].timepoint}
      />
    </Card>
  );
}

export default Expenses;
