import React from 'react'

import { categoryData } from '../../constants'
import PieChartComp from '../common/PieChartComp'
const CategoryChart = () => {
    return (
        <>
        <PieChartComp name='Category' data={categoryData} dataKey='value'/>
        </>
    )
    
}

export default CategoryChart
