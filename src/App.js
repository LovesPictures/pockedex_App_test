import React from "react";
//import separate components
import Logo from "./Logo";
import BestPokeman from "./BestPokeman";
import CaughtPokemon from "./CaughtPokemon";

// const Logo = () => {
//    const appName = "Jude's Pokedex";
//   return (
//     <div>
//     <header>
//       <h1> {appName}</h1>
//       <img 
//       src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" 
//       alt="Pokemon"
//       />
//       ;
//     </header>
//     </div>
//   );
// };

// // an array of abilities in ordered list format
// const BestPokeman = () => {
//   const abilities = ["Anticipation", "Adaptability", "Run-Away"];
//   return (
//     <div>
//     <p>My favorite Pokemon is Squirtle- although I have never heard of him </p>
//     <ul>
//       {abilities.map((element) => {
//         return <li>{element}</li>;
//       })}
//     </ul>
//     </div>
//   );
// };

// //latest date 
// const CaughtPokemon = () => {
//  const date = new Date().toLocaleDateString();
//  return <p> Caught 0 Pokemon on {date}</p>;
// };

// constructing the app with individual components
const App = () => {
  return (
  <div>
    <Logo />
    <BestPokeman />
    <appName/>
    <CaughtPokemon/>
  </div>);
};

export default App;
