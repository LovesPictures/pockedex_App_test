import React from "react";
//import separate components
import Logo from "./Logo";
import BestPokeman from "./BestPokeman";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {
  return (
    <div>
      <Logo />
      <BestPokeman />
      {/* <appName /> */}
      <CaughtPokemon />
    </div>
  );
};

export default App;
