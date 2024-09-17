import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import InfoCard from '../components/common/InfoCard'
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from '../components/overviewComps/SalesOverviewChart';
import CategoryChart from '../components/overviewComps/CategoryChart';
import SalesChannelChart from '../components/overviewComps/SalesChannelChart';
import PieChartComp from '../components/common/PieChartComp';
import { categoryData } from '../constants';

const OverviewPage = () => {
    return (
        //w-full or flex-1 to make the header take entire remaining space
        <div className='w-full overflow-auto relative z-10'>
            <Header title="Overview" />

            {/**main content goes here.. */}
            <main className='container mx-auto p-4 sm:px-6 lg:px-8 py-6'>
                <motion.div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    <InfoCard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
                    <InfoCard name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
                    <InfoCard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
                    <InfoCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />

                </motion.div>

                {/**CHARTS - grid of two chars
                 */}
                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                 <SalesOverviewChart/>
                 <CategoryChart/>
                 {/* <PieChartComp name='Category' data={categoryData} dataKey='value'/> */}
                 </div>
                 <SalesChannelChart/>
            </main>
        </div>


    )
}

export default OverviewPage
