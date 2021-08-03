import React from "react";
import ReactDOM from "react-dom";
import Home from "./module4.3/Pages/Home/index";
import { Provider } from "react-redux";
import { store } from "./module4.3/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
