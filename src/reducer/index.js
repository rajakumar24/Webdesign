import * as actionTypes from "../actionType/index";

const initialState = {
  todos: [],
  done: [],
  pagesInt: [],
  pageData:[{
    data: "",
status: "",
temp: ""
  }]
};
const reducer = (state = initialState, action) => {
  let todoState = state.todos;
  let doneState = state.done;
  let pageState = state.pagesInt;


  switch (action.type) {
    case actionTypes.ADD_LIST_ITEM:
      //console.log("Add list item", action.payload)
     if(action.payload.temp === "addList"){
        todoState.push(action.payload);
     }
     if(action.payload.temp === "doneList"){
      doneState.push(action.payload);
     }
     if(action.payload.temp === "addPageList"){
      pageState.push(action.payload);
     }
      return {
        ...state,
        todos: todoState,
        done: doneState,
        pagesInt: pageState
      };
    case actionTypes.UPDATE_LIST_ITEM:
      //console.log("updateListItem");
      console.log(action.payload);
      if(action.payload.status === "addList"){
      todoState[action.payload.id] = {
        ...todoState[action.payload.id],
        ...action.payload
      };
      }
      if(action.payload.status === "doneList"){
      doneState[action.payload.id] = {
        ...doneState[action.payload.id],
        ...action.payload
      };
    }
      //console.log("ITEM", action.payload);
      return {
        ...state,
        todos: todoState,
        done: doneState

      };
    case actionTypes.DELETE_LIST_ITEM:
      if(action.payload.status === "addList"){
      todoState.splice(action.payload.deleteId, 1);
      }
      if(action.payload.status === "doneList"){
      doneState.splice(action.payload.deleteId, 1);
      }
      //console.log("ITEM", action.payload);
      return {
        ...state,
        todos: todoState,
        done: doneState


      };
      case actionTypes.POST_PAGE:
      

      //console.log("ITEM", action.payload);
      return {
        ...state,
        pageData: action.payload,
        

      };
    default:
      return state;
  }
};

export default reducer;
