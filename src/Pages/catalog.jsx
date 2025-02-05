import Product from "../components/product";
import "./catalog.css";

function Catalog() {
    return(
        <div className="catalog page">
            <h1>
                Check Out our Fresh Catalog.
            </h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    )
}
export default Catalog