const INPUT_CHANGE = "INPUT_CHANGE";
const CHECKBOX_CLICK = "CHECKBOX_CLICK";
const DELETE_CLICK = "DELETE_CLICK";
const ADD_CLICK = "ADD_CLICK";
const REORDER_UP_CLICK = "REORDER_UP_CLICK";
const REORDER_DOWN_CLICK = "REORDER_DOWN_CLICK";

const initialState = {
  toDos: [
    { text: "Take out the trash", checked: false, id: 1 },
    { text: "Empty dishwasher", checked: false, id: 2 },
    { text: "Meditate", checked: false, id: 3 },
    { text: "Walk the dogs", checked: false, id: 4 }
  ],
  toDoInput: ""
};

function moveElementInArray(array, value, positionChange) {
  var oldIndex = array.indexOf(value);
  if (oldIndex > -1) {
    var newIndex = oldIndex + positionChange;

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= array.length) {
      newIndex = array.length;
    }

    var arrayClone = array.slice();
    arrayClone.splice(oldIndex, 1);
    arrayClone.splice(newIndex, 0, value);

    return arrayClone;
  }
  return array;
}

const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        toDoInput: action.todoInput
      };
    case CHECKBOX_CLICK:
      let checkNum = action.itemNumber;
      let toDos = [...state.toDos];
      let item = { ...[...state.toDos][checkNum] };
      item.checked = !item.checked;
      toDos[checkNum] = item;
      return {
        ...state,
        toDos
      };
    case DELETE_CLICK:
      let delNum = action.itemNumber;
      let toDos2 = [...state.toDos];
      toDos2.splice(delNum, 1);
      return {
        ...state,
        toDos: toDos2
      };
    case ADD_CLICK:
      if (state.toDoInput !== "") {
        let idsArr = state.toDos.map(todo => todo.id);
        let maxId = Math.max(...idsArr);
        let newId = maxId + 1;
        return {
          ...state,
          toDos: [
            ...state.toDos,
            { text: state.toDoInput, checked: false, id: newId }
          ],
          toDoInput: ""
        };
      } else {
        return state;
      }
    case REORDER_UP_CLICK:
      if (action.itemNumber > 0) {
        let currToDos = [...state.toDos];
        let newToDos = moveElementInArray(
          currToDos,
          state.toDos[action.itemNumber],
          -1
        );
        return {
          ...state,
          toDos: newToDos
        };
      } else {
        return state;
      }
    case REORDER_DOWN_CLICK:
      if (action.itemNumber < state.toDos.length - 1) {
        let currToDos = [...state.toDos];
        let newToDos = moveElementInArray(
          currToDos,
          state.toDos[action.itemNumber],
          1
        );
        return {
          ...state,
          toDos: newToDos
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default todoReducer;
