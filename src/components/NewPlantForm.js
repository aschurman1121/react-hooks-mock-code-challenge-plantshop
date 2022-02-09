import React, { useState } from "react";

function NewPlantForm( {name, image, price, newPlantSubmit}) {

  
  const [ formData, setFormData ] = useState({
    name: '',
    image: '',
    price: ''
  })

    function handleData( e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

   function handleSubmit(e) {
      e.preventDefault();
      fetch( 'http://localhost:6001/plants', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      } )
      .then(r => r.json())
      .then(newPlantCard => newPlantSubmit(newPlantCard))
    }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleData} type="text" 
        name="name" 
        placeholder="Plant name" 
        value={name}/>
        <input onChange={handleData}
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value = {image}/>
        <input onChange={handleData}
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={price}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
