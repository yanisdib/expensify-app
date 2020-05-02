import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

let currentDate = moment();
console.log(currentDate.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // allow to clear the value
            this.setState(() => ({ amount }));
        };
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        };
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            // Set error state equal to 'Please provide description and amount.'
            this.setState(() => ({ error: 'Please provide a description and an amount.' }));
            console.log(this.state.error);
        } else {
            // Clear the error
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note

            });
            this.setState(() => ({ error: '' }));
            console.log('Submitted!');
        }
    };

    render() {
        return (
            <div id="expense-form">
                {this.state.error && <p>{this.state.error}</p>}
                <form className="w-75" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-9">
                                <label>Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.onDescriptionChange}
                                    autoFocus
                                />
                            </div>
                            <div className="col-3">
                                <label>Amount</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="amount"
                                    placeholder="Amount"
                                    value={this.state.amount}
                                    onChange={this.onAmountChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-9">
                                <textarea
                                    className="form-control"
                                    placeholder="Note for your expense"
                                    value={this.state.note}
                                    onChange={this.onNoteChange}
                                >
                                </textarea>
                            </div>
                            <div className="col-3">
                                <SingleDatePicker
                                    date={this.state.createdAt}
                                    className="form-control"
                                    onDateChange={this.onDateChange}
                                    focused={this.state.calendarFocused}
                                    onFocusChange={this.onFocusChange}
                                    numberOfMonths={1}
                                    isOutsideRange={() => false}
                                />
                            </div>
                        </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-secondary">Add</button>
                        </div>
                </form>
            </div>
        );
    }
};