import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../pages/DashBoard";

const PrivateRoute = () => {
  const isLogin = useSelector((state) => {
    return state.product.token;
  });
  return (
    <Route path="/create-playlist" exact>
      {isLogin ? <Dashboard /> : <Redirect to="/" />}
    </Route>
  );
};

export default PrivateRoute;
