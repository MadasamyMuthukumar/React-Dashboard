import React from 'react'
import { accounts } from '../../constants'
import SettingsHeader from './SettingsHeader'
import { HelpCircle, Plus } from 'lucide-react'
import { useState } from 'react'
const ConnectedAccounts = () => {
    const [ConnectedAccounts, setConnectedAccounts] = useState(accounts)
  return (
    <div className='mt-6'>
      <SettingsHeader title='Accounts' icon={HelpCircle}>
        {
            ConnectedAccounts.map((account)=>(
                <div key={account.id} className='flex items-center justify-between py-3'>

                    {/* icon and accName */}
                    <div className='flex gap-1'>
                        <img src={account.icon} alt="" className='size-6 rounded-full object-cover mr-4'/>
                        <span className='text-gray-300'>{account.name}</span>
                    </div>

                    {/* buttons */}
                    <button className={`px-3 py-1 rounded ${
							account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
						} transition duration-200`}
                        
                       onClick={()=>
                        setConnectedAccounts(
                            (prevAcc)=>
                                prevAcc.map((acc)=>
                                acc.id == account.id ? {...acc, connected: !acc.connected} : acc
                                )
                        )
                       } >
                        {
                            account.connected ? 'Connected' : 'Connect'
                        }
                    </button>

                </div>
            ))
        }
        <button className='mt-4 flex items-center text-indigo-300 hover:text-indigo-400 transition duration-200'>
            <Plus size={18}  className='mr-2'/> Add account
        </button>
      </SettingsHeader>
    </div>
  )
}

export default ConnectedAccounts
