import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    plantFetch();
  }, [])

function plantFetch(){
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => {
      console.log(data);
      setPlants(data);
    })
  }


  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
