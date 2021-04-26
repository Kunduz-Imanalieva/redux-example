const initialState = {
    color: "#000000",
  }
  const colorReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
      
        case "set_color":
        newState.color = action.color;
        return newState;
    
      default:
        break;
    }
    return state;
  }
  export default colorReducer;