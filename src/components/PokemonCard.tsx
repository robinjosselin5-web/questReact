
function PokemonCard({pokemon}) {
  
  return (
    <figure>
      <img src={pokemon.imgSrc} alt={pokemon.name}></img>
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );

}

export default PokemonCard;