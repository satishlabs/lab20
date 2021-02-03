import { Component } from "react";

const CMSHeader  = (props) =>{
    return(
        <div>
            <h3>Welcome to CMS</h3>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <h4><a className="nav-link" href="/">Home</a></h4>
                </li>
                <li className="nav-item">
                    <h4><a className="nav-link" href="/courses">Courses</a></h4>
                </li>
                <li className="nav-item">
                    <h4><a className="nav-link" href="/about">About US</a></h4>
                </li>
                <li className="nav-item">
                    <h4><a className="nav-link" href="/contact">Contact US</a></h4>
                </li>
            </ul>
        </div>
    );
}

export default CMSHeader;