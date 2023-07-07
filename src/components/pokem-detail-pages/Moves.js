import React from 'react'

export const Moves = () => {
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
