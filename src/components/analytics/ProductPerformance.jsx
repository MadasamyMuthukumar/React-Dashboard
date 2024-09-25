import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import { productPerformanceData } from "../../constants";

const ProductPerformance = () => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <h2 className="font-semibold mb-4 text-xl text-gray-100">Product Performance</h2>
            <div className="h-80">
            <ResponsiveContainer height="100%" width="100%">
                <BarChart data={productPerformanceData}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='name' stroke='#9CA3AF' />
                    <YAxis stroke='#9CA3AF' />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                        }}
                        itemStyle={{ color: "#E5E7EB" }}
                    />
                    <Legend/>
                    <Bar dataKey='sales' fill='#F59E0B'/>
                    <Bar dataKey='revenue' fill='#10B981'/>
                    <Bar dataKey='profit' fill='#8B5CF6'/>

                </BarChart>
            </ResponsiveContainer>
            </div>

        </motion.div>
    )
}

export default ProductPerformance
