import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const PokemonDetail = () => {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [pokemonImage, setPokemonImage] = useState();
  const pokeId = useParams();
  const { id } = pokeId;
  console.log(id);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await url.json();
    console.log(json);
    setPokemonImage(json?.sprites?.other?.dream_world?.front_default);

    if (json) {
      const urlForPokemonDetail = await fetch(`${json?.species?.url}`);
      const jsonForPokemonDetail = await urlForPokemonDetail.json();
      console.log(jsonForPokemonDetail?.color?.name);
      setPokemonDetail(jsonForPokemonDetail);
    }
  }

  return (
    <>
      <div className="p-5">
        <div className=" m-10 p -10 border-8 border-indigo-600">
          <div className="text-right ">
            <button className="bg-red-200 p-2 rounded">Save</button>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <div className="font-bold text-2xl">
                Balbasaur
              </div>
              <div className="flex space-x-4  ">
                <h1 className="bg-red-200 p-2 rounded-xl">Grass</h1>
                <h1 className="bg-red-200 p-2 rounded-xl">poision</h1>
              </div>
            </div>
            <div className="font-bold text-2xl">
              #001
            </div>
          </div>
          <div className=" ml-10 p-2 m-2  border-8 border-indigo-600">
            <img src="https://th.bing.com/th?id=OIP.kf3rbDAdmf-urpG-Z05n-gHaH8&w=241&h=258&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
          </div>
        </div>
        <div>
          {/* {outlook} */}
        </div>
      </div>
    </>
  );
};
