import React , { useState, useEffect }from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
 const [plants, setPlants] = useState([])
 const [search, setSearchTerm ] = useState('')


useEffect(() => {
  fetch (' http://localhost:6001/plants')
  .then((r) => r.json() )
  .then(plantArray => setPlants(plantArray))
}, [])


 
  function plantsUpdated(newPlantCard) {
    setPlants([
      ...plants,  
      newPlantCard
    ])
    console.log(newPlantCard)
  }


  const filteredSearch = plants.filter((plant) => {
      const nameIncludes = plant.name.toLowerCase().includes(search.toLowerCase())
      const priceIncludes= plant.price.toString().includes(search);
      return nameIncludes || priceIncludes;
  } )

  return (
    <main>
      <NewPlantForm newPlantSubmit={plantsUpdated}/>
      <Search search={search} setSearchTerm = {setSearchTerm}/>
      <PlantList plantArray={filteredSearch} />
    </main>
  );
}

export default PlantPage;
