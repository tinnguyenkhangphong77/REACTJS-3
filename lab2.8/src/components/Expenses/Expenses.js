import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (propsd) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={propsd.itemsd[0].title}
        amount={propsd.itemsd[0].amount}
        date={propsd.itemsd[0].date}
      />
      <ExpenseItem
        title={propsd.itemsd[1].title}
        amount={propsd.itemsd[1].amount}
        date={propsd.itemsd[1].date}
      />
      <ExpenseItem
        title={propsd.itemsd[2].title}
        amount={propsd.itemsd[2].amount}
        date={propsd.itemsd[2].date}
      />
      <ExpenseItem
        title={propsd.itemsd[3].title}
        amount={propsd.itemsd[3].amount}
        date={propsd.itemsd[3].date}
      />
    </Card>
  );
};
export default Expenses;
