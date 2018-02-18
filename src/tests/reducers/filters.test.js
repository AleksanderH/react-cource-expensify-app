import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('shoud setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('shoud set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('shoud set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('shoud set text filter', () => {
    const state = filtersReducer(undefined, { 
        type: 'TEXT_FILTER',
        text: 'some filter'
    });
    expect(state.text).toBe('some filter');
});

test('shoud set startDate filter', () => {
    const time = moment();
    const state = filtersReducer(undefined, { 
        type: 'SET_START_DATE',
        startDate: time
    });
    expect(state.startDate).toBe(time);
});

test('shoud set endDate filter', () => {
    const time = moment();
    const state = filtersReducer(undefined, { 
        type: 'SET_END_DATE',
        endDate: time
    });
    expect(state.endDate).toBe(time);
});

