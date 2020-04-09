import React from 'react';
import ConnectedExpenseList from '../Expenses/ExpenseList';
import ExpenseListFilters from '../Expenses/ExpenseListFilters';
import ExpenseSummary from '../Expenses/ExpenseSummary';

const Dashboard = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);

export default Dashboard;