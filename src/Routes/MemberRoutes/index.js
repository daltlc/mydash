import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Dashboard';
import ExamplePage from './ExamplePage';

function MemberRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route path="/example">
        <ExamplePage/>
      </Route>
    </Switch>
  );
}

export default MemberRoutes;