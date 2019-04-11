import darkModeReducer from "./darkModeReducer";
import loginReducer from "./loginReducer";
import todoReducer from "./todoReducer";

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

/* tests for to do list reducer */
describe("to do list reducer", () => {
  it("should return the initial state", () => {
    expect(todoReducer(undefined, {})).toEqual({
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Empty dishwasher", checked: false, id: 2 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Walk the dogs", checked: false, id: 4 },
        { text: "Code", checked: false, id: 5 }
      ],
      toDoInput: "",
      lastChecked: null
    });
  });

  it("should handle INPUT_CHANGE", () => {
    expect(
      todoReducer(undefined, {
        type: "INPUT_CHANGE",
        todoInput: "test input"
      })
    ).toEqual({
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Empty dishwasher", checked: false, id: 2 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Walk the dogs", checked: false, id: 4 },
        { text: "Code", checked: false, id: 5 }
      ],
      toDoInput: "test input",
      lastChecked: null
    });

    expect(
      todoReducer(
        {
          toDos: [
            { text: "Take out the trash", checked: false, id: 1 },
            { text: "Empty dishwasher", checked: false, id: 2 },
            { text: "Meditate", checked: false, id: 3 },
            { text: "Walk the dogs", checked: false, id: 4 },
            { text: "Code", checked: false, id: 5 }
          ],
          toDoInput: "test input before",
          lastChecked: null
        },
        {
          type: "INPUT_CHANGE",
          todoInput: "test input after"
        }
      )
    ).toEqual({
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Empty dishwasher", checked: false, id: 2 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Walk the dogs", checked: false, id: 4 },
        { text: "Code", checked: false, id: 5 }
      ],
      toDoInput: "test input after",
      lastChecked: null
    });
  });

  it("should handle ADD_CLICK", () => {
    expect(
      todoReducer(
        {
          toDos: [
            { text: "Take out the trash", checked: false, id: 1 },
            { text: "Empty dishwasher", checked: false, id: 2 },
            { text: "Meditate", checked: false, id: 3 },
            { text: "Walk the dogs", checked: false, id: 4 },
            { text: "Code", checked: false, id: 5 }
          ],
          toDoInput: "",
          lastChecked: null
        },
        {
          type: "ADD_CLICK"
        }
      )
    ).toEqual({
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Empty dishwasher", checked: false, id: 2 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Walk the dogs", checked: false, id: 4 },
        { text: "Code", checked: false, id: 5 }
      ],
      toDoInput: "",
      lastChecked: null
    });

    expect(
      todoReducer(
        {
          toDos: [
            { text: "Take out the trash", checked: false, id: 1 },
            { text: "Empty dishwasher", checked: false, id: 2 },
            { text: "Meditate", checked: false, id: 3 },
            { text: "Walk the dogs", checked: false, id: 4 },
            { text: "Code", checked: false, id: 5 }
          ],
          toDoInput: "test to do input",
          lastChecked: null
        },
        {
          type: "ADD_CLICK"
        }
      )
    ).toEqual({
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Empty dishwasher", checked: false, id: 2 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Walk the dogs", checked: false, id: 4 },
        { text: "Code", checked: false, id: 5 },
        { text: "test to do input", checked: false, id: 6 }
      ],
      toDoInput: "",
      lastChecked: null
    });
  });

  it("should handle CHECKBOX_CLICK", () => {
    expect(
      todoReducer(
        {
          toDos: [
            { text: "Take out the trash", checked: false, id: 1 },
            { text: "Empty dishwasher", checked: false, id: 2 },
            { text: "Meditate", checked: false, id: 3 },
            { text: "Walk the dogs", checked: false, id: 4 },
            { text: "Code", checked: false, id: 5 }
          ],
          toDoInput: "",
          lastChecked: null
        },
        {
          type: "CHECKBOX_CLICK",
          itemNumber: 3,
          shiftOn: false
        }
      )
    ).toEqual({
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Empty dishwasher", checked: false, id: 2 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Walk the dogs", checked: true, id: 4 },
        { text: "Code", checked: false, id: 5 }
      ],
      toDoInput: "",
      lastChecked: { text: "Walk the dogs", checked: true, id: 4 }
    });
  });

  it("should handle DELETE_CLICK", () => {
    expect(
      todoReducer(
        {
          toDos: [
            { text: "Take out the trash", checked: false, id: 1 },
            { text: "Empty dishwasher", checked: false, id: 2 },
            { text: "Meditate", checked: false, id: 3 },
            { text: "Walk the dogs", checked: false, id: 4 },
            { text: "Code", checked: false, id: 5 }
          ],
          toDoInput: "",
          lastChecked: null
        },
        {
          type: "DELETE_CLICK",
          itemNumber: 1
        }
      )
    ).toEqual({
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Walk the dogs", checked: false, id: 4 },
        { text: "Code", checked: false, id: 5 }
      ],
      toDoInput: "",
      lastChecked: null
    });
  });

  it("should handle REORDER_UP_CLICK", () => {
    expect(
      todoReducer(
        {
          toDos: [
            { text: "Take out the trash", checked: false, id: 1 },
            { text: "Empty dishwasher", checked: false, id: 2 },
            { text: "Meditate", checked: false, id: 3 },
            { text: "Walk the dogs", checked: false, id: 4 },
            { text: "Code", checked: false, id: 5 }
          ],
          toDoInput: "",
          lastChecked: null
        },
        {
          type: "REORDER_UP_CLICK",
          itemNumber: 3
        }
      )
    ).toEqual({
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Empty dishwasher", checked: false, id: 2 },
        { text: "Walk the dogs", checked: false, id: 4 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Code", checked: false, id: 5 }
      ],
      toDoInput: "",
      lastChecked: null
    });
  });

  it("should handle REORDER_DOWN_CLICK", () => {
    expect(
      todoReducer(
        {
          toDos: [
            { text: "Take out the trash", checked: false, id: 1 },
            { text: "Empty dishwasher", checked: false, id: 2 },
            { text: "Meditate", checked: false, id: 3 },
            { text: "Walk the dogs", checked: false, id: 4 },
            { text: "Code", checked: false, id: 5 }
          ],
          toDoInput: "",
          lastChecked: null
        },
        {
          type: "REORDER_DOWN_CLICK",
          itemNumber: 3
        }
      )
    ).toEqual({
      toDos: [
        { text: "Take out the trash", checked: false, id: 1 },
        { text: "Empty dishwasher", checked: false, id: 2 },
        { text: "Meditate", checked: false, id: 3 },
        { text: "Code", checked: false, id: 5 },
        { text: "Walk the dogs", checked: false, id: 4 }
      ],
      toDoInput: "",
      lastChecked: null
    });
  });
});
