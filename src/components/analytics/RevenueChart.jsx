import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { revenueData } from "../../constants";

const RevenueChart = () => {
    const [selectedRange, setSelectedRange] = useState('This Month')
    return (
        <motion.div className={`bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-100">Revenue vs Target</h2>

                <select name="" id="" className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none
            focus:ring-2 focus:ring-blue-500" value={selectedRange} onChange={(e) => setSelectedRange(e.target.value)}>
                    <option value="This Week">This Week</option>
                    <option value="This Month">This Month</option>
                    <option value="This Year">This Year</option>
                </select>

            </div>

            <div className="h-80">
                <ResponsiveContainer height={"100%"} width={"100%"}>
                    <AreaChart data={revenueData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                        <XAxis dataKey='month' stroke='#9CA3AF' />
                        <YAxis stroke='#9CA3AF' />
                        <Tooltip
                            contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend/>
                        <Area type="monotone" dataKey='revenue' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3}/>
                        <Area type="monotone" dataKey="target" stroke='#10B981' fill='#10B981' fillOpacity={0.3} />
                    </AreaChart>

                </ResponsiveContainer>

            </div>

        </motion.div>
    )
}

export default RevenueChart
