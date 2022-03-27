import React from "react";

const Logo = (props) => {
  // function logWhenClicked() {
  //   console.log("Hello Kate");
  // }
  const appName = "Jude's Pokedex";
  return (
    <div>
      <header>
        <h1> {props.appName}</h1>
        <img
          // Do not call the function in function but refer to the function as a prop
          onClick={props.handleClick}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="Pokemon"
        />
        ;
      </header>
    </div>
  );
};
export default Logo;
