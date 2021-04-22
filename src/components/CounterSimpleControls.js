import { useDispatch } from "react-redux";

const CounterSimpleControls = () => {
  const dispatch = useDispatch();
  function incrementBy1Callback() {
    dispatch({ type: "increment_by_1" });
  }

  function decrementBy1Callback() {
    dispatch({ type: "decrement_by_1" });
  }
  return (
    <div>
      <button onClick={incrementBy1Callback}>+1</button>
      <button onClick={decrementBy1Callback}>-1</button>
    </div>
  );
};
export default CounterSimpleControls;
