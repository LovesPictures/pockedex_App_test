import React from "react";

//latest date
const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
  return <p> Caught 0 Pokemon on {date}</p>;
};

export default CaughtPokemon;
