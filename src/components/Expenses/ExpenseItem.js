import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ timepoint, title, amount }) => {

  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate purchasedate={timepoint} />
      </div>
      <h2 className="expense-item__title">{title}</h2>
      <div className="expense-item__amount">${amount}</div>
    </Card>
  );
}

export default ExpenseItem;
