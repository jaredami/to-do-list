import React, { Component } from "react";
import styled from "styled-components";

import Login from "./containers/Login";
import ToDos from "./containers/ToDos";

import { connect } from "react-redux";
import * as loginActions from "./actions/loginActions";
import * as todoActions from "./actions/todoActions";

import "./App.css";

const StyledApp = styled.div`
  height: 100vh;
  padding: 100px;
  color: #f5f5f5;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #fbd6d5;
`;

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <StyledApp>
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
            handleReorderUpClick={this.props.handleReorderUpClick}
            handleReorderDownClick={this.props.handleReorderDownClick}
          />
        )}
      </StyledApp>
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
    },
    handleReorderUpClick: event => {
      dispatch(todoActions.handleReorderUpClick(event));
    },
    handleReorderDownClick: event => {
      dispatch(todoActions.handleReorderDownClick(event));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
