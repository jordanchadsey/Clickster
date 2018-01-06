import React from "react";
import "./Images.css";

const Images = props => (

  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick ={() => props.selectedCard(props.id)} selected= {props.selected} />
    </div>
    </div>
);

export default Images;
