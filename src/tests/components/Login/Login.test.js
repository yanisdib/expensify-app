import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../../components/Pages/Login/Login';
let startLogin, wrapper;

// Create a spy
// Pass the spy
beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<Login startLogin={startLogin} />);
});

test('should render Login component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    // Simulate a click event
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});