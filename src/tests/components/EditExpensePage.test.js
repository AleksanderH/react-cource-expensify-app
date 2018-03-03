import React from 'react'
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, startEditExpense, startRemoveExpense;

beforeEach( () => {
    history = { push: jest.fn() };
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    wrapper = shallow( <EditExpensePage
        history = {history}
        expense = {expenses[1]}
        startEditExpense = {startEditExpense}
        startRemoveExpense ={startRemoveExpense}
    /> );
});

test('shoud render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('shoud handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);   
});

test('shoud handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id});   
});