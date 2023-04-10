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
                display: false,
                text: 'LAST 6 MONTHS'
            },

            grid: {
                drawBorder: false,
                lineWidth: 0 // <-- this removes vertical lines between bars
            }
            // labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
        },

        y: {

            grid: {
                drawBorder: false, // <-- this removes y-axis line
                lineWidth: function (context) {
                    return context?.index === 0 ? 0 : 1; // <-- this removes the base line
                }
            },
            title: {
                display: false,
                text: 'Campaign Sent'
            },
            ticks: {
                beginAtZero: false,
                min: 0,
                max: 300000,
                stepSize: 150000
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