import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../../components/Pages/Dashboard/EditExpense/EditExpense';
import expenses from '../../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expenses[0]} />);
});

test('should render EditExpense correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[0].id
    });
});