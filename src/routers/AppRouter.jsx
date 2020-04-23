import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history'
import Dashboard from '../components/Pages/Dashboard/Dashboard';
import AddExpense from '../components/Pages/Dashboard/AddExpense/AddExpense';
import EditExpense from '../components/Pages/Dashboard/EditExpense/EditExpense';
import Help from '../components/Pages/Help/Help';
import NotFound from '../components/Pages/Error/NotFound';
import Login from '../components/Pages/Login/Login';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="container">
            <Switch>
                <Route path="/" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/create" component={AddExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;