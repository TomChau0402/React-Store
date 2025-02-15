import { useContext } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'
import DataContext from '../state/dataContext';


function Navbar() {

    const user = useContext(DataContext).user;

    return(
        <div>
            <nav>
                <div className="navbar-menu">
                    <span className="title">Fruits "R" Us!!!</span>
                    <Link to="/home">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/admin">Admin</Link>

                    
                    <Link className='end' to="/Cart"> View Cart</Link>
                    <a className="user-info" href="#">
                    <i class="fa-regular fa-face-grin-tongue-squint"></i>Hello: {user.name}</a>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;