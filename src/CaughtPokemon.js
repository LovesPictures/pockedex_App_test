import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught(caught.concat(["PO", "E", "Mo", "N", "!"]));
  }

  console.log(props);
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Click me</button>
      <ul>
        {caught.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    </>
  );
};
export default CaughtPokemon;

//callback function is call ted with the value
// the function and the array
