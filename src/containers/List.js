import React from "react";

import StyledList from "../components/StyledList";

const List = props => {
  const checkedStyle = {
    textDecoration: "line-through"
  };
  return (
    <StyledList>
      {props.toDos &&
        props.toDos.map((item, index) => {
          return (
            <li key={item.id} name={"item" + index}>
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
    </StyledList>
  );
};

export default List;
