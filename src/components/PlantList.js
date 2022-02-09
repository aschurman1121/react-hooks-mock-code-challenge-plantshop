import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plantArray} ) {

  const plants = plantArray.map(plant => {
 
    return <PlantCard 
      key = {plant.id}
     name = {plant.name}
     image = {plant.image}
     price = {plant.price}

    />

  
  })
  return (
    <ul className="cards"> {plants} </ul>
  );
}

export default PlantList;
