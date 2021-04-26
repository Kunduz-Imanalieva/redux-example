import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const number = useSelector(
    store => store.counter.number
    );

  return (
  <div>
      <h2>Number</h2>
        {number}
    </div>
  );
};
export default CounterDisplay;
