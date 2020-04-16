import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import App from '../App';
import Dashboard from '../components/Pages/Dashboard/Dashboard';
import AddExpense from '../components/Pages/Dashboard/AddExpense/AddExpense';
import EditExpense from '../components/Pages/Dashboard/EditExpense/EditExpense';
import Help from '../components/Pages/Help/Help';
import NotFound from '../components/Pages/Error/NotFound';



const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header />
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create" component={AddExpense} />
                <Route path="/edit" component={EditExpense} exact={true} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;