// On déclare le "Typage" -> interface/structure des données des props
// Pour voir si cela fonction -> changer 'name: string' par 'name: number' -> une erreur apparait dans la fonction
interface PokemonCardProps {
  name: string,
  imgSrc?: string
}

// On passe dans la fonction l'interface "Le format des données/Typages" 
function PokemonCard( {name, imgSrc}: PokemonCardProps) {

  return (
    <figure>
      <img src={imgSrc} alt={name}></img>
      <figcaption>{name}</figcaption>
    </figure>
  );

}

export default PokemonCard;