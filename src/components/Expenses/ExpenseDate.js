import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ expensedate }) => {
  const year = expensedate.getFullYear();
  const month = expensedate.toLocaleString('en-NZ', {month: 'long'});
  const day = expensedate.toLocaleString('en-NZ', {day: '2-digit'});

  return (
    <React.Fragment>
      <div className="expense-item__date--year">{year}</div>
      <div className="expense-item__date--month">{month}</div>
      <div className="expense-item__date--day">{day}</div>
    </React.Fragment>
  )
}

export default ExpenseDate;
