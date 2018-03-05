import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';

let startLogin;

test('shoud render LoginPage component correctly', () => {
    const result = shallow(<LoginPage />);
    expect(result).toMatchSnapshot();
}); 

test('shoud call startLogin on button click', () => {
    startLogin = jest.fn();
    const wrapper = shallow(
        <LoginPage 
            startLogin={startLogin}   
        />
    );
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});