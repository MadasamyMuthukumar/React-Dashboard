import React from 'react'
import { motion } from 'framer-motion'
import { PolarAngleAxis, PolarGrid,Tooltip, PolarRadiusAxis, RadarChart, ResponsiveContainer,Radar, Legend } from 'recharts'
import { customerSegmentationData } from '../../constants'

const CustomerSegmentation = () => {
  return (
    <motion.div className={`bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
        <h2 className='text-xl font-semibold mb-4 text-gray-100'>Customer Segmentation</h2>

        <div className='h-80'>
            <ResponsiveContainer height="100%" width="100%">
                <RadarChart cx='50%' cy='50%' outerRadius='80%' data={customerSegmentationData}>
                    <PolarGrid stroke='#374151'/>
                    <PolarAngleAxis dataKey='subject' stroke='#9CA3AF'/>
                    <PolarRadiusAxis angle={30} domain={[0,150]}  stroke='#9CA3AF'/>
                    <Radar name='Segment A' dataKey='A' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.6} />
                    <Radar name='Segment B' dataKey='B' stroke='#10B981' fill='#10B981' fillOpacity={0.6}/>
                    <Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
                    <Legend/>                    
                </RadarChart>

            </ResponsiveContainer>
        </div>
      
    </motion.div>
  )
}

export default CustomerSegmentation
