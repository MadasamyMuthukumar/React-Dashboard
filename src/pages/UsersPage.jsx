import React from 'react'
import { motion } from 'framer-motion'
import { userGrowthData, userStats } from '../constants'
import Header from '../components/common/Header'
import InfoCard from '../components/common/InfoCard'
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import UsersTable from '../components/Users/UsersTable'
import UserActivityHeatMap from '../components/Users/UserActivityHeatMap'
import UserDemographic from '../components/Users/UserDemographic'
import LineChartComp from '../components/common/LineChartComp'
import UserGrowthChart from '../components/Users/UserGrowthChart'

const UsersPage = () => {
  return (
    <div className='w-full overflow-auto relative z-10'>
    <Header title="Users" />

    {/**main content goes here.. */}
    <main className='container mx-auto p-4 sm:px-6 lg:px-8 py-6'>
        <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <InfoCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
            <InfoCard name='Active Users' icon={UserCheck} value={userStats.activeUsers.toLocaleString()} color='#F59E0B' />
            <InfoCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
            <InfoCard name='Total Users' icon={UsersIcon} value={userStats.totalUsers.toLocaleString()} color='#6366F1' />
        </motion.div>

        {/**CHARTS */}

        <UsersTable/>

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8'>
            {/* <LineChartComp name='Users Growth' data={userGrowthData}/> */}
            <UserGrowthChart/>            
            <UserActivityHeatMap/>
            <UserDemographic/>
           
        </div>
    </main>
     
     {/* <div className='m-4'> */}
   
    {/* </div> */}

    </div>
  )
}

export default UsersPage
