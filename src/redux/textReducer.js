const initialState = {
    text: "Type something ...",
  }
  const textReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
      
        case "set_text":
        newState.text = action.text;
        return newState;
  
      default:
        break;
    }
    return state;
  }
  export default textReducer;