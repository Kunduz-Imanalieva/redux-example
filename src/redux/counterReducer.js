const initialState = {
  number: 0,
}
const counterReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "set_number":
      newState.number = action.number;
      return newState;
      
      case "set_result":
      newState.number = action.number;
      return newState;
    case "increment_by_1":
      newState.number++;
      return newState;
    case "increment_by_10":
      newState.number += 10;
      return newState;
    default:
      break;
  }
  return state;
}
export default counterReducer;