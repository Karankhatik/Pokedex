import React, { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { PokemonCardShimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../../hooks/useOnline";
import NotFound from "./NotFound";

export const Body = () => {
  // State variable to hold the list of all pokemons
  const [pokemons, setPokemons] = useState([]);
  // State variable to hold the search text
  const [searchText, setSearchText] = useState("");
  // State variable to hold the filtered pokemons
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  // State variable to track loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Call the getData function when the component mounts
    getData();
  }, []);

  async function getData() {
    const url = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const json = await url.json();
    setPokemons(json?.results);
    setFilteredPokemons(json?.results);
    setLoading(false);
  }

  function filterData(searchText, pokemons) {
    return pokemons.filter((pokemon) => {
      return pokemon?.name.toLowerCase()?.includes(searchText.toLowerCase());
    });
  }

  // checking onlineStatus 
  const onlineStatus = useOnline()
  console.log(onlineStatus)
  if(!onlineStatus){
    return <NotFound/>
  }

  return (
    <>
      <div className="text-sm flex gap-2 my-4 m-10">
        {/* input search text */}
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
        {/* Search Button */}
        <button
          className="text-xs font-medium shadow-md px-2 py-2 outline-none  rounded bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white"
          onClick={() => {
            const fData = filterData(searchText, pokemons);
            setFilteredPokemons(fData);
          }}
        >
          Search
        </button>
      </div>
      {/* Shwowing pokemon card  */}
      <div className="flex flex-col md:flex-row items-center md:flex-wrap gap-5 my-2 md:my-0 m-20 ">
        {loading ? (
          <PokemonCardShimmer />
        ) : filteredPokemons.length === 0 ? (
          <p>No Pokemons found.</p>
        ) : (
          filteredPokemons?.map((data, index) => {
            const pokemonNumber = data.url.match(/\/(\d+)\/$/)[1];
            const pokemonDetailUrl = `/pokemon-detail/${pokemonNumber}`;

            return (
              <Link to={pokemonDetailUrl} key={pokemonNumber}>
                <PokemonCard data={data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
