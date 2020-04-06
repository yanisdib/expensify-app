import { createStore } from 'redux';

// Action generators - functions that return action objects


// Destructure our object 
// Set default value for incrementBy as 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Are pure functions
// 2. Never change state or action

let a = 10;
const add = (b) => {
    return a + b;
}; // This is not a pure function because it depends on data outside the function scope.

const addBis = (a, b) => {
    return a + b;
}; // This is a pure function.

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: action.count
            };
        default: return state;
    }
};

const store = createStore(countReducer);

// const unsubscribe = store.suscribe(() => {
console.log(store.getState());
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 101 }));
store.dispatch(resetCount());

// unsubscribe();

// Action that increments the counter
// store.dispatch({
//     type: 'INCREMENTT',
//     incrementBy: 5
// });

// Action that decrements the counter
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// Action that resets the counter
// store.dispatch({
//     type: 'RESET'
// });

// Action that sets the counter to 101
// store.dispatch({
//     type: 'SET',
//     count: 101
// })