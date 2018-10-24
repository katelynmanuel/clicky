import React from "react";
import "./ImageCard.css";

const ImageCard = ({handleClick, data: { id, name, image }}) => (
    <div className="col-md-3 main">
        <div onClick={() => handleClick(id)} className="card" id="remove">
            <div className="imgCards">
                <img alt={name} src={image} id="characterImage" />
            </div>
        </div>
    </div>
);

export default ImageCard;

