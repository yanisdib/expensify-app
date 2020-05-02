import React from 'react';
import { Login } from '../Login/Login';
import { connect } from 'react-redux';
import { startLogin } from '../../../actions/auth';


const Home = () => {
    return (
        <div id="home">
            <div className="row d-flex w-100 h-100 align-self-center">
                <div className="col-12">
                    <div className="row d-flex">
                        <div className="col-12">
                            <h1>Expense Manager</h1>
                            <h5>A simple expense manager</h5>
                        </div>
                    </div>
                    <Login startLogin={startLogin()} />
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Home);