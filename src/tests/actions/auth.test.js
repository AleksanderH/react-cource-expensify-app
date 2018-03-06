import { login, startLogin, logout, startLogout } from '../../actions/auth';

test('shoud generate correct login object', () => {
    const uid = 'somestr398feonou34n';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
});

test('shoud generate correct logout object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});

