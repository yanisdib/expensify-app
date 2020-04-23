import authReducer from '../../reducers/auth';

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set user id for login', () => {
    const uid = 'abcd';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(uid);
});

test('should clear user id for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'abcd' }, action);
    expect(state).toEqual({});
});
