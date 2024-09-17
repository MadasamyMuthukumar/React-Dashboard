import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Table } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Tabledata } from '../../constants'
import '../common/Table.css'
import TableComp from '../common/TableComp'
const ProductTable = () => {

    const [searchText, setSearchText] = useState('')

    const columns = [
        {
            title: 'NAME',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="flex items-center">
                    {/* <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div> */}
                    <img className="w-8 h-8 bg-gray-900 rounded-full mr-2" src="https://img.freepik.com/premium-vector/black-round-logo-with-words-quality-products-guaranteed_626969-614.jpg" alt="" />
                    <span>{text}</span>
                </div>
            ),
        },
        {
            title: 'CATEGORY',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'PRICE',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price.toFixed(2)}`,
        },
        {
            title: 'STOCK',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'SALES',
            dataIndex: 'sales',
            key: 'sales',
        },
        {
            title: 'ACTIONS',
            key: 'actions',
            render: () => (
                <div className="flex space-x-8">
                    <EditOutlined className="text-blue-500 cursor-pointer" />
                    <DeleteOutlined className="text-red-500 cursor-pointer" />
                </div>
            ),
        },
    ];

    const filteredData = Tabledata.filter(
        (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.category.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='mb-8'>
      <TableComp name='Product List' columns={columns} filteredData={filteredData} setSearchText={setSearchText}/>
      </div>)

    }

export default ProductTable
