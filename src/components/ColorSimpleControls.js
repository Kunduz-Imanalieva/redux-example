import { useDispatch } from "react-redux";

const ColorSimpleControls = () => {
  const dispatch = useDispatch();

  function colorControl({target}) {
    dispatch({ type: "set_color", color: target.value });
  }


  return (
    <div>
      <h2>Simple Controls</h2>  
      <input onChange={colorControl} type="color"/>
    </div>
  );
};
export default ColorSimpleControls;
