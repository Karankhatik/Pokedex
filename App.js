import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./src/components/Body"
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import PokemonProvider from "./src/context/PokemonContext";
import { PokemonDetail } from "./src/components/PokemonDetail";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./src/components/Error";

const AppLayout = () => {
  return (
    <>
    <PokemonProvider>
    <Header/>
    <Outlet/>
    <Footer/> 
    </PokemonProvider>     
    </>
  );
};



const creatingRouter = createBrowserRouter([
  {
      path : '/',
      element : <AppLayout/>,
      errorElement : <Error/>,
      children : [
          {
              path : '/',
              element : <Body />,
          },
          
          {
              path : '/pokemon-detail/:id',
              element : <PokemonDetail/>,
          },         
          
      ]
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={creatingRouter}/>)
