import React from 'react'
import SettingsHeader from './SettingsHeader'
import { Lock } from 'lucide-react'
import { useState } from 'react'
import SwitchComponent from './SwitchComponent'
import ButtonComp from './ButtonComp'
const Security = () => {
    const [twoFactor, setTwoFactor] = useState(false)
  return (
    <div className='mt-6'>
      <SettingsHeader title='Security' icon={Lock}>
        <SwitchComponent title='Two Factor Authentication' isOn={twoFactor} onToggle={()=>setTwoFactor(!twoFactor)}/>
        <ButtonComp name='Change Password'/>
      </SettingsHeader>


    </div>
  )
}

export default Security
