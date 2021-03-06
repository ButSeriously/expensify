import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePageConnected from '../components/AddExpensePage';
import EditExpensePageConnected from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import LoginPageConnected from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRouteConnected from './PrivateRoute';
import PublicRouteConnected from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRouteConnected
          path="/"
          component={LoginPageConnected}
          exact
        />
        <PrivateRouteConnected
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact
        />
        <PrivateRouteConnected
          path="/create"
          component={AddExpensePageConnected}
        />
        <PrivateRouteConnected
          path="/edit/:id"
          component={EditExpensePageConnected}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
