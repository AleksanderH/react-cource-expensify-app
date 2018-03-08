import { 
    setExpenses, 
    startSetExpenses, 
    editExpense,
    startEditExpense,
    removeExpense, 
    startRemoveExpense, 
    addExpense, 
    startAddExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid ='testUserUID_jflnv2dspur';
const defaultAuthState = {auth: {uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach( (done) => {
    const expensesData = {};
    expenses.forEach( ({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount,createdAt }
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should setup remove expense action object', () =>{
    const result = removeExpense(12345);
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 12345
    });
});

test('shoud remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE",
            id
        });
    });
    return database.ref(`users/${uid}/expenses/${id}`).once("value")
        .then((snapshot) => {
               expect(snapshot.val()).toBeFalsy();
               done();      
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

test("shuod edit expense in firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    const updates = {
        amount: 1001
    };
    store.dispatch(startEditExpense(id, updates)).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        });
    });
    return database.ref(`users/${uid}/expenses/${id}`).once("value")
        .then( (snapshot) => {
            expect(snapshot.val().amount).toBe(updates.amount)
            done();
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
    const store = createMockStore(defaultAuthState);
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

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('shoud add expense with default values to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
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


test('shoud fetch the expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        })
        done();
    });
});