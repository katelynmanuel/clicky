import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron">
        <h1 className="display-4">Clicky Game</h1>
        <p className="lead">
            Click on an image to earn points, but careful not to click on it more than once or you lose!
        </p>
    </div>
);

export default Jumbotron;

