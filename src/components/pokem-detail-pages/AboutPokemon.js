import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



export const AboutPokemon = () => {

  const { id } = useParams();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getDeta();
  }, []);

  async function getDeta(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setData(data);
    console.log(data?.abilities[0]?.ability?.name);
  }

   

  return (
    <>
    <div className='flex flex-col text-gray-500 space-y-2'>
  <div className='flex space-x-20'>
    <div>Species</div>
    <div>{data.species?.name}</div>
  </div>
  <div className='flex space-x-20'>
    <div>Height</div>
    <div>{data.height}</div>
  </div>
  <div className='flex space-x-20'>
    <div>Abilities</div>
    <div>
      {data.abilities && data.abilities.length > 0 ? (
        <>
          <div className=''>
            <h1 className=''>{data.abilities[0].ability.name}</h1>
          </div>
          {data.abilities.length > 1 && (
            <div className=''>
              <h1 className=''>{data.abilities[1].ability.name}</h1>
            </div>
          )}
        </>
      ) : (
        <span>No abilities found.</span>
      )}
    </div>
  </div>
</div>

    </>
  )
}

