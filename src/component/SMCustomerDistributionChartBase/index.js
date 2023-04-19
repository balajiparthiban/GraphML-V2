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
            stacked: false,
            title: {
                display: true,
                text: 'LAST 6 MONTHS'
            },

            labels: ["Seg_Discount", "Seg_loyalty", "Seg_Promotional_mail", "Seg_Phone_call", "Seg_Push_notification"],
        },

        y: {
            stacked: false,
            title: {
                display: true,
                text: 'Campaign Sent'
            },
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 300000,
                stepSize: 2000
            }
        },

        // y: {
        //     stacked: false,
        //     // title: {
        //     //     fontColor: "blue",
        //     //     display: true,
        //     //     text: 'SALES NUMBER'
        //     // },
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