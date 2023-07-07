import React from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";

export const FavouritePokemons = () => {
  const { removePokemon, favouritePokemons } = useContext(PokemonContext);

  return (
    <>
    <div className="mt-10"></div>
    <div className="flex flex-col md:flex-row items-center md:flex-wrap gap-5 my-2 md:my-0 m-20">
    {favouritePokemons.map((pokemon, index) => (
        <div key={index} >
          <div className={`bg-gray-200 shadow-xl rounded-xl w-60 p-4  h-45`}>
            <div className="flex space-x-2">
              {/* Name of Pokemon */}
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {pokemon?.pokemonName?.charAt(0).toUpperCase() +
                    pokemon?.pokemonName?.slice(1)}
                </h3>
              </div>
              {/* type and species of pokemon */}
              <div className="flex space-x-2">
                <div>
                  <h1 className="text-xs font-medium shadow-md px-2 py-2 outline-none  rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
                    {pokemon?.pokemonType[0]?.type?.name}
                  </h1>
                </div>
                <div>
                  {pokemon?.pokemonType[1]?.type?.name && (
                    <h1 className="text-xs font-medium shadow-md px-2 py-2 outline-none  rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
                      {pokemon?.pokemonType[1]?.type?.name}
                    </h1>
                  )}
                </div>
              </div>
            </div>
            {/* image of the pokemon */}
            <div className="mb-5 p-5 w-40 h-40">
              <img
                className="w-22 h-25 drop-shadow-2xl"
                src={pokemon?.pokemonImage}
              />
            </div>
            <div>
            <button
            className="text-xs font-medium shadow-md px-2 py-2 outline-none  rounded bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white"
            onClick={() => removePokemon(pokemon?.pokemonName)}
          >
            Remove
          </button>
            </div>
            
          </div>

          
        </div>
      ))}
    </div>
    <div className="mb-10"></div>
      
    </>
  );
};
