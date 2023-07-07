import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const AboutPokemon = () => {
  const { id } = useParams(); // Access the 'id' parameter from the URL
  const [data, setData] = useState({}); // State variable to store the fetched data
  const [isLoading, setIsLoading] = useState(true); // State variable to track loading state
  const [error, setError] = useState(null); // State variable to store error messages

  useEffect(() => {
    getData(); // Fetch data when the component mounts
  }, []);

  async function getData() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
      const data = await response.json(); 
      setData(data); 
    } catch (error) {
      setError(error.message); // Set the error state if an error occurs during fetching
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or failure
    }
  }

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  // Render the fetched data
  return (
    <>
      <div className='flex flex-col text-gray-500 space-y-2'>
        <div className='flex space-x-20'>
        {/*  Display the species name from the fetched data */}
          <div>Species</div>
          <div>{data.species?.name}</div> 
        </div>
        {/* Display the height from the fetched data */}
        <div className='flex space-x-20'>
          <div>Height</div>
          <div>{data.height}</div> 
        </div>
        {/* Display the name of the first ability */}
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
              // Display a message if no abilities are found
              <span>No abilities found.</span>  
            )}
          </div>
        </div>
      </div>
    </>
  );
};
