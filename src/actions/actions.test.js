import * as darkModeActions from "./darkModeActions";
import * as todoActions from "./todoActions";

describe("dark mode todoActions", () => {
  it("should toggle dark mode", () => {
    const expectedAction = {
      type: "DARK_MODE_TOGGLE"
    };
    expect(darkModeActions.handleDarkModeClick()).toEqual(expectedAction);
  });
});

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
