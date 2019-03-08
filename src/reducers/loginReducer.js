const USERNAME_INPUT_CHANGE = "USERNAME_INPUT_CHANGE";
const PASSWORD_INPUT_CHANGE = "PASSWORD_INPUT_CHANGE";
const LOGIN_SUBMIT = "LOGIN_SUBMIT";

const initialState = {
  loggedIn: false,
  usernameValue: "",
  passwordValue: ""
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
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
