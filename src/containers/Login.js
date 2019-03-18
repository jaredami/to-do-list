import React from "react";

import FormContainer from "../components/FormContainer";
import LoginLabel from "../components/LoginLabel";
import LoginInput from "../components/LoginInput";

const Login = props => {
  return (
    <FormContainer>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.handleLoginClick(event);
        }}
      >
        <LoginLabel htmlFor="uname">
          <b>Username</b>
        </LoginLabel>
        <LoginInput
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={props.handleUsernameInputChange}
          required
        />

        <LoginLabel htmlFor="psw">
          <b>Password</b>
        </LoginLabel>
        <LoginInput
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={props.handlePasswordInputChange}
          required
        />
        <button id="login-btn" type="submit">
          Login
        </button>
      </form>
    </FormContainer>
  );
};

export default Login;
