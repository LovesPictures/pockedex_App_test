import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <input type="text" value={city} onChange={handleChange} />

      <p>Welcome to the city of ...{city}</p>
    </div>
  );
}

export default PokemonCity;
