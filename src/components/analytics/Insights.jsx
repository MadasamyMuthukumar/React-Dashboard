import React from 'react'
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";
import { motion } from 'framer-motion';
import { INSIGHTS } from '../../constants';

const Insights = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg
rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
 >
                <h2 className='text-xl font-semibold mb-4 text-gray-100'>AI Powered Insights</h2>

                <div className='space-y-4'>
                    {
                        INSIGHTS.map((item,index)=>(
                            <div className='flex items-center space-y-2'>
                                <div className={`sm:inline-block p-2 rounded-full bg-gray-800 bg-opacity-50 mr-4 hidden`}>
                                    <item.icon className={`size-6 ${item.color} `} />
                                </div>
                                <p className='text-gray-300'>{item.insight}</p>
                            </div>
                        ))
                    }

                </div>

        </motion.div>
    )
}

export default Insights
