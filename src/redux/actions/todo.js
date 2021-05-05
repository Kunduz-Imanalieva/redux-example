  
import todo from "../reducers/todo";
import { ADD_TODO, REMOVE_TODO } from "./types";

export const add = (text) => ({
  type: ADD_TODO,
  text: text
});

export const remove = (id) => ({
  type: REMOVE_TODO,
  id: id
});

export const delay = (text) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(add(text));
      }, 3000);
    }
  } 

  export const removeDelay = (id) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(remove(id));
      }, 3000);
    }
}

export default todo