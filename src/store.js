import { createStore } from "redux";
import todoApp from "./reducers/todoAppReducer";

export default createStore(todoApp);
