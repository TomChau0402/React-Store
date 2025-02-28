
import { useContext, useState } from 'react';
import "./product.css";
import QuantityPicker from "./quantitypicker";
import DataContext from '../state/dataContext';

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const addProductToCart = useContext(DataContext).addProductToCart;


  function add() {
    let prodForCart = { ...props.data, quantity: quantity };
    addProductToCart(prodForCart);
  }

  function handleQuantity(qty) {
    console.log("quantity changed!", qty);
    setQuantity(qty);
  }

  return (
    <div className="product">
      <img src={props.data.image} alt=""></img>

      <h4>{props.data.title}</h4>
      <div className="prices">

        <label className='total'> ${props.data.price * quantity}</label>
        <label className='price'> ${props.data.price}</label>
      </div>
      <div className="controls">
        <QuantityPicker onChange={handleQuantity}></QuantityPicker>
        <button onClick={add} className="btn btn-sm btn-info"> <i class="fa-solid fa-cart-shopping"></i>Add</button>
      </div>
    </div>


  );
}
export default Product;