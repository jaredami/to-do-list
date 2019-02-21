import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const checkedStyle = {
      textDecoration: "line-through"
    };
    return (
      <ul id="list">
        {this.props.toDos.map((item, index) => {
          return (
            <li key={index} name={"item" + item.id}>
              <input
                type="checkbox"
                data-num={index}
                onChange={this.props.handleCheckboxClick}
                checked={item.checked}
              />
              <p style={item.checked ? checkedStyle : null}>{item.text}</p>
              <button data-num={index} onClick={this.props.handleDeleteClick}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
