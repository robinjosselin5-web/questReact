// On déclare le "Typage" -> interface/structure des données des props
// Pour voir si cela fonction -> changer 'name: string' par 'name: number' -> une erreur apparait dans la fonction
// Format d'un pokemon
interface Pokemon {
  name: string;
  imgSrc?: string;
}

// Objet "pokemon" qui prend pour format l'interface "Pokemon"
interface PokemonCardProps {
  pokemon: Pokemon;
}

// On passe dans la fonction l'interface "Le format des données/Typages" 
function PokemonCard({pokemon}: PokemonCardProps) {

  return (
    <figure className="flex flex-col items-center gap-2 text-3xl rounded-lg p-4 bg-blue-500">
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <div>???</div>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );

}

export default PokemonCard;