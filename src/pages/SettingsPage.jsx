import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/settings/Profile'
import Notifications from '../components/settings/Notifications'
import Security from '../components/settings/Security'
import ConnectedAccounts from '../components/settings/ConnectedAccounts'
import DeleteSection from '../components/settings/DeleteSection'

const SettingsPage = () => {
  return (
    <div className='w-full overflow-auto relative z-10'>
        <Header title='Settings'/>
        <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8 '>
            <Profile/>
            <Notifications/>
            <Security/>
            <ConnectedAccounts/>
            <DeleteSection/>

        </main>
      
    </div>
  )
}

export default SettingsPage
