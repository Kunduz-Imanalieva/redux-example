


const { default: ColorDisplay } = require("./components/ColorDisplay");
const { default: ColorSimpleControls } = require("./components/ColorSimpleControls");
const { default: CounterAdvancedControls } = require("./components/CounterAdvancedControls");
const { default: CounterDisplay } = require("./components/CounterDisplay");
const { default: CounterSimpleControls } = require("./components/CounterSimpleControls");
const { default: SliderControls } = require("./components/SliderControls");
const { default: TextDisplay } = require("./components/TextDisplay");
const { default: TextSimpleControls } = require("./components/TextSimpleControls");

function App() {
  return (
    <div className="App">
     
     <ColorDisplay/>
     <ColorSimpleControls/>
     <SliderControls/>
     <CounterDisplay/>
     <CounterSimpleControls/>
     <CounterAdvancedControls/>
     <TextDisplay/>
     <TextSimpleControls/>
     
     
     
    </div>
  );
}

export default App;
