import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';

test('shoud render LoginPage component correctly', () => {
    const result = shallow(<LoginPage />);
    expect(result).toMatchSnapshot();
}); 