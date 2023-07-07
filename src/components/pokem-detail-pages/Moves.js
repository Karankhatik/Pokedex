import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Moves = () => {
  const { id } = useParams();
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    getDeta();
  }, [id]);

  async function getDeta() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setData(data);
    console.log(data.moves[0]?.move.name);
  }

  if (!data) {
    // Render a loading state or return null until data is fetched
    return <div>Loading...</div>;
  }

  return (
    <div className='flex flex-col text-gray-500 space-y-2'>
      <div className='flex space-x-20'>
        <div>move 1</div>
        <div>{data.moves[0]?.move.name}</div>
      </div>
      <div className='flex space-x-20'>
        <div>move 2</div>
        <div>{data.moves[1]?.move.name}</div>
      </div>
      <div className='flex space-x-20'>
        <div>move 3</div>
        <div>{data.moves[3]?.move.name}</div>
      </div>
      <div className='flex space-x-20'>
        <div>move 4</div>
        <div>{data.moves[4]?.move.name}</div>
      </div>
    </div>
  );
};
