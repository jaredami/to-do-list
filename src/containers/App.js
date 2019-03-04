import React, { Component } from "react";
import Login from "../components/Login";
import ToDos from "../components/ToDos";
import { connect } from "react-redux";
import * as actions from "../actions/todoAppActions";
import "../App.css";

class App extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.handleAddClick(event);
  };
  render() {
    return (
      <div className="App">
        <Login />
        <ToDos {...this.props} />
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
      dispatch(actions.handleInputChange(event));
    },
    handleAddClick: () => {
      dispatch(actions.handleAddClick());
    },
    handleCheckboxClick: event => {
      dispatch(actions.handleCheckboxClick(event));
    },
    handleDeleteClick: event => {
      dispatch(actions.handleDeleteClick(event));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
