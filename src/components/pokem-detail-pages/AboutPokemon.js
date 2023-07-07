import React from 'react';



export const AboutPokemon = ({pokemonDetail}) => {

   console.log(pokemonDetail);

  return (
    <>
    <div className='flex flex-col text-gray-500 space-y-2'>
      <div className='flex space-x-20'>
        <div>Species</div>
        <div>Grass</div>
      </div>
      <div className='flex space-x-20'>
        <div>Height</div>
        <div>kg</div>
      </div>
      <div className='flex space-x-20'>
        <div>Abilities</div>
        <div>Fire, Dire</div>
      </div>
    </div>
    </>
  )
}

