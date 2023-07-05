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
    const jsonForPokemonDeatil = await urlForPokemonDetail.json();

    setTypeOfPokemon(jsonForPokemonDeatil?.types);

    if (jsonForPokemonDeatil) {
      const urlForPokemonSpeciesDetail = await fetch(
        `${jsonForPokemonDeatil?.species?.url}`
      );
      const jsonForPokemonSpeciesDetail =
        await urlForPokemonSpeciesDetail.json();
      if (jsonForPokemonSpeciesDetail.color) {
        setBgColorOfPokemonCart(jsonForPokemonSpeciesDetail.color.name);
      }
    }
  
    setPokemonImage(
      jsonForPokemonDeatil?.sprites?.other?.dream_world?.front_default
    );
  }

  return (
    <>
      <div className={`bg-gray-200 shadow-xl rounded-xl w-60 p-4  h-45`}>
        <h3 className="text-lg font-medium text-gray-800">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h3>
        <div className="flex flex-row mt-10 justify-between space-x-2">
          <div className="m-35">
            <h1 className={`bg-gray-100 p-1 rounded-xl`}>
              {typeOfPokemon[0]?.type?.name}
            </h1>
            {typeOfPokemon[1]?.type?.name && (
              <h1 className={`bg-gray-100 rounded-xl mt-3 p-1`}>
                {typeOfPokemon[1]?.type?.name}
              </h1>
            )}
          </div>
          <div className="mb-5 w-40 h-40">
            <img className="w-22 h-25 drop-shadow-2xl" src={pokemonImage} />
          </div>
        </div>
      </div>
    </>
  );
};
