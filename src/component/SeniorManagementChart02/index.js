import React from 'react';
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js/auto'
import { Chart } from "chart.js"
import './style.scss'


Chart.defaults.datasets.bar.maxBarThickness = 85;

export const options = {
    plugins: {
        title: {
            display: true,
            // text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: 'LAST 6 MONTHS'
            },
        },
        y: {
            stacked: true,
            title: {
                fontColor: "blue",
                display: false,
                text: 'SALES NUMBER'
            },
            ticks: {
                beginAtZero: true,
                // min: 0,/
                max: 9000000,
                stepSize: 500000
            }

        },
    },
};
const MyChart = ({ chartData02 }) => {
    return (
        <>
            <h3 className='head'>Sales Chart</h3>
            <Bar options={options} data={chartData02} />
        </>
    )
}

export default MyChart