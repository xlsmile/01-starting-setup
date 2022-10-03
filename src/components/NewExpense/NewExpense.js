import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ getNewExpenseInApp }) => {
  const handleSubmittedData = (submittedData) => {
    const enteredData = {
      ...submittedData,
      id: (Math.random() * 100).toString()
    };
    getNewExpenseInApp(enteredData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmision={handleSubmittedData} />
    </div>
  );
}

export default NewExpense;
