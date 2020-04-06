import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../AddExpense/ExpenseForm';
import { editExpense, removeExpense } from '../../../../actions/expenses';

export class EditExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/dashboard');
    };
    onClick = () => {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/dashboard');
    };
    render() {
        return (
            <div>
                {/* Editing the work with ID of {props.match.params.id} */
                }
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onClick}>
                    Remove
            </button>
            </div>
        )
    };
};
// const EditExpense = (props) => {
//     return (

//     )
// };

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expense) => dispatch(removeExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);