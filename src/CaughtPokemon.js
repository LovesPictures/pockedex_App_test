import React, { useState } from "react";

const CaughtPokemon = () => {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught((c1) => {
      return c1 + 1;
    });
  }
  const date = new Date().toLocaleDateString();
  return (
    <>
      <p>
        caught {caught.length} Pokemon on {date}{" "}
        <button onClick={catchPokemon}>caught Pokemon</button>
      </p>

      <ul>
        {" "}
        {caught.map((item, index) => {
          return (
            <li>
              key= {index} > {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CaughtPokemon;
//callback function is call ted with the value
// the function and the array
