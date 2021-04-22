
import { useDispatch } from "react-redux";

const SliderControls = () => {
    
  const dispatch = useDispatch();

  function colorSlider({target}) {
    dispatch({ type: "range_color", color: target.value });
  }


  return (
    <div>
      <h2>Slider Controls</h2>  
      <input onChange={colorSlider} type="range"/>
      <br/>
      <input onChange={colorSlider} type="range"/>
      <br/>
      <input onChange={colorSlider} type="range"/>
    </div>
  );
};
export default SliderControls;