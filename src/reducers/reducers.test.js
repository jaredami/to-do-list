import darkModeReducer from "./darkModeReducer";
import loginReducer from "./loginReducer";

/* tests for dark mode toggler reducer */
describe("dark mode reducer", () => {
  it("should return the initial state", () => {
    expect(darkModeReducer(undefined, {})).toEqual({
      theme: {
        main: "#fbd6d5",
        secondary: "#d35e7b",
        secondaryDark: "#8e4154",
        accent: "#ffb998"
      }
    });
  });

  it("should toggle to dark mode", () => {
    expect(
      darkModeReducer(
        {
          theme: {
            main: "#fbd6d5",
            secondary: "#d35e7b",
            secondaryDark: "#8e4154",
            accent: "#ffb998"
          }
        },
        {
          type: "DARK_MODE_TOGGLE"
        }
      )
    ).toEqual({
      theme: {
        main: "#0f1014",
        secondary: "#474c60",
        secondaryDark: "#1D1F27",
        accent: "#898397"
      }
    });
  });

  it("should toggle to light mode", () => {
    expect(
      darkModeReducer(
        {
          theme: {
            main: "#0f1014",
            secondary: "#474c60",
            secondaryDark: "#1D1F27",
            accent: "#898397"
          }
        },
        {
          type: "DARK_MODE_TOGGLE"
        }
      )
    ).toEqual({
      theme: {
        main: "#fbd6d5",
        secondary: "#d35e7b",
        secondaryDark: "#8e4154",
        accent: "#ffb998"
      }
    });
  });
});

/* tests for login reducer */
describe("login reducer", () => {
  it("should return the initial state", () => {
    expect(loginReducer(undefined, {})).toEqual({
      loggedIn: true,
      usernameValue: "",
      passwordValue: ""
    });
  });

  it("should handle USERNAME_INPUT_CHANGE", () => {
    expect(
      loginReducer(undefined, {
        type: "USERNAME_INPUT_CHANGE",
        usernameInput: "test"
      })
    ).toEqual({
      loggedIn: true,
      usernameValue: "test",
      passwordValue: ""
    });

    expect(
      loginReducer(
        {
          loggedIn: true,
          usernameValue: "before",
          passwordValue: ""
        },
        {
          type: "USERNAME_INPUT_CHANGE",
          usernameInput: "after"
        }
      )
    ).toEqual({
      loggedIn: true,
      usernameValue: "after",
      passwordValue: ""
    });
  });

  it("should handle PASSWORD_INPUT_CHANGE", () => {
    expect(
      loginReducer(undefined, {
        type: "PASSWORD_INPUT_CHANGE",
        passwordInput: "test"
      })
    ).toEqual({
      loggedIn: true,
      usernameValue: "",
      passwordValue: "test"
    });

    expect(
      loginReducer(
        {
          loggedIn: true,
          usernameValue: "",
          passwordValue: "before"
        },
        {
          type: "PASSWORD_INPUT_CHANGE",
          passwordInput: "after"
        }
      )
    ).toEqual({
      loggedIn: true,
      usernameValue: "",
      passwordValue: "after"
    });
  });

  it("should handle LOGIN_SUBMIT", () => {
    expect(
      loginReducer(undefined, {
        type: "LOGIN_SUBMIT"
      })
    ).toEqual({
      loggedIn: false,
      usernameValue: "",
      passwordValue: ""
    });

    expect(
      loginReducer(
        {
          loggedIn: false,
          usernameValue: "yaredami@gmail.com",
          passwordValue: "pw"
        },
        {
          type: "LOGIN_SUBMIT"
        }
      )
    ).toEqual({
      loggedIn: true,
      usernameValue: "yaredami@gmail.com",
      passwordValue: "pw"
    });
  });
});
