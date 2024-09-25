import { Trash } from 'lucide-react'
import React from 'react'

const DeleteSection = () => {
    return (
        <div className='mt-6 bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8'>
            <div className='flex items-center mb-4'>
                <Trash size={24} className='text-red-400 mr-3' />
                <h2 className='text-xl font-semibold text-gray-100'>Danger zone</h2>
            </div>

            <p className='mb-4 text-gray-400'>Permanently delte your account</p>

            <button className='bg-red-600 hover:bg-red-700 text-white 
            font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
                Delete Account
                </button>
        </div>
    )
}

export default DeleteSection
