import { useSelector } from "react-redux";

const ColorDisplay = () => {
  const color = useSelector(
    store => store.color.color
    );
    
  const style = {
    border: `10px solid ${color}`,
  };
  return (
    <div style={style}>{color}</div>
  );
}
export default ColorDisplay;