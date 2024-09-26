import { motion } from "framer-motion";

import Header from "../components/common/Header";
import InfoCard from "../components/common/InfoCard";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { salesStats } from "../constants";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import PieChartComp from "../components/common/PieChartComp";
import { salesByCategory } from "../constants";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";



const SalesPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Sales' />

			<main className='container mx-auto py-6 px-4 lg:px-8'>
				{/* SALES STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<InfoCard name='Total Revenue' icon={DollarSign} value={salesStats.totalRevenue} color='#6366F1' />
					<InfoCard
						name='Avg. Order Value'
						icon={ShoppingCart}
						value={salesStats.averageOrderValue}
						color='#10B981'
					/>
					<InfoCard
						name='Conversion Rate'
						icon={TrendingUp}
						value={salesStats.conversionRate}
						color='#F59E0B'
					/>
					<InfoCard name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
				</motion.div>

				<SalesOverviewChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<SalesByCategoryChart />
                    {/* <PieChartComp name='Sales by Category' data={salesByCategory} dataKey='value'/> */}
					<DailySalesTrend />
				</div>
			</main>
		</div>
	);
};
export default SalesPage;