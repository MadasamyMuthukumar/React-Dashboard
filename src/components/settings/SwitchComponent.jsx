import React from 'react'
import { Switch } from 'antd'
const SwitchComponent = ({title, isOn, onToggle}) => {
    return (
        <div className='flex justify-between items-center py-3'>
            <h3>{title}</h3>
            <Switch checked={isOn} onChange={onToggle}/>
        </div>
    )
}

export default SwitchComponent
