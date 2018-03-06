import authReducer from '../../reducers/auth';

test('shoud set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'afwfewfg486s8g'
    };
    const state = authReducer({},action);
    expect(state.uid).toBe(action.uid);
});

test('shoud clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state =authReducer({uid: 'sfsf'},action);
    expect(state).toEqual({});
});