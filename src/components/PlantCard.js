import React, { useState } from "react";

function PlantCard( { name, image, price }) {

  const [ isInStock, setIsInStock ] = useState(true)

  const primary = isInStock ? 'In Stock' : 'Out Of Stock'

  function handleStockClick () {
    setIsInStock((isInStock) => !isInStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className={primary} onClick={handleStockClick}>{primary}</button>
    </li>
  );
}

export default PlantCard;
