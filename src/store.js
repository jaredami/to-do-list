import { createStore, combineReducers } from "redux";
import loginReducer from "./reducers/loginReducer";
import todoReducer from "./reducers/todoReducer";

export default createStore(
  combineReducers({
    loginReducer,
    todoReducer
  })
);
