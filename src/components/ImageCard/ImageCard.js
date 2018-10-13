import React from "react";
import "./ImageCard.css";

const ImageCard = ({handleClick, data: { id, name, image }}) => (
    <div className="col-md-3">
        <div onClick={() => handleClick(id)} className="card" id="remove">
            <div className="img">
                <img alt={name} src={image} id="characterImage" />
            </div>
        </div>
    </div>
);

export default ImageCard;

