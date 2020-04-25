import database from '../firebase/firebase';


// WITHOUT FIREBASE
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// WITH FIREBASE INTEGRATION
// component calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has ability to dispatch other actions and whatever it wants)


// ADD_EXPENSE
// Takes an object as params
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// Add an expense to Firebase database
// Takes an expense object as params
// Receives an empty object as default
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
// Receives an empty object as default params
// if no object is passed
export const removeExpense = ({ id } = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    });

// EDIT_EXPENSE
export const editExpense = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    });

// SET_EXPENSES
// Set the array value
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// Fetch Firebase database to retrieve existing expenses
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`)
            .orderByKey()
            .once('value').then((snapshot) => {
                const expenses = [];

                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(setExpenses(expenses));
                console.log('Data successfully retrieved!')
            });
    };
};


// Add an expense to Firebase database
// Takes a string and an object as params
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates)
            .then(() => {
                dispatch(editExpense(id, updates));
                console.log('Data has been successfully updated!')
            });
    };;
};

// Remove an expense from Firebase database
// Takes the id from a destructured object as params
// Receives an empty object as default
export const startRemoveExpense = ({ id = {} }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
            console.log('Data successfully removed from database!');
        });
    };
};
