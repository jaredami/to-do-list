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
    { text: "Walk the dogs", checked: false, id: 4 },
    { text: "Code", checked: false, id: 5 }
  ],
  toDoInput: "",
  lastChecked: null
};

// this function is used below for the REORDER_... actions
function moveElementInArray(array, value, positionChange) {
  // get the index of the item you wish to move
  var oldIndex = array.indexOf(value);

  // if the item was found...
  if (oldIndex > -1) {
    // store its current index plus the positionChange amount
    var newIndex = oldIndex + positionChange;

    // make sure the item's new index is within the length of the array
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= array.length) {
      newIndex = array.length;
    }

    // clone array to avoid mutating the original
    var arrayClone = array.slice();
    // remove the item to be moved
    arrayClone.splice(oldIndex, 1);
    // replace the item at its new position
    arrayClone.splice(newIndex, 0, value);

    return arrayClone;
  }
  return array;
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // store changes to the input field in state.toDoInput
    case INPUT_CHANGE:
      return {
        ...state,
        toDoInput: action.todoInput
      };
    case ADD_CLICK:
      // if the input field is not empty...
      if (state.toDoInput !== "") {
        // create a unique id:
        // make an array of the id's for each state.toDo item
        let idsArr = state.toDos.map(todo => todo.id);
        // get the highest number from the array
        let maxId = Math.max(...idsArr);
        // add 1 to that number to be used as the id for the new item
        let newId = maxId + 1;

        // update the state, inserting a new to-do item with the user's input as its text
        return {
          ...state,
          toDos: [
            ...state.toDos,
            { text: state.toDoInput, checked: false, id: newId }
          ],
          // reset state.toDoInput
          toDoInput: ""
        };
      } else {
        return state;
      }
    case CHECKBOX_CLICK:
      // make a copy of state.toDos
      let toDos = [...state.toDos];
      // make a copy of the toDo item to have its checked attribute toggled
      let checkNum = action.itemNumber;
      let item = { ...[...state.toDos][checkNum] };
      // toggle the state of the 'checked' property of that item
      item.checked = !item.checked;
      // replace the old item (in the copy of toDos) with the new item
      toDos[checkNum] = item;

      // portion below is for checking multiple boxes while holding shift key
      let inBetween = false;
      if (action.shiftOn && item.checked) {
        toDos.forEach(toDo => {
          if (toDo === item || toDo === state.lastChecked) {
            inBetween = !inBetween;
          }

          if (inBetween) {
            toDo.checked = true;
          }
        });
      }

      return {
        ...state,
        toDos,
        lastChecked: item
      };
    case DELETE_CLICK:
      // store the index of the item to be deleted
      let delNum = action.itemNumber;
      // make copy of state.toDos
      let toDos2 = [...state.toDos];
      // delete the item
      toDos2.splice(delNum, 1);

      // update state with the item removed
      return {
        ...state,
        toDos: toDos2
      };

    case REORDER_UP_CLICK:
      // if this isn't already the top item...
      if (action.itemNumber > 0) {
        // make a copy of state.toDos
        let currToDos = [...state.toDos];
        // move the item up by 1 using the function declared above
        let newToDos = moveElementInArray(
          currToDos,
          state.toDos[action.itemNumber],
          -1
        );

        // update the state with the item moved upward
        return {
          ...state,
          toDos: newToDos
        };
      } else {
        return state;
      }
    case REORDER_DOWN_CLICK:
      // if this isn't already the bottom item...
      if (action.itemNumber < state.toDos.length - 1) {
        // make a copy of state.toDos
        let currToDos = [...state.toDos];
        // move the item down by 1 using the function declared above
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
