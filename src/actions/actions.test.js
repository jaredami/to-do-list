import * as darkModeActions from "./darkModeActions";
import * as loginActions from "./loginActions";
import * as todoActions from "./todoActions";

/* tests for dark mode action creators */
describe("dark mode todoActions", () => {
  it("should create an action to toggle dark mode", () => {
    const expectedAction = {
      type: "DARK_MODE_TOGGLE"
    };
    expect(darkModeActions.handleDarkModeClick()).toEqual(expectedAction);
  });
});

/* tests for login action creators */
describe("login actions", () => {
  it("should create an aciton to handle input change", () => {
    let value = "test@gmail.com";
    const expectedAction = {
      type: "USERNAME_INPUT_CHANGE",
      usernameInput: value
    };
    expect(loginActions.handleUsernameInputChange(value)).toEqual(
      expectedAction
    );
  });

  it("should create an aciton to handle password change", () => {
    let value = "1234";
    const expectedAction = {
      type: "PASSWORD_INPUT_CHANGE",
      passwordInput: value
    };
    expect(loginActions.handlePasswordInputChange(value)).toEqual(
      expectedAction
    );
  });

  it("should create an aciton to handle Login button click", () => {
    const expectedAction = {
      type: "LOGIN_SUBMIT"
    };
    expect(loginActions.handleLoginClick()).toEqual(expectedAction);
  });
});

/* tests for to do list action creators */
describe("to do list actions", () => {
  it("should create an action to handle input change", () => {
    const todoInput = "Finish docs";
    const expectedAction = {
      type: "INPUT_CHANGE",
      todoInput
    };
    expect(todoActions.handleInputChange(todoInput)).toEqual(expectedAction);
  });

  it("should create an action to handle Add button click", () => {
    const expectedAction = {
      type: "ADD_CLICK"
    };
    expect(todoActions.handleAddClick()).toEqual(expectedAction);
  });

  it("should create an action to handle checkbox click", () => {
    let itemNumber = 3;
    let shiftOn = false;
    const expectedAction = {
      type: "CHECKBOX_CLICK",
      itemNumber,
      shiftOn
    };
    expect(todoActions.handleCheckboxClick(itemNumber, shiftOn)).toEqual(
      expectedAction
    );
  });

  it("should create an action to handle delete button click", () => {
    let itemNumber = 3;
    const expectedAction = {
      type: "DELETE_CLICK",
      itemNumber
    };
    expect(todoActions.handleDeleteClick(itemNumber)).toEqual(expectedAction);
  });

  it("should create an action to handle re-order up button click", () => {
    let itemNumber = 3;
    const expectedAction = {
      type: "REORDER_UP_CLICK",
      itemNumber
    };
    expect(todoActions.handleReorderUpClick(itemNumber)).toEqual(
      expectedAction
    );
  });

  it("should create an action to handle re-order up button click", () => {
    let itemNumber = 3;
    const expectedAction = {
      type: "REORDER_DOWN_CLICK",
      itemNumber
    };
    expect(todoActions.handleReorderDownClick(itemNumber)).toEqual(
      expectedAction
    );
  });
});
