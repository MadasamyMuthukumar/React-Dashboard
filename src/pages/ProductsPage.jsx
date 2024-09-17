import React from 'react'
import Header from '../components/common/Header'
import InfoCard from "../components/common/InfoCard";
import { motion } from 'framer-motion';

import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from '../components/products/ProductTable';

import SalesTrendChart from '../components/products/SalesTrendChart';
import CategoryChart from '../components/overviewComps/CategoryChart';
const ProductsPage = () => {
  return (
    <div className='w-full overflow-auto relative z-10'>
            <Header title="Products" />

        {/* Main content area */}
        <main className='container mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<InfoCard name='Total Products' icon={Package} value={1234} color='#6366F1' />
					<InfoCard name='Top Selling' icon={TrendingUp} value={89} color='#10B981' />
					<InfoCard name='Low Stock' icon={AlertTriangle} value={23} color='#F59E0B' />
					<InfoCard name='Total Revenue' icon={DollarSign} value={"$543,210"} color='#EF4444' />
				</motion.div>
            
            {/**Table */}
                <ProductTable/>

            {/**Charts */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <SalesTrendChart/>
                <CategoryChart/>
            
            </div>


            </main>

      
    </div>
  )
}

export default ProductsPage
