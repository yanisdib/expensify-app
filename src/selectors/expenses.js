import moment from "moment";

// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; // if our expense's createdAt is smaller than startDate, it is filtered out.
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;     // if our expense's createdAt is greater or same as endDate, it is filtered out.
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    // eslint-disable-next-line array-callback-return
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};