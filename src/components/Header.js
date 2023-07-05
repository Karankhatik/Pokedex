import React from 'react';
import PokeDex from '../assets/PokeDex.svg'
const Header = () => {
    
    return(
        <>
         <div className="flex justify-between items-center px-6 md:px-8 py-2 shadow bg-black text-white">
         <div className='font-medium text-xl text-white'>PokeDex</div>
        <div><button className='text-xs font-medium shadow-md px-2 py-2 outline-none  rounded bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white' >Favourites</button></div>                            
        </div>
        </>
       
    )
}
export default Header;
