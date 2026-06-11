// On déclare le "Typage" -> interface/structure des données des props
// Pour voir si cela fonction -> changer 'name: string' par 'name: number' -> une erreur apparait dans la fonction
// Format d'un pokemon
interface Pokemon {
  name: string;
  imgSrc?: string;
}

// Objet "pokemon" qui prend pour format l'interface "Pokemon" On ajoute la fonction dans l'interface (setPokemonName) pour pouvoir l'utiliser dans la fonction NavBar
interface NavBarProps {
    pokemon: Pokemon[];
    setPokemonName: (pokemon: Pokemon) => void;
}

// On récupère dans les props la fonction setPokemonName et la liste des pokemons pour pouvoir les utiliser dans la fonction NavBar
function NavBar({pokemon, setPokemonName}: NavBarProps) {
    
    return (
        <nav className="flex gap-4">
            {pokemon.map((pokemon) =>
                (
                    // Dans le "onClick" on utilise une fonction fléché pour appeler la fonction setPokemonName avec le pokemon en paramètre pour afficher le pokemon correspondant dans la carte
                    <button className="btn btn-primary" key={pokemon.name} type="button" onClick={() => setPokemonName(pokemon)}>{pokemon.name}</button>
                )
                )}
        </nav>
    );
}

export default NavBar;