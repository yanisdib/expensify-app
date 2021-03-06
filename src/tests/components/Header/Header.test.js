import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../components/Header/Header';

test('should render Header component correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);

    // Simulate a click event
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});