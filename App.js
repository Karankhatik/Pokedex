import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./src/components/Body";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import PokemonProvider from "./src/context/PokemonContext";
import { PokemonDetail } from "./src/components/PokemonDetail";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./src/components/Error";
import { AboutPokemon } from "./src/components/pokem-detail-pages/AboutPokemon";
import { BaseStatics } from "./src/components/pokem-detail-pages/BaseStatics";
import { Moves } from "./src/components/pokem-detail-pages/Moves";
import { FavouritePokemons } from "./src/components/FavouritePokemons";

const AppLayout = () => {
  return (
    <>
      <PokemonProvider>
        <Header />
        <Outlet />
        <Footer />
      </PokemonProvider>
    </>
  );
};

const creatingRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/pokemon-detail/:id",
        element: <PokemonDetail />,
        errorElement: <Error />,
        children: [
          {
            path: "/pokemon-detail/:id",
            element: <AboutPokemon />,
          },
          {
            path: "/pokemon-detail/:id/base-stat/:id",
            element: <BaseStatics />,
          },
          {
            path: "/pokemon-detail/:id/moves/:id",
            element: <Moves />,
          },
        ],
      },
      {
        path: "/favourite-pokemon",
        element: <FavouritePokemons/>,
      },
      {
        path: "*",
        element: <Error />,
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={creatingRouter} />);
