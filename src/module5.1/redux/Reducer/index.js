import { combineReducers } from "redux";
import productReducuer from "./reducer";

const reducer = combineReducers({
  product: productReducuer
});

export default reducer;
