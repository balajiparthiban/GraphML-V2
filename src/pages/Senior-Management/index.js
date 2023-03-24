import { useState } from 'react'
import DataBox from '../../component/DataBox'
import SeniorChart from '../../component/SeniorManagementChart'
import { AllProduct } from "../../json/campaign_copy"
import './style.scss'

const SeniorManagement = () => {

    const [userData] = useState({
        // labels: Campaign.map((data) => data.__EMPTY),
        labels: AllProduct.map((data) => data.Month),
        datasets: [
            {
                label: 'Total Sales',
                data: [361609, 187344, 216253, 357834, 280355, 186708],
                type: 'line',
                // backgroundColor: ["#ff0000"],
                order: 1,
                // backgroundColor: [
                //     'rgba(255, 99, 132, 0.2)',
                //     'rgba(54, 162, 235, 0.2)',
                //     'rgba(255, 206, 86, 0.2)',
                //     'rgba(75, 192, 192, 0.2)',
                //     'rgba(153, 102, 255, 0.2)',
                //     'rgba(255, 159, 64, 0.2)'
                // ],
                borderColor: [
                    '#D0DFFC',
                    '#3085cf',
                    '#ff0000',
                    '#ffaa99',
                    '#9978a6',
                    '#2fb959',
                ],
                borderWidth: 8,
                // fill: {
                //   target: "origin", // 3. Set the fill options
                //   above: ["#faebd7"]
                // }
            },

        ],

    });


    return (
        <div>
            <div className='head'>
                <h3>Senior Manager</h3>
            </div>

            <div>
                <DataBox />
                <div className='chart-flex'>
                    <div className='chart-wrapper-bg w-96'>
                        <div className='chart-wrapper w-50'>
                            <h3>Sales Forecast Chart</h3>
                            <SeniorChart chartData={userData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeniorManagement