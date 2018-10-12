import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="col-md-3">
        <div onClick={() => props.click(props.id)} className="card" id="remove">
            <div className="img-container">
                <img alt={props.name} src={props.image} id="characterImage" />
            </div>
        </div>
    </div>
);

export default ImageCard;
