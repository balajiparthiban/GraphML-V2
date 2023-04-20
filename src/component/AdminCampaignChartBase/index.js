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


Chart.defaults.datasets.bar.maxBarThickness = 55;

export const options = {
    plugins: {
        title: {
            display: false,
            // text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,

    scales: {
        x: {
            stacked: false,
            title: {
                display: true,
                text: 'MONTHS'
            },

            labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
        },

        y: {
            stacked: false,
            title: {
                display: true,
                text: 'CAMPAIGN SENT'
            },
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 300000,
                stepSize: 500
            }
        },

        // y: {
        //     stacked: false,
        //     // title: {
        //     //     fontColor: "blue",
        //     //     display: true,
        //     //     text: 'SALES NUMBER'
        //     // },
       

        // },
    },
};

const MyChart = ({ chartData }) => {
    return (
        <>
            {/* <h3 className='head'>Sales Forecast Chart</h3> */}
            <Bar options={options} data={chartData}  />
        </>
    )
}

export default MyChart