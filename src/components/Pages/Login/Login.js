import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../../actions/auth';

export const Login = ({ startLogin }) => (
    <section id="login">
        <h1>Expense Manager</h1>
        <h5>A simple expense manager</h5>
        <br />
        <p>Please login to access your expenses.</p>
        <br />
        <button className="btn btn-primary" onClick={startLogin}>
            <img src="/media/images/google_logo_16x16.png" alt="Google logo"></img>
             Login with Google account ->
        </button>
    </section>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);