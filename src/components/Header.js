import React from 'react';
import PokeDex from '../assets/PokeDex.svg'
const Header = () => {
    
    return(
        <div className="flex justify-between p-5 bg-blue-500 ">
         <div className='font-medium text-xl text-white'>PokeDex</div>
        <div><button className='rounded font-medium p-2 bg-blue-700 text-white' >Favourites</button></div>                            
        </div>
    )
}
export default Header;
