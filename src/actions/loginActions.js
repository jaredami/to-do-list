export function handleUsernameInputChange(value) {
  return {
    type: "USERNAME_INPUT_CHANGE",
    usernameInput: value
  };
}
export function handlePasswordInputChange(value) {
  return {
    type: "PASSWORD_INPUT_CHANGE",
    passwordInput: value
  };
}
export function handleLoginClick() {
  return {
    type: "LOGIN_SUBMIT"
  };
}
