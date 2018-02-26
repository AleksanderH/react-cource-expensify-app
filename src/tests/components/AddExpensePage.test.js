import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

//reuse the spies
let onSubmit, history, wrapper;
beforeEach( () => {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( <AddExpensePage 
         onSubmit ={onSubmit}
         history={history}   
    /> );
});

test('shoud render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('shoud handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[2]);
});