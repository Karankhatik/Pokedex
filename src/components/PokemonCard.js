import React from "react";
import { useEffect, useState } from "react";

export const PokemonCard = ({ data }) => {
  const { name, url } = data;
  const [pokemonImage, setPokemonImage] = useState([]);
  const [typeOfPokemon, setTypeOfPokemon] = useState([]);
  const [bgColorOfPokemonCart, setBgColorOfPokemonCart] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const urlForPokemonDetail = await fetch(url);
    const jsonForPokemonDetail = await urlForPokemonDetail.json();

    setTypeOfPokemon(jsonForPokemonDetail?.types);

    if (jsonForPokemonDetail) {
      const urlForPokemonSpeciesDetail = await fetch(
        `${jsonForPokemonDetail?.species?.url}`
      );
      const jsonForPokemonSpeciesDetail =
        await urlForPokemonSpeciesDetail.json();
      if (jsonForPokemonSpeciesDetail.color) {
        setBgColorOfPokemonCart(jsonForPokemonSpeciesDetail.color.name);
      }
    }

    setPokemonImage(
      jsonForPokemonDetail?.sprites?.other?.dream_world?.front_default
    );
  }

  return (
    <>
      <div className={`bg-gray-200 shadow-xl rounded-xl w-60 p-4  h-45`}>
        <div className="flex space-x-2">
          {/* Name of Pokemon */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </h3>
          </div>
          {/* type and species of pokemon */}
          <div className="flex space-x-2">
            <div>
            <h1 className='text-xs font-medium shadow-md px-2 py-2 outline-none  rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white'>
              {typeOfPokemon[0]?.type?.name}
            </h1>
            </div>
            <div>
            {typeOfPokemon[1]?.type?.name && (
              <h1 className='text-xs font-medium shadow-md px-2 py-2 outline-none  rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white'>
                {typeOfPokemon[1]?.type?.name}
              </h1>
            )}
            </div>     
            
          </div>
        </div>
        {/* image of the pokemon */}
        <div className="mb-5 p-5 w-40 h-40">
          <img className="w-22 h-25 drop-shadow-2xl" src={pokemonImage} />
        </div>
      </div>
    </>
  );
};
