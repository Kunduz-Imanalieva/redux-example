import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO, REMOVE_TODO } from "./redux/actions/types";


const { default: ColorDisplay } = require("./components/ColorDisplay");
const { default: ColorSimpleControls } = require("./components/ColorSimpleControls");
const { default: CounterAdvancedControls } = require("./components/CounterAdvancedControls");
const { default: CounterDisplay } = require("./components/CounterDisplay");
const { default: CounterSimpleControls } = require("./components/CounterSimpleControls");
const { default: SliderControls } = require("./components/SliderControls");
const { default: TextDisplay } = require("./components/TextDisplay");
const { default: TextSimpleControls } = require("./components/TextSimpleControls");

function App() {
  const items = useSelector(state => state);
  const dispatch = useDispatch();

  function onRemoveCallback(id) {
    dispatch({ type: REMOVE_TODO, id: id });
  }

  function onAddCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    dispatch({ type: ADD_TODO, text: data.get('new') });
  }

  const results = Object.keys(items).map(id => (
    <li key={id}>
      <span>{items[id]}</span>
      <button onClick={() => onRemoveCallback(id)}>Remove</button>
    </li>
  ));
  return (
    <div className="App">
     
     {/* <ColorDisplay/>
     <ColorSimpleControls/>
     <SliderControls/>
     <CounterDisplay/>
     <CounterSimpleControls/>
     <CounterAdvancedControls/>
     <TextDisplay/>
     <TextSimpleControls/> */}

      <div>
      <form onSubmit={onAddCallback}>
        <input type="text" name="new" required />
        <button>Add</button>
      </form>
      <ul>
        {results}
      </ul>
      </div>

    </div>
  );
}

export default App;
