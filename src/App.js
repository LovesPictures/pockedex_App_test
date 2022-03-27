import React from "react";
//import separate components
import Logo from "./Logo";
import BestPokeman from "./BestPokeman";
import CaughtPokemon from "./CaughtPokemon";

const App = () => {
  function logWhenClicked() {
    console.log("Hello Kate");
  }

  return (
    <div>
      <Logo handleLog={logWhenClicked} />
      <BestPokeman />
      {/* <appName /> */}
      <CaughtPokemon />
    </div>
  );
};

export default App;
