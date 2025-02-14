import { useState } from "react";
import "./About.css";


function About() {
    const [showEmail, setShowEmail] = useState(false);

    function showInfo() {
        setShowEmail (!showEmail);
    }
    return (
        <div className='About page'>
            <h1> Tom Chau </h1>
            
            {showEmail 
            ? <h5> Tung.t.t.chau@gmail.com</h5>
            : <p>Click the button to see Email</p> }
            
            <button className="btn btn-outline-dark" onClick={showInfo}>
                {
                    showEmail
                        ? "Hide email"
                        : "show my Email"
                }
            </button>
            <img src="./images/about-page-fruit" alt="" />
        </div>
    );
    
}
export default About;