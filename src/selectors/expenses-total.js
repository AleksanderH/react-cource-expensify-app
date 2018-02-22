export default (expenses) => (
    expenses
        .map((expense) => expense.amount)
        .reduce( (a,b) => a+b, 0)
);