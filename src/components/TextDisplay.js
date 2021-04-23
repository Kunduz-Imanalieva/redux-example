import { useSelector } from "react-redux";

const TextDisplay = () => {

const text = useSelector(store => store.text.text) ;
   
    return ( 
        <div>
            <h2>Text Display</h2>
            {text}
        </div>
     );
}
 
export default TextDisplay;