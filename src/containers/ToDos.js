import React from "react";

import List from "./List";
import FormContainer from "../components/FormContainer";
import SubmitButton from "../components/SubmitButton";
import Header from "../components/Header";
import Input from "../components/Input";

const ToDos = props => {
  return (
    <FormContainer>
      <Header>To Do List</Header>
      <div>
        <List
          toDos={props.toDos}
          handleCheckboxClick={props.handleCheckboxClick}
          handleDeleteClick={props.handleDeleteClick}
          handleReorderUpClick={props.handleReorderUpClick}
          handleReorderDownClick={props.handleReorderDownClick}
        />
      </div>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.handleAddClick(event);
        }}
      >
        <Input
          type="text"
          name="newItemInput"
          placeholder="Enter new item here"
          value={props.toDoInput}
          onChange={props.handleInputChange}
        />
        <SubmitButton type="submit">Add</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default ToDos;
