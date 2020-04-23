import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="navbar">
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="nav-link is-active" exact={true}>Home</NavLink>
        <NavLink to="/dashboard" activeClassName="nav-link is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="nav-link is-active">Create expense</NavLink>
        <NavLink to="/help" activeClassName="nav-link is-active">Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);