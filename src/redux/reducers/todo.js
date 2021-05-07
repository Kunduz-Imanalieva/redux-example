import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/types";

const initialState = {};

const addTodo = (state, action) => {
  const newState = { ...state };
  newState[(Math.random() * 9999999999).toFixed(0)] = {
    text: action.text,
    done: false,
  };
  return newState;
};

const removeTodo = (state, action) => {
  const newState = { ...state };
  delete newState[action.id];
  return newState;
};

const toggleTodo = (state, action) => {
  const newState = { ...state };
  newState[action.id].done = !newState[action.id].done;
  return newState;
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case REMOVE_TODO:
      return removeTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodo(state, action);

    default:
      return state;
  }
};

export default todo;
