import { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom'
import DataContext from '../state/dataContext';


function Cart() {

    let cart = useContext(DataContext).cart;

    function calculateNumProds() {
        let sum = 0;
        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            sum += prod.quantity;
        }
        
        return sum;
    }
    return (
        <div className="Cart page">
            <h1>Ready to Complete order</h1>
            <h3> Are you ready to check out?! </h3>
            <h4>There are {calculateNumProds()} product in cart</h4>

        </div>
    );
}
export default Cart;