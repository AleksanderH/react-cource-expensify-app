import expensesReducer from '../../reducers/expenses';
import expenses from '../../tests/fixtures/expenses';

test('shoud set expenses default state', () => {
    const result = expensesReducer(undefined,{ type: '@@INIT'});
    expect(result).toEqual([]);
});

test('shoud remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const result = expensesReducer(expenses,action);
    expect(result).toEqual([expenses[0],expenses[2]]);
});

test('shoud not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const result = expensesReducer(expenses,action);
    expect(result).toEqual(expenses);
});

test('shoud add an expense', () => {
    const expense = {
        id: '4',
        description: '4',
        note: '4',
        amount: 4,
        createdAt: 4
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const result = expensesReducer(expenses,action);
    expect(result).toEqual([...expenses, expense]);
});

test('shoud edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            description: 'updated',
            note: 'updated',
            amount: 5,
            createdAt: -1000
        }
    };
    const result = expensesReducer(expenses,action);
    expect(result).toEqual([
        expenses[0],
        expenses[1],
        { ...expenses[2], ...action.updates}
     ]);
});

test('shoud not edit expense if expense is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '74',
        updates: {
            description: 'updated',
            note: 'updated',
            amount: 5,
            createdAt: -1000
        }
    };
    const result = expensesReducer(expenses,action);
    expect(result).toEqual(expenses);
});

test('shoud set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const result = expensesReducer(expenses,action);
    expect(result).toEqual( [expenses[1]] );
});