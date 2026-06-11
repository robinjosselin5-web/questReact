import "./App.css";

import { useState } from "react";

import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

  const [pokemonName, setPokemonName] = useState(pokemonList[0]);

  return (
    <section className="flex flex-col items-center gap-4">
      <MyTitle />
      <NavBar pokemon={pokemonList} setPokemonName={setPokemonName} />
      
      <PokemonCard pokemon={pokemonName} />


    </section>
  );
}

export default App;