import React from 'react'
import { dailyOrdersData } from '../../constants'
import LineChartComp from '../common/LineChartComp'
const DailyOrders = () => {
  return (
    <>
    <LineChartComp name='Daily Orders' data={dailyOrdersData} stroke_key='orders' x_key='date' />
    </>
  )
}

export default DailyOrders
