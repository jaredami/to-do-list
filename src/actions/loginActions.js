export function handleUsernameInputChange(event) {
  return {
    type: "USERNAME_INPUT_CHANGE",
    payload: event.target.value
  };
}
export function handlePasswordInputChange(event) {
  return {
    type: "PASSWORD_INPUT_CHANGE",
    payload: event.target.value
  };
}
export function handleLoginClick() {
  return {
    type: "LOGIN_SUBMIT"
  };
}
