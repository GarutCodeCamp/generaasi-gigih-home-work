import { createStore } from "@reduxjs/toolkit";
import reducer from "../Reducer";

const store = createStore(reducer, {});

export default store;
