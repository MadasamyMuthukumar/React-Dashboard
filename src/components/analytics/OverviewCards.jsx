import React from 'react'
import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight, ArrowUpLeft, ArrowDownLeft } from "lucide-react";
import { overviewData } from '../../constants';

const OverviewCards = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-5'>
            {
                overviewData.map((item, index) => (
                    <motion.div key={item.name}
                        className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg
            rounded-xl p-6 border border-gray-700'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}>

                        <div className='flex items-center justify-between'>
                            <div>
                                <h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
                                <p className='mt-1 text-xl font-semibold text-gray-100'>{item.value}</p>
                            </div>
                            {/* ICon */}
                            <div className={`p-3 rounded-full bg-opacity-20 ${item.change > 0 ? 'bg-green-500' : 'bg-red-500'}`}>
                                <item.icon className={`size-6 ${item.change > 0 ? 'text-green-400' : 'text-red-500'}`} />
                            </div>
                        </div>

                        {/* description */}
                        <div className={`mt-4 flex items-center ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {
                                item.change > 0 ? <ArrowUpLeft size='20' /> : <ArrowDownLeft size='20' />
                            }
                            <span className='ml-1 text-sm font-medium'>{Math.abs(item.change)}%</span>
                            <span className='ml-2 text-sm text-gray-400'>vs last period</span>


                        </div>

                    </motion.div>
                ))
            }

        </div>
    )
}

export default OverviewCards
