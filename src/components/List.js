import React from "react";

import StyledList from "../styles/StyledList";

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
              <div>
                <label>
                  <input
                    type="checkbox"
                    data-num={index}
                    onChange={props.handleCheckboxClick}
                    checked={item.checked}
                  />
                  <span />
                </label>

                <p style={item.checked ? checkedStyle : null}>{item.text}</p>
                <button data-num={index} onClick={props.handleDeleteClick}>
                  X
                </button>
              </div>

              <div>
                <button data-num={index} onClick={props.handleReorderUpClick}>
                  &uarr;
                </button>
                <button data-num={index} onClick={props.handleReorderDownClick}>
                  &darr;
                </button>
              </div>
            </li>
          );
        })}
    </StyledList>
  );
};

export default List;
