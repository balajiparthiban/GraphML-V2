import DataBox from '../../component/DataBox'
import SeniorChart from '../../component/SeniorManagementChart'
import { ForecastedDataFor6Months } from "../../json/v2/Forecast_Data_with_6M_Predictions"
import { useState } from 'react'
import './style.scss'

const SeniorManagement = () => {

    const [ForecastData] = useState({
        // labels: Campaign.map((data) => data.__EMPTY),
        // labels: ForecastedDataFor6Months.map((data) => data.Month),

        datasets: [
            // {
            //     label: 'Email Campaign 1',
            //     data: AllProduct.map((data) => (data.email_campaign1)),
            //     backgroundColor: ["#6C4AB6"],
            //     order: 2
            // },
            // {
            //     label: 'Email Campaign 2',
            //     data: AllProduct.map((data) => (data.email_campaign2)),
            //     backgroundColor: ["#8EC3B0"],
            //     order: 2
            // },
            // {
            //     label: 'Phone Call',
            //     data: AllProduct.map((data) => (data.phone_call)),
            //     backgroundColor: ["#9ED5C5"],
            //     order: 2
            // },
            {
                label: 'Total',
                data: ForecastedDataFor6Months.map((data) => (data.Total)),
                backgroundColor: ["#BCEAD5"],
                order: 2,
                type: 'line',
                borderColor: [
                    '#B9E0FF',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 8,
            },


            // {
            //     label: 'Product 2',
            //     data: ForecastedDataFor6Months.map((data) => (data.email_campaign1_and_phone_call)),
            //     backgroundColor: ["#B9E0FF"],
            //     order: 2
            // },
            // {
            //     label: 'Product 3',
            //     data: ForecastedDataFor6Months.map((data) => (data.email_campaign2_and_phone_call)),
            //     backgroundColor: ["#8D9EFF"],
            //     order: 2
            // },
            // {
            //     label: 'Product 4',
            //     data: ForecastedDataFor6Months.map((data) => (data.all_channels)),
            //     backgroundColor: ["#8D72E1"],
            //     order: 2
            // },
        ]

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
                            <SeniorChart chartData={ForecastData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeniorManagement