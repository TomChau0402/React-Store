import { useContext } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'
import DataContext from '../state/dataContext';


function Navbar() {

    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function getProdsInCart() {
        let sum = 0;

        for(let i=0; i<cart.length; i++) {
            let prod = cart[i];
            sum += prod.quantity;
        }

        return sum;
    }

    return(
        <div>
            <nav id="test">
                <div className="navbar-menu">
                    <span className="title">Fruits "R" Us!!!</span>
                    <Link to="/home">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/admin">Admin</Link>

                    
                    <Link className='end' to="/Cart">
                    <span className="badge rounded-pill text-bg-success">{getProdsInCart()} </span>
                    View Cart
                    </Link>
                    <a className="user-info" href="#">
                    <i class="i-user fa-solid fa-circle-user"></i> {user.name}</a>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;