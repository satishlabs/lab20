import { Component } from "react";
import { Link } from "react-router-dom";

class CMSHeader1 extends Component{
 render(){
     return(
        <div>
            <h1>Welcome to CMS App !!</h1>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/courses" className="nav-link">Courses</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About US</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact US</Link>
                </li>
            </ul>
        </div>
     );
 }
}

export default CMSHeader1;