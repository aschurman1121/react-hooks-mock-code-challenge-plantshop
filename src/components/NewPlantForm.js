import React, { useState } from "react";

const initialNewPlant = {
  name:'',
  image: '',
  price: 0
}

function NewPlantForm({setPlants}) {

  const [formData, setFormData] = useState(initialNewPlant)

  function handleSubmit (e) {
    e.preventDefault()
    // console.log(formData)
    fetch('http://localhost:6001/plants', {
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
      
    })
    .then(r => r.json())
    // gets the data from the fetch, takes the prop setPlants, adds it to a new array with the new data 
    .then((data) => setPlants((currentPlants) => [...currentPlants,data]));
  }

  function handleChange(e) {
    // console.log(e.target)
    setFormData((currentNewPlantState) => ({
      ...currentNewPlantState, 
      [e.target.name]: e.target.value})) }

  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name}
          onChange={handleChange}/>
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={handleChange}/>
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          value={formData.price} 
          onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
