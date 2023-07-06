import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { PokemonCard } from "./PokemonCard";
import { PokemonCardShimmer } from "./Shimmer";
import { Link } from "react-router-dom";

//https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

export const Body = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = await fetch("https://pokeapi.co/api/v2/pokemon");
    const json = await url.json();
    setPokemons(json?.results);
    setFilteredPokemons(json?.results);
  }

  function filterData(searchText, pokemons) {
    return pokemons.filter((pokemon) => {
      return pokemon?.name.toLowerCase()?.includes(searchText.toLowerCase());
    });
  }

  return (
    <>
      <div className="text-sm flex gap-2 my-4 m-10">
        <input
          type="text"
          placeholder="Search for a restaurants"
          className="w-64 text-xs border border-gray-300 focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const fData = filterData(searchText, pokemons);
            setFilteredPokemons(fData);
          }}
        />
        <button className="text-xs font-medium shadow-md px-2 py-2 outline-none  rounded bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white"
         onClick={()=>{
          const fData = filterData(searchText, pokemons)          
          setFilteredPokemons(fData)
       }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:flex-wrap gap-5 my-2 md:my-0 m-20 ">
        {filteredPokemons?.length == 0 ? < PokemonCardShimmer/> :
        filteredPokemons?.map((data, index) => {
          const pokemonNumber = data.url.match(/\/(\d+)\/$/)[1];
          const pokemonDetailUrl = `/pokemon-detail/${pokemonNumber}`;
        
          return (
            <Link to={pokemonDetailUrl} key={pokemonNumber}>
              <PokemonCard data={data} />
            </Link>
          );
        })
        }
      </div>
    </>
  );
};
