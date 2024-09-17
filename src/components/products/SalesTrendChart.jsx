import React from 'react'
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { salesDatas } from '../../constants';
import LineChartComp from '../common/LineChartComp';
const SalesTrendChart = () => {
  return (
    <>
    <LineChartComp name='Sales Trend' data={salesDatas} x_key='month' stroke_key='sales'/>
    </>
  )
}

export default SalesTrendChart
