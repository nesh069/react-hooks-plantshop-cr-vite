import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ name, image, price: parseFloat(price) })
    })
      .then(res => res.json())
      .then(newPlant => {
        onAddPlant(newPlant);
        setName("");
        setImage("");
        setPrice("");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Plant Name"
      />
      <input
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <input
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
