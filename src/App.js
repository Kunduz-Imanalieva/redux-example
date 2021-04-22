


const { default: ColorDisplay } = require("./components/ColorDisplay");
const { default: ColorSimpleControls } = require("./components/ColorSimpleControls");
const { default: CounterAdvancedControls } = require("./components/CounterAdvancedControls");
const { default: CounterDisplay } = require("./components/CounterDisplay");
const { default: CounterSimpleControls } = require("./components/CounterSimpleControls");
const { default: SliderControls } = require("./components/SliderControls");

function App() {
  return (
    <div className="App">
     
     <ColorDisplay/>
     <ColorSimpleControls/>
     <SliderControls/>
     <CounterDisplay/>
     <CounterSimpleControls/>
     <CounterAdvancedControls/>
     
     
     
    </div>
  );
}

export default App;
