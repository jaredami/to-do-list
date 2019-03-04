import React from "react";

const Login = props => {
  return (
    <div className="form-container">
      <form>
        <label className="login-label" for="uname">
          <b>Username</b>
        </label>
        <input
          className="login-input"
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        />

        <label className="login-label" for="psw">
          <b>Password</b>
        </label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter Password"
          name="psw"
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
