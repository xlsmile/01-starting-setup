import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ purchasedate }) => {
  const year = purchasedate.toLocaleString("en", { year: "numeric" });
  const month = purchasedate.toLocaleString("en", { month: "long" });
  const day = purchasedate.toLocaleString("en", { day: "numeric" });

  return (
    <>
      <span className="expense-item__date--year">{year}</span>
      <span className="expense-item__date--month">{month}</span>
      <span className="expense-item__date--day">{day}</span>
    </>
  );
};

export default ExpenseDate;
