import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const BaseStatics = () => {
  const pokeId = useParams();
  const { id } = pokeId;
  const [data, setData] = useState([]);

  useEffect(() => {
    getDeta();
  }, []);

  async function getDeta() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setData(data);
  }

  return (
    <div className='flex flex-col text-gray-500 space-y-2'>
    {data && data.stats && (
      <>
        {data.stats.map((stat, index) => (
          <div className='flex space-x-20' key={index}>
            <div>{stat?.stat?.name}</div>
            <div className='flex flex-grow items-center justify-end'>
              <div>{stat?.base_stat}</div>
            </div>
          </div>
        ))}
        <div className='flex space-x-20'>
          <div>Total</div>
          <div className='flex flex-grow items-center justify-end'>
            <div>
              {data.stats.reduce(
                (total, stat) => total + (stat?.base_stat || 0),
                0
              )}
            </div>
          </div>
        </div>
      </>
    )}
  </div>
  
  

  );
};
