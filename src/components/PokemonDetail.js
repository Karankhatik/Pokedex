import React from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const PokemonDetail = () => {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [pokemonImage, setPokemonImage] = useState();
  const [pokemonName, setPokemonName] = useState();
  const [pokemonType, setPokemonType] = useState([]);
  const [isLiked, setIsLiked] = useState(false); 
  const pokeId = useParams();
  const { id } = pokeId;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await url.json();
    //console.log(json);
    setPokemonImage(json?.sprites?.other?.dream_world?.front_default);
    setPokemonName(json.name);
    setPokemonType(json?.types);
    if (json) {
      const urlForPokemonDetail = await fetch(`${json?.species?.url}`);
      const jsonForPokemonDetail = await urlForPokemonDetail.json();
      //console.log(jsonForPokemonDetail);
      setPokemonDetail(jsonForPokemonDetail);
    }
  }
  
  const handleLike = () => {
    setIsLiked(!isLiked);
  };


  return (
    <>
      <div className="flex flex-col md:flex-row m-5 md:m-20 space-y-5 md:space-y-0 md:space-x-20">
        {/* Pokemon Card */}
<div className="bg-gray-200 shadow-2xl rounded-xl p-5">
  {/* Save Button */}
  <div className="text-right">
    <button
      className={`rounded p-2 ${
        isLiked ? 'bg-orange-300' : 'bg-transparent'
      } hover:bg-orange-400 transition-all duration-200 ease-in-out`}
      onClick={handleLike}
    >
      {isLiked ? (
       <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       fill={isLiked ? 'currentColor' : 'none'}
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       className={`h-6 w-6 ${isLiked ? 'text-orange-500' : ''}`}
     >
       <path
         d="M12 21.35l-1.69-1.54C5.25 15.73 2 13.12 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C13.09 4.81 14.76 4 16.5 4 19.58 4 22 6.42 22 9.5c0 3.62-3.25 6.24-8.31 10.31L12 21.35z"
         fillRule="evenodd"
       />
     </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 21.35l-1.69-1.54C5.25 15.73 2 13.12 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C13.09 4.81 14.76 4 16.5 4 19.58 4 22 6.42 22 9.5c0 3.62-3.25 6.24-8.31 10.31L12 21.35z" />
        </svg>
      )}
    </button>
  </div>

  {/* Name, Species, and Type */}
  <div className="flex flex-col md:flex-row justify-between mt-2">
    {/* Name of Pokemon */}
    <div className="font-bold text-2xl">
      {pokemonName?.charAt(0).toUpperCase() + pokemonName?.slice(1)}
    </div>

    {/* Species and Type of Pokemon */}
    <div className="flex space-x-2 mt-2 md:mt-0">
      <h1 className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
        {pokemonType[0]?.type?.name}
      </h1>
      {pokemonType[1]?.type?.name && (
        <h1 className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
          {pokemonType[1]?.type?.name}
        </h1>
      )}
    </div>
  </div>

  {/* Image of Pokemon */}
  <div className="mt-5">
    <img src={pokemonImage} alt={pokemonName} className="w-full" />
  </div>
</div>

        {/* Description Pages of Pokemon */}
        <div className="bg-gray-200 shadow-2xl rounded-xl p-5">
          <div className="flex flex-row space-x-3">
            {/* Pokemon About Link */}
            <div>
              <Link to={`/pokemon-detail/${id}`}>
                <button  className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
                  About
                </button>
              </Link>
            </div>

            {/* Pokemon Base stat Link */}
            <div>
              <Link to={`/pokemon-detail/${id}/base-stat/${id}`}>
                <button className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
                  Base Stat
                </button>
              </Link>
            </div>

            {/* Pokemon Evolution Link */}
            <div>
              <Link to={`/pokemon-detail/${id}/evolution/${id}`}>
                <button className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
                  Evolution
                </button>
              </Link>
            </div>
            <div className="border-b border-gray-600"></div>
            {/* Pokemon Moves Link */}
            <div>
              <Link to={`/pokemon-detail/${id}/moves/${id}`}>
                <button className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
                  Moves
                </button>
              </Link>
            </div>
          </div>
          <div class="border-t mt-4 border-black"></div>
          {/* Dynamic pages show below */}
          <div className="shadow-5xl mt-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
