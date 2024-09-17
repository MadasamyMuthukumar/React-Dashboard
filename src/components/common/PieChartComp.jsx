import React from 'react'
import { motion } from 'framer-motion'
import { Pie, ResponsiveContainer, Cell, Tooltip, Legend, PieChart } from 'recharts'
import { COLORS } from '../../constants'
const PieChartComp = ({name,data, dataKey}) => {
    console.log(data);
    
    return (
        <motion.div className={`bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>
                {/* ${name=='Sales By Category' ? "mt-0": "mt-8"} */}

            <h2 className='text-lg font-medium mb-4 text-gray-100'>{name}</h2>
            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx={"50%"} //making center x & y axis
                            cy={"40%"}
                            labelLine={true}
                            outerRadius={80}
                            fill='#8884d8'
                            dataKey={dataKey} //unique key
                            //will take name and value from categoryData array & render cell labels
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>

                            {/* //render each cells */}
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}

                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        
                        {/* will give details at bottom(names) */}
                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </motion.div>
    )
}

export default PieChartComp
