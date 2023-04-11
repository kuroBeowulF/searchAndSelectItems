import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { productReducer } from "./productReducer";
import { selectedReducer } from "./selectedReducer";
export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  selected: selectedReducer,
});
