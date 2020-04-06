import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItems from '../../../components/Pages/Expenses/ExpensesListItems';
import expenses from '../../fixtures/expenses';


test('should render ExpenseListItems correctly', () => {
    const wrapper = shallow(<ExpenseListItems {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});