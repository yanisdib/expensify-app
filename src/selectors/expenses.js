/* eslint-disable array-callback-return */

import moment from "moment";

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; // if our expense's createdAt is smaller than startDate, it is filtered out.
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;     // if our expense's createdAt is greater or same as endDate, it is filtered out.
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};