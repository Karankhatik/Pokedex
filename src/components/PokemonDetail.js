import React, { useState, useEffect, useContext } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { ShimmerDetailBody } from "./Shimmer";

export const PokemonDetail = () => {
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const { addPokemon, removePokemon } = useContext(PokemonContext);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setPokemonImage(data?.sprites?.other?.dream_world?.front_default);
      setPokemonName(data.name);
      setPokemonType(data?.types);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFavourite = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      addPokemon(pokemonImage, pokemonName, pokemonType);
    } else {
      removePokemon(pokemonName);
    }
  };

  if (isLoading) {
    return <ShimmerDetailBody />;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row m-5 md:m-20 space-y-5 md:space-y-0 md:space-x-20">
        <div className="bg-gray-200 shadow-2xl rounded-xl p-5">
          <div className="text-right">
            <button
              className={`rounded p-2 ${
                isLiked ? "bg-orange-300" : "bg-transparent"
              } hover:bg-orange-400 transition-all duration-200 ease-in-out`}
              onClick={handleFavourite}
            >
              {isLiked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-6 w-6 text-orange-500`}
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

          <div className="flex space-x-2 mt-2">
            <div className="font-bold text-2xl">
              {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
            </div>

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

          <div className="mt-5">
            <img src={pokemonImage} alt={pokemonName} className="w-full" />
          </div>
        </div>

        <div className="bg-gray-200 shadow-2xl rounded-xl p-5">
          <div className="flex flex-row space-x-3">
            <div>
              <Link to={`/pokemon-detail/${id}`}>
                <button className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
                  About
                </button>
              </Link>
            </div>

            <div>
              <Link to={`/pokemon-detail/${id}/base-stat/${id}`}>
                <button className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
                  Base Stat
                </button>
              </Link>
            </div>
            <div className="border-b border-gray-600"></div>
            <div>
              <Link to={`/pokemon-detail/${id}/moves/${id}`}>
                <button className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded-xl bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white">
                  Moves
                </button>
              </Link>
            </div>
          </div>
          <div className="border-t mt-4 border-black"></div>
          <div className="shadow-5xl mt-2">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </>
  );
};
