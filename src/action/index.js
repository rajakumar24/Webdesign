import * as actionTypes from "../actionType/index";

export const addListItem = payload => {
  return {
    type: actionTypes.ADD_LIST_ITEM,
    payload
  };
};
export const updateListItem = payload => {
  return {
    type: actionTypes.UPDATE_LIST_ITEM,
    payload
  };
};
export const deleteListItem = payload => {
  return {
    type: actionTypes.DELETE_LIST_ITEM,
    payload
  };
};

