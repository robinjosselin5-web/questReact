import "./App.css";

import { useState } from "react";

import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {

  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

  if (pokemon == null) {
    throw new Error("Invalid pokemon name");
  }

  return (
    <section>
      <MyTitle />
      <PokemonCard pokemon={pokemon} />

      <button type="button" onClick={() => setPokemonName("bulbasaur")}>bulbasaur</button>
      <button type="button" onClick={() => setPokemonName("mew")}>bulbasaur</button>
    </section>
  );
}

export default App;