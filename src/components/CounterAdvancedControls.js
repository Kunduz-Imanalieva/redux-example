import { useState } from "react";
import { useDispatch } from "react-redux";
const CounterAdvancedControls = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [result2, setResult2] = useState(0);
  
  const dispatch = useDispatch();
  function setCallback() {
    dispatch({ type: "set_number", number: +number });
  }

  function setResultCallback() {
    dispatch({ type: "set_result", number: +result + +result2});
  }
  return (
    <div>
      <h2>Advanced controls</h2>
      <div>
        <input type="number" onChange={({ target }) => setNumber(target.value)} />
        <button onClick={setCallback}>Set</button>
      </div>
<hr/>
      <div>
         <input type="number" onChange={({ target }) => setResult(target.value)}/>
         <input type="number" onChange={({ target }) => setResult2(target.value)}/>
         <button onClick={setResultCallback}>Set result</button>
      </div>
    </div>
  );
}
export default CounterAdvancedControls;