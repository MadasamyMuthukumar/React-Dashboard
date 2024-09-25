import React from 'react'

const Header = ({title}) => {
  return (
    <div className='z-50 sticky top-0 bg-gray-800 backdrop-blur-sm opacity-100 shadow-lg border-b border-gray-700'>
      <div className='container mx-auto p-4 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
      </div>
    </div>
  )
}

export default Header
