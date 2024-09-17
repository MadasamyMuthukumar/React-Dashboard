import React, {useState} from 'react'
import TableComp from '../common/TableComp';
import { userData } from '../../constants';

const UsersTable = () => {
    const [searchText, setSearchText] = useState('')

    const columns = [
        {
          title: 'NAME',
          dataIndex: 'name',
          key: 'name',
          render: (text, record) => (
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-3">
                {text.charAt(0)}
              </div>
              <span>{text}</span>
            </div>
          ),
        },
        {
          title: 'EMAIL',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'ROLE',
          dataIndex: 'role',
          key: 'role',
          render: (role) => {
            const colorMap = {
              Customer: 'bg-blue-600',
              Admin: 'bg-indigo-600',
              Moderator: 'bg-sky-600',
            };
            return (
              <span className={`px-2 py-1 rounded-full text-xs ${colorMap[role] || 'bg-gray-600'} text-white`}>
                {role}
              </span>
            );
          },
        },
        {
          title: 'STATUS',
          dataIndex: 'status',
          key: 'status',
          render: (status) => (
            <span className={`px-2 py-1 rounded-full text-xs ${status === 'Active' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
              {status}
            </span>
          ),
        },
        {
          title: 'ACTIONS',
          key: 'actions',
          render: () => (
            <div className="space-x-2">
              <button className="text-blue-500 hover:underline">Edit</button>
              <button className="text-blue-500 hover:underline">Delete</button>
            </div>
          ),
        },
      ];

      const filteredData = userData.filter(
        (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.role.toLowerCase().includes(searchText.toLowerCase())
    );
    
  return (
    <TableComp name='Users' columns={columns} setSearchText={setSearchText} filteredData={filteredData}/>
  )
}

export default UsersTable
