import React, { useState } from 'react'
import SettingsHeader from './SettingsHeader'
import { Bell } from 'lucide-react'
import { Switch } from 'antd'
import SwitchComponent from './SwitchComponent'

const Notifications = () => {
    const [Notifications, setNotifications] = useState({
        push:true,
        email:true,
        sms:false
    })
    const handleChange = (name,state)=>{
        console.log(name , state);
        
        setNotifications((prev)=>({
            ...prev,
            [name]: state
        }))
    }
  return (
    <div className='mt-6'>
    <SettingsHeader title='Notifications' icon={Bell}>
        <SwitchComponent title='Push Notifications' isOn={Notifications.push} onToggle={()=> setNotifications({...Notifications, push: !Notifications.push})}/>
        <SwitchComponent title='Email Notifications' isOn={Notifications.email} onToggle={()=> setNotifications({...Notifications, email: !Notifications.email})}/>
        <SwitchComponent title='SMS Notifications' isOn={Notifications.sms} onToggle={()=> setNotifications({...Notifications, sms: !Notifications.sms})}/>   
    </SettingsHeader>
    </div>
  )
}

export default Notifications
