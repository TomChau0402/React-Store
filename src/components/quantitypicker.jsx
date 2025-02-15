import { useState } from "react";
import "./quantitypicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        const value = quantity + 1;
        setQuantity (value);
        props.onChange(value);
        
    }
    function decrease() {
        const value = quantity - 1;
        if (quantity === 1) return;
        setQuantity (value);
        props.onChange(value);

    }
    return(
      <div className="qt-picker">
            <button className="btn btn-sm btn-outline-success"onClick={decrease}> - </button>
            <label> {quantity} </label>
            <button className="btn btn-sm btn-outline-success" onClick={increase}> + </button>
      </div>  
          );
}
export default QuantityPicker;