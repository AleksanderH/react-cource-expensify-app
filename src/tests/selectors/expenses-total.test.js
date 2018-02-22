import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('shoud return total expenses amount', () => {
    const total = expensesTotal(expenses);
    expect(total).toBe(expenses[0].amount+expenses[1].amount+expenses[2].amount)   
});

test('shoud return 0 if no expenses', () => {
    const total = expensesTotal([]);
    expect(total).toBe(0);
});

test('shoud return expense amount for single expense', () => {
    const total = expensesTotal([ expenses[2] ]);
    expect(total).toBe(expenses[2].amount);
});