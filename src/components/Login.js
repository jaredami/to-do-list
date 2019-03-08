import React from "react";

const Login = props => {
  return (
    <div className="form-container">
      <form
        onSubmit={event => {
          event.preventDefault();
          props.handleLoginClick(event);
        }}
      >
        <label className="login-label" htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          className="login-input"
          type="text"
          placeholder="Enter Username"
          name="uname"
          onChange={props.handleUsernameInputChange}
          required
        />

        <label className="login-label" htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          className="login-input"
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
    </div>
  );
};

export default Login;
