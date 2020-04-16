import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="navbar">
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="nav-link is-active" exact={true}>Home</NavLink>
        <NavLink to="/dashboard" activeClassName="nav-link is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="nav-link is-active">Create expense</NavLink>
        <NavLink to="/help" activeClassName="nav-link is-active">Help</NavLink>
    </header>
);

export default Header;