import React from "react";
import List from "./List";
import "../App.css";

const ToDos = props => {
  return (
    <div className="form-container">
      <h1 id="heading">To Do List</h1>
      <div id="list-container">
        <List
          toDos={props.toDos}
          handleCheckboxClick={props.handleCheckboxClick}
          handleDeleteClick={props.handleDeleteClick}
        />
      </div>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.handleAddClick(event);
        }}
      >
        <input
          type="text"
          name="newItemInput"
          placeholder="Enter new item here"
          value={props.toDoInput}
          onChange={props.handleInputChange}
        />
        <button id="add-button">Add</button>
      </form>
    </div>
  );
};

export default ToDos;
