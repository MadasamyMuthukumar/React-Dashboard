import React from 'react'
import PieChartComp from '../common/PieChartComp'
import { orderStatusData } from '../../constants'

const OrderDistribution = () => {
  return (
    <>
    <PieChartComp name='Order Status Distribution' data={orderStatusData} dataKey='value'/>
    </>
  )
}

export default OrderDistribution
