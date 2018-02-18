import moment from 'moment';
import { 
    setTextFilter,
    SortByDate,
    sortByAmount, 
    setStartDate, 
    setEndDate, 
    sortByDate 
} from '../../actions/filters';

test('Shoud generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Shoud generate set end date action object', () => {
    const action = setEndDate(moment(2000));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(2000)
    });
});

test('Shoud generate object for provided string', () => {
    const text = 'test text';
    const result = setTextFilter(text);
    expect(result).toEqual({
        type: 'TEXT_FILTER',
        text
    });
});

test('Shoud generate object for empty string', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    });
});

test('Shoud generate object for Date filter', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('Shoud generate object for Amount filter', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});