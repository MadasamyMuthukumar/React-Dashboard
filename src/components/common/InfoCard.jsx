import React from 'react'
import { motion } from 'framer-motion'
const InfoCard = ({name, icon:Icon , value, color}) => {
  return (
    <motion.div className='opacity-100 bg-gray-800 backdrop-blur-sm shadow-lg border border-gray-700
    rounded-xl'
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>
        <div className='px-4 py-5 sm:6'>

        {/**icon and name must be vertically aligned */}
        <span className='flex items-center text-sm font-medium text-gray-100'>
        <Icon size={20} className='mr-2' style={{ color } } />
        {name}
        </span>

        {/**below value */}
        <p className='mt-1 text-3xl font-semibold'>{value}</p>
      </div>
    </motion.div>
  )
}

export default InfoCard
