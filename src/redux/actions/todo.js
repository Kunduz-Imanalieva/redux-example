  
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

export default todo