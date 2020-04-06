import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../../../../actions/expenses';

export class AddExpense extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));

        this.props.addExpense(expense);
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
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);