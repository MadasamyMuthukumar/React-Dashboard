import React from 'react'
import { salesByCategory } from '../../constants'
import PieChartComp from '../common/PieChartComp'
const SalesByCategoryChart = () => {
    return (
        <>
        <PieChartComp name='Sales By Category' data={salesByCategory} dataKey='value'/>
        </>
    )
}

export default SalesByCategoryChart
