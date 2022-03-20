import React from "react";

// an array of abilities in ordered list format
const BestPokeman = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  return (
    <div>
      <p>
        My favorite Pokemon is Squirtle- although I have never heard of him{" "}
      </p>
      <ul>
        {abilities.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokeman;
