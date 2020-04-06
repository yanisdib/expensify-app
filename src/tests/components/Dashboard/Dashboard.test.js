import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../../components/Pages/Dashboard/Dashboard';

test('should generate Dashboard correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
});