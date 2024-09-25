import React from 'react'
import SettingsHeader from './SettingsHeader'
import { User } from 'lucide-react'
import ButtonComp from './ButtonComp'

const Profile = () => {
    return (
        <SettingsHeader icon={User} title='Profile'>
            <div className='flex flex-col sm:flex-row items-center mb-6'>
                {/* profile image */}
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile"
                    className='rounded-full w-20 h-20 object-cover mr-4' />

                {/* name and email */}
                <div>
                    <h3 className='font-semibold text-lg text-gray-100'>Joshua Christ</h3>
                    <p className='text-gray-400'>joshua@gmail.com</p>
                </div>

            </div>
            {/* 'bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto' */}
            <ButtonComp name='Edit Profile'/>
        </SettingsHeader>
    )
}

export default Profile
