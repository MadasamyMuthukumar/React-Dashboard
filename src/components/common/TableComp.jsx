import React from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Table } from 'antd'

const TableComp = ({name, columns,filteredData,setSearchText}) => {
    return (
        <motion.div
            className='mt-8 bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='flex flex-col sm:justify-between sm:flex-row items-center mb-6'>

                <h2 className='text-lg font-medium mb-4 text-gray-100 '>{name}</h2>

                <div className='relative'>
                    <input type='text'
                        placeholder='Search products...'
                        className='bg-gray-700 text-white placeholder-gray-400 
                        rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2
                         focus:ring-blue-500'
                        onChange={(e) => setSearchText(e.target.value)} />
                    <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
                </div>

            </div>

            <Table
                columns={columns}
                dataSource={filteredData}
                pagination={false}
                className="product-table overflow-x-auto"
            />

        </motion.div>
    )

}

export default TableComp
