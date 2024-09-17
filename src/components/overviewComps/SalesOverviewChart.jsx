import React from 'react'
import { salesData } from '../../constants'
import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { div } from 'framer-motion/client';
import LineChartComp from '../common/LineChartComp';
const SalesOverviewChart = () => {
    return (
        <>
        <LineChartComp name='Sales Overview' data={salesData} x_key='name' stroke_key='sales'/>
        </>
    )
}

export default SalesOverviewChart
