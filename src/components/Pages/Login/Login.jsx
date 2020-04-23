import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../../actions/auth';

export const Login = ({ startLogin }) => (
    <div id="login">
        Please login to go any further.
        <br />
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);