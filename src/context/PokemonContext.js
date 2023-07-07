import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

function PokemonProvider(props) {
  const [favouritePokemons, setFavouritePokemons] = useState([]);

  function addPokemon(pokemonImage, pokemonName, pokemonType) {
    const newPokemon = { pokemonImage, pokemonName, pokemonType };
  
    // Check if the Pokemon already exists in the favouritePokemons array
    const isPokemonExists = favouritePokemons.some(
      (pokemon) => pokemon.pokemonName === pokemonName
    );
  
    if (!isPokemonExists) {
      setFavouritePokemons([...favouritePokemons, newPokemon]);
    }
  }
  

  function removePokemon(pokemonName) {
    const updatedPokemons = favouritePokemons.filter(
      (pokemon) => pokemon.pokemonName !== pokemonName
    );
    setFavouritePokemons(updatedPokemons);
  }

  return (
    <PokemonContext.Provider
      value={{
        favouritePokemons,
        addPokemon,
        removePokemon
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
