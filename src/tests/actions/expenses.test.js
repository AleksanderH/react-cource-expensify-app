import { editExpense, removeExpense, addExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses';

test('should setup remove expense action object', () =>{
    const result = removeExpense({id: 12345});
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 12345
    });
});

test('should setup edit expense action object', () =>{
    const result = editExpense(
        '123abc',
        {note: 'some new note'}
    );
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates :{
            note: 'some new note'
        }
    });
});

test('Shoud setup add expense action object with provided values', () => {
    const expense = addExpense(expenses[1]);
    expect(expense).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    });
});