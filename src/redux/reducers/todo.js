import { ADD_TODO, REMOVE_TODO } from "../actions/types";

const initialState = {};

const addTodo = (state, action) => {
  const newState = { ...state };
  newState[
    (Math.random() * 9999999999).toFixed(0)
  ] = action.text;
  return newState;
};

const removeTodo = (state, action) => {
  const newState = { ...state };
  delete newState[action.id];
  return newState;
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case REMOVE_TODO:
      return removeTodo(state, action);
  
    default:
      return state;
  }
}

export default todo;