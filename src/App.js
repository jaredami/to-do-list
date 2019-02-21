import React, { Component } from "react";
import List from "./Components/List";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Empty Dishwasher", checked: false, id: 2 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Walk the dogs", checked: false, id: 4 }
      ],
      value: ""
    };
  }

  handleCheckboxClick = event => {
    let checkNum = event.target.dataset.num;
    let toDos = [...this.state.toDos];
    let item = { ...toDos[checkNum] };
    item.checked = !item.checked;
    toDos[checkNum] = item;
    this.setState({ toDos });
  };
  handleDeleteClick = event => {
    let delNum = event.target.dataset.num;
    let toDos = [...this.state.toDos];
    toDos.splice(delNum, 1);
    this.setState({ toDos });
  };
  handleInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleAddClick = event => {
    event.preventDefault();
    let listLength = this.state.toDos.length;
    this.setState({
      toDos: [
        ...this.state.toDos,
        { text: this.state.value, checked: false, id: listLength + 1 }
      ],
      value: ""
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 id="heading">To Do List</h1>
          <div id="list-container">
            <List
              toDos={this.state.toDos}
              handleCheckboxClick={this.handleCheckboxClick}
              handleDeleteClick={this.handleDeleteClick}
            />
          </div>
          <form>
            <input
              type="text"
              name="newItemInput"
              placeholder="Enter new item here"
              value={this.state.value}
              onChange={this.handleInputChange}
            />
            <button id="add-button" onClick={this.handleAddClick}>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
