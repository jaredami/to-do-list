export function handleInputChange(event) {
  return {
    type: "INPUT_CHANGE",
    payload: event.target.value
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
    payload: event.target.dataset.num
  };
}
export function handleDeleteClick(event) {
  return {
    type: "DELETE_CLICK",
    payload: event.target.dataset.num
  };
}
