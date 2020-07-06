import * as actionTypes from "../actionType/index";

const initialState = {
  todos: []
};
const reducer = (state = initialState, action) => {
  let todoState = state.todos;
  switch (action.type) {
    case actionTypes.ADD_LIST_ITEM:
      console.log("Add list item")
      todoState.push(action.payload);
      return {
        ...state,
        todos: todoState
      };
    case actionTypes.UPDATE_LIST_ITEM:
      console.log("updateListItem");

      todoState[action.payload.id] = {
        ...todoState[action.payload.id],
        ...action.payload
      };
      console.log("ITEM", action.payload);
      return {
        ...state,
        todos: todoState
      };
    case actionTypes.DELETE_LIST_ITEM:
      todoState.splice(action.payload, 1);
      console.log("ITEM", action.payload);
      return {
        ...state,
        todos: todoState
      };
    default:
      return state;
  }
};

export default reducer;
