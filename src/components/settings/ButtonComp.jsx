import React from 'react'

const ButtonComp = ({name}) => {
  return (
    <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 w-full sm:w-auto'>
                {name}
    </button>
  )
}

export default ButtonComp
