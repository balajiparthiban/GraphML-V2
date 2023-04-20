import DataBox from '../../component/DataBox'
import SMSalesForecastChart from '../../component/SMSalesForecastChart'
import { ForecastedDataFor6Months } from "../../json/v2/Forecast_Data_with_6M_Predictions"
import { useState } from 'react'
import './style.scss'

const SeniorManagement = () => {

    const [ForecastData] = useState({
        // labels: Campaign.map((data) => data.__EMPTY),
        // labels: ForecastedDataFor6Months.map((data) => data.Month),

        datasets: [
            {
                label: '',
                data: ForecastedDataFor6Months.map((data) => (data.Total)),
                // backgroundColor: ["#BCEAD5"],
                order: 2,
                type: 'line',
                borderColor: [
                    '#7DC2E1',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 5,
            },
            {
                label: '',
                 data: [, , , , , , , , , , , ,4178 ,4327, 3898, 3706, 3378, 3083],
                // data: ForecastedDataFor6Months.map((data) => (data.Total)),
                // backgroundColor: ["#BCEAD5"],
                order: 2,
                type: 'line',
                borderColor: [
                    '#FF0000',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderDash: [3,2],
                borderWidth: 5,
            },
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
                            <SMSalesForecastChart chartData={ForecastData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeniorManagement