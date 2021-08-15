/* eslint-disable import/extensions */
import React, { Suspense } from 'react';

import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import { useAppSelector } from '../Redux/store';

import Login from '../Pages/login';
import PrivateRoute from './Route';
import { Routes } from './Router';

const ListeningRoute = () => {
  const isLogin = useAppSelector((state) => state.auth.isAuthenticated);
  return (
    <Suspense fallback={<h1>Loading .........</h1>}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => (isLogin ? <Redirect to="/create-playlist" /> : <Login />)} />
          {Routes.map((route) => (
            <PrivateRoute key={route.path} path={route.path} component={route.component} />
          ))}
        </Switch>
      </Router>
    </Suspense>
  )
}

export default ListeningRoute;
