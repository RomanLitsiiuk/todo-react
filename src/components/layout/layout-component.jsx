import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../header/header-component';
import Dashboard from '../../features/dashboard/dashboard-component';
import Footer from '../footer/footer-component';
import History from '../../features/history/history-component';
import Profile from '../../features/profile/profile-component';

import './layout.scss';

const Layout = () => (
  <div className="layout">
    <div className="layout__content">
      <Header />
      <Switch>
        <Route
          exact
          path="/dashboard"
          component={Dashboard}
        />
        <Route
          exact
          path="/history"
          component={History}
        />
        <Route
          exact
          path="/profile"
          component={Profile}
        />
        <Redirect
          from="/"
          to="/dashboard"
        />
      </Switch>
    </div>
    <Footer className="layout__footer" />
  </div>
);

export default Layout;
