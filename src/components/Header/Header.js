import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 class="navbar-brand">Clicky Game!</h1>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <span className="center">
                    {props.children}
                </span>
                </ul>
                <span className="navbar-text">
                    Score: {props.score}
                </span>
                <span className="navbar-text">
                    Best Score: {props.bestScore}
                </span>
            </div>
        </nav>
    </div>
);

export default Header;
