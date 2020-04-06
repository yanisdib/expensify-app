import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../../components/Pages/Error/NotFound';

test('should render NotFound correctly', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});