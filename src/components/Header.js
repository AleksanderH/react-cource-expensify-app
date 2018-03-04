import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth';
 
export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink></p>
        <p><NavLink to='/create' activeClassName='is-active'>Create</NavLink></p>
        <p><NavLink to='/edit' activeClassName='is-active'>edit page</NavLink></p>
        <p><NavLink to='/help' activeClassName='is-active'>help</NavLink></p>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);