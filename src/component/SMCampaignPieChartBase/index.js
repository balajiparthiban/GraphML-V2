import React from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart } from "chart.js"
import './style.scss'


Chart.defaults.datasets.bar.maxBarThickness = 85;
// const PieChart = require("react-chartjs").Pie;


export const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
        },
        legend: {
            display: true,
            rtl: true,
            text: 'Chart.js Bar Chart - Stacked',
            position: 'right',
            labels: {
                usePointStyle: true,
                display: true,
                pointStyle: 'circle',
                padding: 20,
            },
        },
        datalabels: {
            display: true,
        },
    },

    responsive: true,

    scales: {
        x: {
            stacked: true,
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
            stacked: true,
            grid: {
                drawBorder: false,
                lineWidth: 0 // <-- this removes vertical lines between bars
            },

            title: {
                display: false,
                text: 'Campaign Sent'
            },
            ticks: {
                beginAtZero: false,
                min: 0,
                max: 300000,
                stepSize: 150000,
                display: false
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


{/*
export const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
        },
        legend: {
            display: true,
            rtl: false,
            text: 'Chart.js Bar Chart - Stacked',
            position: 'right',
            labels: {
                usePointStyle: true,
                display: true,
                pointStyle: 'circle',
                padding: 20,
            }
        },
        datalabels: {
            display: false,
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

            labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
        },

        y: {
            stacked: false,
            grid: {
                drawBorder: false,
                lineWidth: 0 // <-- this removes vertical lines between bars
            },

            title: {
                display: false,
                text: 'Campaign Sent'
            },
            ticks: {
                beginAtZero: false,
                min: 0,
                max: 300000,
                stepSize: 150000,
                display: false
            }
        },

        y: {
            stacked: false,
            title: {
                fontColor: "blue",
                display: true,
                text: 'SALES NUMBER'
            },
            ticks: {
                beginAtZero: true,
                // min: 0,/
                max: 9000000,
                stepSize: 100000
            }

        },
    },
};
*/}



const MyChart = ({ chartData }) => {
    return (
        <>
            {/* <h3 className='head'>Sales Forecast Chart</h3> */}
            <Bar options={options} data={chartData} />
        </>
    )
}

export default MyChart