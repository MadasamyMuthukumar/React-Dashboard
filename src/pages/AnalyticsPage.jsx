import React from 'react'
import OverviewCards from '../components/analytics/OverviewCards'
import Header from '../components/common/Header'
import RevenueChart from '../components/analytics/RevenueChart'
import ChannelPerformance from '../components/analytics/ChannelPerformance'
import ProductPerformance from '../components/analytics/ProductPerformance'
import UserRetentionChart from '../components/analytics/UserRetentionChart'
import CustomerSegmentation from '../components/analytics/CustomerSegmentation'
import Insights from '../components/analytics/Insights'
const AnalyticsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
            <Header title={"Analytics"} />
            <main className='container mx-auto py-6 px-4 lg:px-8'>
                <OverviewCards />
                <RevenueChart />
                <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <ChannelPerformance />
                    <ProductPerformance/>
                    <UserRetentionChart/>
                    <CustomerSegmentation/>
                </div>
                <Insights/>
            </main>
        </div>
    )
}

export default AnalyticsPage
