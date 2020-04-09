import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../../components/Pages/Expenses/ExpenseSummary';

test('Should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={12.94} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={4} expenseTotal={12458} />);
    expect(wrapper).toMatchSnapshot();
});