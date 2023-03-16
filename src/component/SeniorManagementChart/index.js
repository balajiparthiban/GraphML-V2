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
            // stacked: true,
            title: {
                display: true,
                text: 'LAST 6 MONTHS'
            },

            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        // y: {
        //     stacked: false,
        //     title: {
        //         fontColor: "blue",
        //         display: true,
        //         text: 'SALES NUMBER'
        //     },
        //     ticks: {
        //         beginAtZero: true,
        //         // min: 0,/
        //         max: 9000000,
        //         stepSize: 100000
        //     }

        // },
    },
};

const MyChart = ({ chartData }) => {
    return (
        <>
            {/* <h3 className='head'>Sales Forecast Chart</h3> */}
            <Bar options={options} data={chartData} />
        </>
    )
}

export default MyChart