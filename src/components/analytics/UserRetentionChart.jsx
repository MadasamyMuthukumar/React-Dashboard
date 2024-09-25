import React from 'react'
import LineChartComp from '../common/LineChartComp'
import { userRetentionData } from '../../constants'

const UserRetentionChart = () => {
  return (
  <>
  <LineChartComp data={userRetentionData} name='User Retention' x_key='name' stroke_key='retention' />
  </>
  )
}

export default UserRetentionChart
