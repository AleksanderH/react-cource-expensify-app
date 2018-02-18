import { editExpense, removeExpense, addExpense } from "../../actions/expenses";

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
    const expenseData = {
        description: 'some description', 
        note: 'some note', 
        amount: 100, 
        createdAt: 1000 
    };
    const expense = addExpense(expenseData);
    expect(expense).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('Shoud setup add expense action object with default values', () => {
    const expense = addExpense();
    expect(expense).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expense.expense.id,
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0 
        }
    });
});