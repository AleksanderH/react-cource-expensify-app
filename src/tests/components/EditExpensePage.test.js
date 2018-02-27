import React from 'react'
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, editExpense, removeExpense;

beforeEach( () => {
    history = { push: jest.fn() };
    editExpense = jest.fn();
    removeExpense = jest.fn();
    wrapper = shallow( <EditExpensePage
        history = {history}
        expense = {expenses[1]}
        editExpense = {editExpense}
        removeExpense ={removeExpense}
    /> );
});

test('shoud render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('shoud handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);   
});

test('shoud handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id});   
});