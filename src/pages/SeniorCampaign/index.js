import SMCampaignOverviewTable from '../../component/SeniorManageTableCampaign'
import DataBox01 from '../../component/DataBox01'
import SMCampaignChartBase from '../../component/SMCampaignChartBase'
import SeniorChart from '../../component/SeniorManagementChart'
import { SMCampaignBarChart } from "../../json/v2/SM-Campaign-Bar-Chart"
import { SMCampaignLineChart } from "../../json/v2/SMCampaignLineChart"
// import { SMCampaignPieChart } from "../../json/v2/SMCampaignPieChart"

import { useState } from 'react'
import './style.scss'

const SeniorCampaign = () => {

    const [campaignLineChart] = useState({
        labels: SMCampaignLineChart.map((data) => data.Month),
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        },
        datasets: [
            {
                label: 'Month',
                type: 'line',
                data: SMCampaignLineChart.map((data) => (data.Month)),
                backgroundColor: ["#8D72E1"],
                borderColor: ["#8D72E1"],
                borderWidth: 8,
            },
            {
                label: 'Count',
                type: 'line',
                data: SMCampaignLineChart.map((data) => (data.Count)),
                backgroundColor: ["#8D72E1"],
                borderColor: [
                    '#8D72E1',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 8,
            },

        ],

    });



    const [campaignBarChart] = useState({
        labels: SMCampaignBarChart.map((data) => data.Month),
        datasets: [
            {
                label: 'Discount Mail',
                data: SMCampaignBarChart.map((data) => (data.Discount_main)),
                backgroundColor: ["#BCEAD5"],
            },
            {
                label: 'Promotional Mail',
                data: SMCampaignBarChart.map((data) => (data.Promotional_mail)),
                backgroundColor: ["#B9E0FF"],
            },
            {
                label: 'Phone Call',
                data: SMCampaignBarChart.map((data) => (data.Phone_call)),
                backgroundColor: ["#8D9EFF"],
            },
            {
                label: 'Push Notification',
                data: SMCampaignBarChart.map((data) => (data.Push_notification)),
                backgroundColor: ["#8D72E1"],
            },
            {
                label: 'Loyalty Mail',
                data: SMCampaignBarChart.map((data) => (data.Loyalty_mail)),
                backgroundColor: ["#8D72E1"],
            }
        ],

    });


    return (
        <div className='senior-campaign'>
            <h3>Senior Campaign</h3>

            <div className='top-section'>
                <DataBox01 />


                <div className='chart-flex'>
                    <div className="chart-wrapper-bg">
                        <div className="chart-wrapper">
                            <h3>Monthly Campaigns Delivery Analysis </h3>
                            {/* <SMCampaignPieChart chartData={campaignPieChart} /> */}
                        </div>
                    </div>
                </div>

                <div className='chart-flex'>

                    <div className="chart-wrapper-bg">
                        <div className="chart-wrapper">
                            <h3>Analysing Campaign Volume: A 6-Month Chart Overview</h3>
                            <SMCampaignChartBase chartData={campaignLineChart} />
                        </div>
                    </div>

                    <div className="chart-wrapper-bg">
                        <div className="chart-wrapper">
                            <h3>Monthly Campaigns Delivery Analysis </h3>
                            <SMCampaignChartBase chartData={campaignBarChart} />
                        </div>
                    </div>
                </div>

            </div>

            <h3>Campaign Overview</h3>
            <SMCampaignOverviewTable />


        </div>
    )
}

export default SeniorCampaign