import React from 'react'

export const Spinner = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center gap-y-3'>
        <div className='spinner'></div>
        <p className='dark:text-white'>Loading....</p>
    </div>
  )
}
