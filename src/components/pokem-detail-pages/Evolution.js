import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Evolution = () => {
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
    console.log(data);
  }
  return (
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
  )
}
