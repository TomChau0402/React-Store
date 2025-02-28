import { useContext} from 'react';
import './Cart.css';
import { Link } from 'react-router-dom'
import DataContext from '../state/dataContext';


function Cart() {

   

    let cart = useContext(DataContext).cart;

    function calculateNumProds() {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            sum += prod.quantity;
        }

        return sum;
    }

    function getTotal() {
        let total = 0;

        for(let i=0; i<cart.length; i++){
            const prod = cart[i];
            total += (prod.quantity * prod.price);
        }

      return total.toFixed(2);
        
    }
    return (
        <div className="Cart page">
            <h1>Ready to Complete order</h1>
            <h3> Are you ready to check out?! </h3>
            <h4>There are {calculateNumProds()} product in cart</h4>

            <div className="parent">
                <div className="prods">
                    {cart.map(prod => <div className="prod-in-cart">
                        <img src={prod.image} alt="" />
                        <h5>{prod.title}</h5>

                        <label>${prod.price.toFixed(2)}</label>
                        <label>{prod.quantity}</label>
                        <label>${prod.price * prod.quantity}</label>
                    </div>
                    )}

                </div>

            <div className="side-menu">
                <h3> Order Total</h3>
                <h5>${getTotal()}</h5>

                <button className='btn btn-primary'>Pay now</button>

            </div>
            
            </div>
        </div>
    );
}
export default Cart;