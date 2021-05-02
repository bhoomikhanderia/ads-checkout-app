import { combineReducers } from "redux";
import customerReducer from "./reducers/customerReducers";
import productsReducer from "./reducers/productsReducers";
import cartReducer from "./reducers/cartReducers";

export default combineReducers({
  customer: customerReducer,
  products: productsReducer,
  cart: cartReducer,
});
