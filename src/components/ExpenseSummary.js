import React from 'react';
import { connect } from 'react-redux'; 
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totaling {formattedExpensesTotal}</h1>
        </div>
    )
};

const mapStateToProps = (state)=>{
    console.log(state);
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }

};

export default connect(mapStateToProps)(ExpensesSummary);
