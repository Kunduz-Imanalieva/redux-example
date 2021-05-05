import { ADD_TODO, REMOVE_TODO } from "../actions/types";

const initialState = {};

const todo = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_TODO:
      const id = Math.random() * 9999999999;
      newState[id.toFixed(0)] = action.text;
      break;
    case REMOVE_TODO:
      delete newState[action.id];
      break;

    default:
      break;
  }

  return newState;
}

export default todo;