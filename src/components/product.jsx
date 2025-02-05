import "./product.css";
import QuantityPicker from "./quantitypicker";

function Product() {
    return(
      <div className="product">
        <img src="https://picsum.photos/280/200" alt=""></img>
        <h1>Carrots are the best</h1>
        <QuantityPicker></QuantityPicker>
      </div>
    

    )
}
export default Product