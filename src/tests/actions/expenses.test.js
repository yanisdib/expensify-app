import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action', () => {
    const action = editExpense('123abc', {
        amount: 25,
        createdAt: 25000000
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount: 25,
            createdAt: 25000000
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'New expense',
        note: 'This is a test',
        amount: 5,
        createdAt: 109500
    };
    const action = addExpense(expenseData);
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expenses: {
                ...expenseData,
                id: expect.any(String)
            }
        }
    );
});

test('should setup add expense action object with default values', () => {
    // const expenseDefaultData = {
    //     description: '',
    //     note: '',
    //     amount: 0,
    //     createdAt: 0
    // }
    const action = addExpense();
    expect(action).toEqual(
        {
            type: 'ADD_EXPENSE',
            expenses: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        }
    );
});