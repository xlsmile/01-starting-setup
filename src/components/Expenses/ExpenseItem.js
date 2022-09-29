import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, timepoint }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const handleClick = () => {
    setUpdatedTitle('Updated Title');
  }

  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate expensedate={timepoint} />
      </div>
      <h2 className="expense-item__title">{updatedTitle}</h2>
      <div className="expense-item__amount">{amount}</div>
      <button className="expense-item__cta" onClick={handleClick}>Update Title</button>
    </Card>
  );
}

export default ExpenseItem;
