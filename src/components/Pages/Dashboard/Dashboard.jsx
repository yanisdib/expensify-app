import React from 'react';
import ConnectedExpenseList from '../Expenses/ExpenseList';
import ExpenseListFilters from '../Expenses/ExpenseListFilters';

const Dashboard = () => (
    <div>
        <ExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);

export default Dashboard;