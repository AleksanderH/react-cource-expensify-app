import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';










// store watch//

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})


//change state
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 120, createdAt: -2000}));
const  expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 5, createdAt: 22000}));

// store.dispatch (removeExpense ({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.id, {amount: 56}));

//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByDate()); // date
store.dispatch(sortByAmount()); //amount

 //store.dispatch(setStartDate(12));
// store.dispatch(setEndDate(15000));
//store.dispatch(setEndDate(1111));

// State demo

const demoState = {
    expenses: [{
        id: 'dfdfdf',
        description: 'description',
        note: 'some note',
        amount: 620,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}