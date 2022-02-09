import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const thePlants = plants.map((plant) => {
    
    return <PlantCard 
    
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
    />
  })


  return (
    <ul className="cards">{thePlants}</ul>
  );
}

export default PlantList;
