import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext();


function PokemonProvider(props){
    const [favouritePokemons, setFavouritePokemons] = useState([]);

   function addPokemon(){

   }

   function removePokemon(){

   }
return (
    <PokemonContext.Provider value={{}}>
        {props.children}
    </PokemonContext.Provider>
)
}



export default PokemonProvider;