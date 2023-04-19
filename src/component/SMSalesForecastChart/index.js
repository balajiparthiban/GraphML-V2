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

    padding: "0px",
    responsive: true,
    maintainAspectRatio: true,
    defaultFontSize: "14px",
    width: "400",
    height: "400",


    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
        },
        legend: {
            display: false
        },
    },


   
    responsive: true,



    scales: {
        x: {
            stacked: true,
            title: {
                display: true,
                text: 'MONTHS'
            },
            labels: ["Apr'22", "May'22", "June'22", "July'22", "Aug'22", "Sep'22", "Oct'22", "Nov'22", "Dec'22", "Jan'23", "Feb'23", "Mar'23", "Apr'23", "May'23", "June'23", "July'23", "Aug'23", "Sep'23"],
        },

        y: {
            title: {
                display: true,
                text: 'PRODUCT SALES'
            },
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 9000,
                stepSize: 1000
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