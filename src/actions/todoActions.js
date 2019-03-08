export function handleInputChange(event) {
  return {
    type: "INPUT_CHANGE",
    todoInput: event.target.value
  };
}
export function handleAddClick() {
  return {
    type: "ADD_CLICK"
  };
}
export function handleCheckboxClick(event) {
  return {
    type: "CHECKBOX_CLICK",
    itemNumber: event.target.dataset.num
  };
}
export function handleDeleteClick(event) {
  return {
    type: "DELETE_CLICK",
    itemNumber: event.target.dataset.num
  };
}
