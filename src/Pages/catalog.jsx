import { useState, useEffect } from "react";
import Product from "../components/product";
import "./catalog.css";
import DataService from "../services/dataService";

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
    const [allProducts, setAllProducts] = useState([]);

    async function loadProducts(){
        const data = await DataService.getProducts();
        setAllProducts(data);        
    }

    useEffect(function () {
        loadProducts();
    }, []);

    return (
        <div className="catalog page">
            <h1> Check Out our Fresh Catalog. </h1>
            <div className="filters">
                {category.map(category => <button className="btn btn-sm btn-outline-success">{category}</button>)}
            </div>

            {allProducts.map(prod => <Product data={prod} />)}
        </div>
    );
}
export default Catalog;