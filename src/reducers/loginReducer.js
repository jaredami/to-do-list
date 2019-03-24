const USERNAME_INPUT_CHANGE = "USERNAME_INPUT_CHANGE";
const PASSWORD_INPUT_CHANGE = "PASSWORD_INPUT_CHANGE";
const LOGIN_SUBMIT = "LOGIN_SUBMIT";

const initialState = {
  loggedIn: true,
  usernameValue: "",
  passwordValue: ""
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // update state of usernameValue and passwordValue as input changes
    case USERNAME_INPUT_CHANGE:
      return {
        ...state,
        usernameValue: action.usernameInput
      };
    case PASSWORD_INPUT_CHANGE:
      return {
        ...state,
        passwordValue: action.passwordInput
      };
    // when login button is clicked, if username and password are correct, changed loggedIn state to true
    case LOGIN_SUBMIT:
      if (
        state.usernameValue === "yaredami@gmail.com" &&
        state.passwordValue === "pw"
      ) {
        return {
          ...state,
          loggedIn: true
        };
      } else {
        return {
          ...state,
          loggedIn: false
        };
      }
    default:
      return state;
  }
};

export default todoReducer;
