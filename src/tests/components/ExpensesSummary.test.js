import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpenseSummary';

test('shoud correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123} />);
    expect(wrapper).toMatchSnapshot();
});

test('shoud correctly render ExpensesSummary with multiple eexpenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={3446756756} />);
    expect(wrapper).toMatchSnapshot();
});