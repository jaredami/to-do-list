import React, { Component } from "react";
import List from "./Components/List";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.handleAddClick(event);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 id="heading">To Do List</h1>
          <div id="list-container">
            <List toDos={this.props.toDos} />
          </div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="newItemInput"
              placeholder="Enter new item here"
              value={this.props.value}
              onChange={this.props.handleInputChange}
            />
            <button id="add-button">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDos: state.toDos,
    value: state.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: event => {
      dispatch({
        type: "INPUT_CHANGE",
        payload: event.target.value
      });
    },
    handleAddClick: () => {
      dispatch({
        type: "ADD_CLICK"
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
