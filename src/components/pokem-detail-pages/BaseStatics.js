import React from 'react'

export const BaseStatics = () => {
  return (
    <div className='flex flex-col text-gray-500 space-y-2'>
      <div className='flex flex-row space-x-20'>
        <div>HP</div>
        <div>10</div>
      </div>
      <div className='flex flex-row space-x-20'>
        <div>Attack</div>
        <div>20</div>
      </div>
      <div className='flex flex-row space-x-20'>
        <div>Defence</div>
        <div>10</div>
      </div>
      <div className='flex flex-row space-x-20'>
        <div>Total</div>
        <div>20</div>
      </div>
    </div>
  )
}
