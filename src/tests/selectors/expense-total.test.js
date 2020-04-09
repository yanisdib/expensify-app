import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';

test('Should return 0 if no expenses', () => {
    const res = getExpensesTotal([]);
    expect(res).toBe(0);

});

test('Should return total if multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});