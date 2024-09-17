import React, { useState } from 'react'
import { Tag, Button } from 'antd';
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import TableComp from '../common/TableComp';
import { orderData } from '../../constants';
const OrdersTable = () => {
    const [searchText, setSearchText] = useState('')
    const columns = [
		{
			title: "Order ID",
			dataIndex: "id",
			key: "id",
			render: (text) => <span style={{ color: "#fff" }}>{text}</span>,
		},
		{
			title: "Customer",
			dataIndex: "customer",
			key: "customer",
			render: (text) => <span style={{ color: "#fff" }}>{text}</span>,
		},
		{
			title: "Total",
			dataIndex: "total",
			key: "total",
			render: (total) => <span style={{ color: "#fff" }}>${total.toFixed(2)}</span>,
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			render: (status) => {
				// let color = status === "Delivered" ? "green" : status === "Processing" ? "yellow" : status === "Shipped" ? "blue" : "red";
				// return <Tag color={color}>{status.toUpperCase()}</Tag>;
               return( <span className={`px-2 py-1 rounded-full text-xs ${status==="Delivered" ? "bg-green-500" : status === "Processing" ? "bg-yellow-500" : status === "Shipped" ? "bg-blue-500" : "bg-red-500"} text-white`}>
              {status}
            </span>
               )
			},
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
			render: (text) => <span style={{ color: "#fff" }}>{text}</span>,
		},
		{
			title: "Actions",
			key: "actions",
			render: (_, record) => (
				<Button type="link" icon={<EyeOutlined />} style={{ color: "#4cafef" }}>
					View
				</Button>
			),
		},
	];
    const filteredData = orderData.filter(
        (item) =>
            item.customer.toLowerCase().includes(searchText.toLowerCase()) ||
            item.status.toLowerCase().includes(searchText.toLowerCase())
    );
  return (
   <>
   <TableComp name='Order List' columns={columns} setSearchText={setSearchText} filteredData={filteredData} />
   </>
  )
}

export default OrdersTable
