import React from "react";
import "./product.css";
import giveRaitingSmile from "../functions/giveRaitingSmile";

export default function Product(props) {
  const { name, abv, image_url } = props.product;

  return (
    <div className="product-container">
      <img
        className="produc-img"
        src={image_url}
        alt={name}
        // style={{ height: "150px" }}
      />
      <h2 className="product-heading">{name}</h2>
      <p className="product">
        ABV: {abv} {giveRaitingSmile(abv)}
      </p>
    </div>
  );
}
