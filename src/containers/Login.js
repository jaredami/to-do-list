import React from "react";

import FormContainer from "../components/FormContainer";
import LoginLabel from "../components/LoginLabel";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

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
        <Input
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={props.handleUsernameInputChange}
          required
        />

        <LoginLabel htmlFor="psw">
          <b>Password</b>
        </LoginLabel>
        <Input
          type="password"
          placeholder="Enter Password"
          name="psw"
          onChange={props.handlePasswordInputChange}
          required
        />
        <SubmitButton type="submit">Login</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default Login;
