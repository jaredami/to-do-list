import React from "react";

const List = props => {
  const checkedStyle = {
    textDecoration: "line-through"
  };
  return (
    <ul id="list">
      {props.toDos.map((item, index) => {
        return (
          <li key={index} name={"item" + item.id}>
            <input
              type="checkbox"
              data-num={index}
              onChange={props.handleCheckboxClick}
              checked={item.checked}
            />
            <p style={item.checked ? checkedStyle : null}>{item.text}</p>
            <button data-num={index} onClick={props.handleDeleteClick}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
