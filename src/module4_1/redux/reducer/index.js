import { combineReducers} from "redux";
import { product_reducer } from "./product_reducer";

const reducer = combineReducers({
    product:product_reducer
})


export default reducer