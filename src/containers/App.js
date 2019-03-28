import React, { Component } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";

import Login from "../components/Login";
import ToDos from "../components/ToDos";

import { connect } from "react-redux";
import * as darkModeActions from "../actions/darkModeActions";
import * as loginActions from "../actions/loginActions";
import * as todoActions from "../actions/todoActions";

import { scaleUp } from "../styles/KeyFrames";
import { slideInElliptic } from "../styles/KeyFrames";
import { bounceIn } from "../styles/KeyFrames";

const StyledApp = styled.div`
  height: 100vh;
  padding: 50px;
  color: #f5f5f5;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.main};
  transition: all 600ms ease;
  div:first-child {
    text-align: center;
    margin: 40px auto;
  }
`;

const NightModeButton = styled.button`
  display: inline;
  padding: 10px 10px 0px;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  font-size: 50px;
  color: white;
  background-color: ${props => props.theme.secondary};
  /* animation: ${scaleUp} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both; */
  /* animation: ${slideInElliptic} 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; */
  animation: ${bounceIn} 1.1s both;
  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
  &:focus {
    outline: none;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <StyledApp>
          <div>
            <NightModeButton onClick={this.props.handleDarkModeClick}>
              <span
                className="iconify"
                data-icon="mdi-theme-light-dark"
                data-inline="false"
              />
            </NightModeButton>
          </div>

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
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.darkModeReducer.theme,
    loggedIn: state.loginReducer.loggedIn,
    usernameValue: state.loginReducer.usernameValue,
    passwordValue: state.loginReducer.passwordValue,
    toDos: state.todoReducer.toDos,
    toDoInput: state.todoReducer.toDoInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleDarkModeClick: () => {
      dispatch(darkModeActions.handleDarkModeClick());
    },
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
