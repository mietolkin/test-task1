import React from "react";
import giveRaitingSmile from "../functions/giveRaitingSmile";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./singleProduct.css";

import axios from "axios";

import { useState, useEffect } from "react";

export default function SingleProduct() {
  const id = useParams().id;
  const url = `https://api.punkapi.com/v2/beers/${id}`;
  const { data, loading, error } = useFetch(url);
  console.log(data, loading, error);

  const { image_url, name, abv, tagline, description, food_pairing } =
    data.length && data[0];

  return (
    <div className="singleProduct-container">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data.length && (
        <>
          <img src={image_url} alt={name} />
          <div className="singleProduct-info">
            <h2>{name}</h2>
            <div>
              <p>
                ABV: {abv} {giveRaitingSmile(abv)}
              </p>
              <p>{tagline}</p>
            </div>
            <p>{description}</p>
            <p>
              {food_pairing.length &&
                food_pairing.map((food_pairing) => `${food_pairing}, `)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
