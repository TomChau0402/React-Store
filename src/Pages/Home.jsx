import "./Home.css";
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className='Home page'>
            <h1> BEST FRUITS in Orange County</h1>
            <div className="image-container">
                <img src='./images/home page fruit.jpg' alt=''></img>
            </div>
            <div className="info">
                <h3>FRUITS of OC</h3>
                <h4> Fresh and best foods!!</h4>

            </div>
            <div className="controls">
                <Link className="btn btn-success" to="/catalog"> Check Away</Link>

            </div>
        </div>
    );
}
export default Home