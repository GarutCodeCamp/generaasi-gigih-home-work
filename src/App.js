import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./module5.1/PrivateRoute";
import Login from "./module5.1/Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
