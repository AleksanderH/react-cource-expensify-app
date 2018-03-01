import { setExpenses, editExpense, removeExpense, addExpense, startAddExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach( (done) => {
    const expensesData = {};
    expenses.forEach( ({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount,createdAt }
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

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

test('shoud add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: "cat",
        amount: "12",
        note: "too many cats",
        createdAt: 100100
    }
    store.dispatch(startAddExpense(expenseData)).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        }); 

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('shoud add expense with default values to database and store', (done) => {
    const store = createMockStore({});
    const defaultData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
    }
    store.dispatch(startAddExpense({})).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        }); 
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
});

test('shoud setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});