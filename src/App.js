import React from "react";
//import separate components
import Logo from "./Logo";
import BestPokeman from "./BestPokeman";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const App = () => {
  function logWhenClicked() {
    console.log("Hello Kate");
  }

  return (
    <div>
      <Logo handleLog={logWhenClicked} />
      <BestPokeman />
      <CaughtPokemon />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
