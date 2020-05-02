import React from 'react';

export const Login = ({ startLogin }) => (
    <div id="login">
        <div className="row d-flex">
            <div className="col-12">
                <br />
                <p className="text-danger">Please login to access your expenses.</p>
                <br />
                <button className="btn btn-primary google-acc-btn" onClick={startLogin}>
                    <img src="/media/images/google_logo_16x16.png" title="Google" alt="Google logo"></img>
                    Login with Google account ->
                </button>
                <button className="btn btn-secondary git-acc-btn" onClick={() => { window.open('https://github.com/yanisdib/expensify-app', '_blank'); }}>
                    <img src="/media/images/github_logo_16x16.png" title="GitHub" alt="GitHub logo"></img>
                    Check the project on GitHub ->
                </button>
            </div>
        </div>
    </div>
);

export default Login;