import { startTransition } from "react";
import Product from "../components/product";
import "./catalog.css";
const catalog = [
    {
        "title": "orange",
        "image": "/images/orange.jpg",
        "price": 12.90,
        "category": "fruit",
        _id: "12346"

    },
    {   
     "title": "apple",
    "image": "/images/apples.jpg",
    "price": 13.90,
    "category": "fruit",
    _id: "762524"
    },
    {
        "title": "grapes",
        "image": "/images/grapes.jpg",
        "price": 1.91,
        "category": "fruit",
        _id: "564733"
    },
    {
        "title": "strawberries",
        "image": "/images/07000-fig1.jpg",
        "price": 2.93,
        "category": "fruit",
        _id: "976588"
    },
];

const category = ["fruits", "beverages", "dairy"];

function Catalog() {
    return(
        <div className="catalog page">
            <h1> Check Out our Fresh Catalog. </h1>
           <div className="filters">
              { category.map(category =><button className="btn btn-sm btn-outline-success">{category}</button>)}
           </div>

            { catalog.map(prod =><Product data={prod}/>)}
        </div>
    );
}
export default Catalog;