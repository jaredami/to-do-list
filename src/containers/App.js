import React, { Component } from "react";
import Login from "../components/Login";
import ToDos from "../components/ToDos";
import { connect } from "react-redux";
import * as loginActions from "../actions/loginActions";
import * as todoActions from "../actions/todoActions";
import "../App.css";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {!this.props.loggedIn && (
          <Login
            handleUsernameInputChange={this.props.handleUsernameInputChange}
            handlePasswordInputChange={this.props.handlePasswordInputChange}
            handleLoginClick={this.props.handleLoginClick}
          />
        )}
        {this.props.loggedIn && (
          <ToDos
            toDos={this.props.toDos}
            toDoInput={this.props.toDoInput}
            handleInputChange={this.props.handleInputChange}
            handleAddClick={this.props.handleAddClick}
            handleCheckboxClick={this.props.handleCheckboxClick}
            handleDeleteClick={this.props.handleDeleteClick}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginReducer.loggedIn,
    usernameValue: state.loginReducer.usernameValue,
    passwordValue: state.loginReducer.passwordValue,
    toDos: state.todoReducer.toDos,
    toDoInput: state.todoReducer.toDoInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsernameInputChange: event => {
      dispatch(loginActions.handleUsernameInputChange(event));
    },
    handlePasswordInputChange: event => {
      dispatch(loginActions.handlePasswordInputChange(event));
    },
    handleLoginClick: () => {
      dispatch(loginActions.handleLoginClick());
    },
    handleInputChange: event => {
      dispatch(todoActions.handleInputChange(event));
    },
    handleAddClick: () => {
      dispatch(todoActions.handleAddClick());
    },
    handleCheckboxClick: event => {
      dispatch(todoActions.handleCheckboxClick(event));
    },
    handleDeleteClick: event => {
      dispatch(todoActions.handleDeleteClick(event));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
