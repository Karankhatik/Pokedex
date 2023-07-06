import React from "react";

const ShimmerBody = () => {
  return (
    <>
      <div className={`bg-gray-200 w-60 p-4 rounded shadow-md h-45`}>
        <h3 className="text-lg font-medium text-gray-800"></h3>
        <div className="flex flex-row mt-10 justify-between space-x-2">
          <div className="m-35">
            <h1 className={`bg-gray-100 p-1 rounded-xl`}></h1>

            <h1 className={`bg-gray-100 rounded-xl mt-3 p-1`}></h1>
          </div>
          <div className="mb-5 w-40 h-40"></div>
        </div>
      </div>
    </>
  );
};

export const PokemonCardShimmer = () => {
    
     
    return (
      <>
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      <ShimmerBody />
      
      </>
    )
  };
  
  

