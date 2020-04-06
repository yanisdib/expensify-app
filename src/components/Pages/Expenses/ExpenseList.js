import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItems from './ExpensesListItems';
import selectExpenses from '../../../selectors/expenses';


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length !== 0 ? (
                props.expenses.map((expense) => {
                    return <ExpensesListItems key={expense.id} {...expense} />
                })
            ) : (
                    <p>No expenses...</p>
                )
        }
    </div>
);
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};
// What we want to connect
// Function - Define what info we want to access from the store
export default connect(mapStateToProps)(ExpenseList);