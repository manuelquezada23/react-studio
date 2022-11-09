// TODO: create a component that displays a single bakery item
import React from "react";
import "../App.css";

function BakeryItem(props) {

  return (
    <React.Fragment>
      <img className="BakeryImage" alt="bakery-item" src={props.image}></img>
      <p className="BakeryName">{props.name}</p>
      <p className="BakeryDescription">{props.description}</p>
    </React.Fragment>
  );
}

export default BakeryItem;
