import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [yearFiltered, setYearFiltered] = useState('2023');

  const handleSelectedYear = (selectedYear) => {
    setYearFiltered(selectedYear);
  }

  const getSelectedYear = items.filter(item => {
    return item.timepoint.getFullYear().toString() === yearFiltered;
  });

  let selectedYearContent = <p className='expenses__empty'>No expenses found</p>;

  if (getSelectedYear.length > 0) {
    selectedYearContent = getSelectedYear.map((item) => (
      <ExpenseItem
        key={item.id}
        id={item.id}
        timepoint={item.timepoint}
        title={item.title}
        amount={item.amount}
      />
    ));
  }

  return (
      <Card className="expenses">
        <ExpensesFilter yearSelected={yearFiltered} onSelectedYear={handleSelectedYear} />
        {selectedYearContent}
      </Card>
  );
}

export default Expenses;
