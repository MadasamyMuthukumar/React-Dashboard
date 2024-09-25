import React from 'react'
import PieChartComp from '../common/PieChartComp'
import { channelData } from '../../constants'

const ChannelPerformance = () => {
    return (
        <>
            <PieChartComp name='Channel Performace' data={channelData} dataKey='value' />
        </>
    )
}

export default ChannelPerformance
