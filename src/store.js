import { createStore, combineReducers } from "redux";
import darkModeReducer from "./reducers/darkModeReducer";
import loginReducer from "./reducers/loginReducer";
import todoReducer from "./reducers/todoReducer";

export default createStore(
  combineReducers({
    darkModeReducer,
    loginReducer,
    todoReducer
  })
);
