import React from "react";

const ShimmerCardBody = () => {
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
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
      <ShimmerCardBody />
    </>
  );
};

//Detail page shimmer

export const ShimmerDetailBody = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row m-5 md:m-20 space-y-5 md:space-y-0 md:space-x-20">
        <div className="bg-gray-200 shadow-2xl rounded-xl p-5" style={{ width: '250px', height: '250px' }}></div>

        {/* Description Pages of Pokemon */}
        <div className="bg-gray-200 shadow-2xl rounded-xl p-5" style={{ width: '250px', height: '250px' }}></div>
      </div>
      <div className="mt-20"></div>
    </>
  );
};


