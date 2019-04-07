export function handleInputChange(value) {
  return {
    type: "INPUT_CHANGE",
    todoInput: value
  };
}
export function handleAddClick() {
  return {
    type: "ADD_CLICK"
  };
}
export function handleCheckboxClick(itemNumber, shiftOn) {
  return {
    type: "CHECKBOX_CLICK",
    itemNumber,
    shiftOn
  };
}
export function handleDeleteClick(itemNumber) {
  return {
    type: "DELETE_CLICK",
    itemNumber
  };
}
export function handleReorderUpClick(itemNumber) {
  return {
    type: "REORDER_UP_CLICK",
    itemNumber
  };
}
export function handleReorderDownClick(itemNumber) {
  return {
    type: "REORDER_DOWN_CLICK",
    itemNumber
  };
}
