import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../../../../actions/expenses';

export class AddExpense extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        this.props.history.push('/dashboard');
    };
    render() {
        return (
            <div>
                <h3>Add an expense</h3>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);