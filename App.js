import React from "react";
import ReactDOM from "react-dom/client";
import { PokemonList } from "./components/PokemonList";

const AppLayout = () => {
  return (
    <>
    <PokemonList/>    
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
