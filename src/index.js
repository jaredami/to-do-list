import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { Provider } from "react-redux";

// action type definitions
const INPUT_CHANGE = "INPUT_CHANGE";
const CHECKBOX_CLICK = "CHECKBOX_CLICK";
const DELETE_CLICK = "DELETE_CLICK";
const ADD_CLICK = "ADD_CLICK";

const initialState = {
  toDos: [
    { text: "Take out the trash", checked: false, id: 1 },
    { text: "Empty Dishwasher", checked: false, id: 2 },
    { text: "Meditate", checked: false, id: 3 },
    { text: "Walk the dogs", checked: false, id: 4 }
  ],
  value: ""
};

const todoApp = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.payload
      };
    case CHECKBOX_CLICK:
      let checkNum = action.payload;
      let toDos = [...state.toDos];
      let item = { ...[...state.toDos][checkNum] };
      item.checked = !item.checked;
      toDos[checkNum] = item;
      return {
        ...state,
        toDos
      };
    case DELETE_CLICK:
      let delNum = action.payload;
      let toDos2 = [...state.toDos];
      toDos2.splice(delNum, 1);
      return {
        ...state,
        toDos: toDos2
      };
    case ADD_CLICK:
      // action.event.preventDefault();
      let listLength = state.toDos.length;
      return {
        ...state,
        toDos: [
          ...state.toDos,
          { text: state.value, checked: false, id: listLength + 1 }
        ],
        value: ""
      };
    default:
      return state;
  }
};

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
