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
    <section>
      <MyTitle />
      <PokemonCard pokemon={pokemonName} />

      {pokemonList.map((pokemon) =>
        (
          <button key={pokemon.name} type="button" onClick={() => setPokemonName(pokemon)}>{pokemon.name}</button>
        )
      )}

    </section>
  );
}

export default App;