import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

function PokemonProvider(props) {
  // Define the state variable and its updater function
  const [favouritePokemons, setFavouritePokemons] = useState([]);

  // Function to add a new Pokemon to the favouritePokemons array
  function addPokemon(pokemonImage, pokemonName, pokemonType) {
    const newPokemon = { pokemonImage, pokemonName, pokemonType };

    // Check if the Pokemon already exists in the favouritePokemons array
    const isPokemonExists = favouritePokemons.some(
      (pokemon) => pokemon.pokemonName === pokemonName
    );

    // If the Pokemon doesn't exist, add it to the favouritePokemons array
    if (!isPokemonExists) {
      setFavouritePokemons([...favouritePokemons, newPokemon]);
    }
  }

  // Function to remove a Pokemon from the favouritePokemons array
  function removePokemon(pokemonName) {
    // Create a new array excluding the Pokemon with the specified name
    const updatedPokemons = favouritePokemons.filter(
      (pokemon) => pokemon.pokemonName !== pokemonName
    );

    // Update the favouritePokemons array with the new array
    setFavouritePokemons(updatedPokemons);
  }

  return (
    // Provide the favouritePokemons array, addPokemon and removePokemon functions to consuming components
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
