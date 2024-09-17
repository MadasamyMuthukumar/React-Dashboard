import React from 'react'
import LineChartComp from '../common/LineChartComp'
import { userGrowthData } from '../../constants'

const UserGrowthChart = () => {
  return (
    <>
    <LineChartComp name='User Growth' data={userGrowthData} x_key='month' stroke_key='users'/>
    </>
  )
}

export default UserGrowthChart
