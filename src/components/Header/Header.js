import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        <nav className="navbar">
            <ul>
                <li>Clicky!</li>
                <li className="message">
                    {props.children}
                </li>
                <li className="score"> 
                    Score: {props.score} | 
                    Best Score: {props.bestScore}
                </li>
            </ul>
        </nav>
    </div>
);

export default Header;
