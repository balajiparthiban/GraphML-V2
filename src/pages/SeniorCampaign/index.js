import SMCampaignOverviewTable from '../../component/SeniorManageTableCampaign'
import DataBox01 from '../../component/DataBox01'
import SMCampaignBarChartBase from '../../component/SMCampaignBarChartBase'
import SMCampaignLineChartBase from '../../component/SMCampaignLineChartBase'
import SMCampaignPieChartBase from '../../component/SMCampaignPieChartBase'
import { SMCampaignBarChart } from "../../json/v2/SM-Campaign-Bar-Chart"
import { SMCampaignLineChart } from "../../json/v2/SMCampaignLineChart"
import { SMCampaignPieChart } from "../../json/v2/SMCampaignPieChart"
import { useState } from 'react'
import './style.scss'

const SeniorCampaign = () => {

    const [campaignLineChart] = useState({
        labels: SMCampaignLineChart.map((data) => data.Month),

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
                backgroundColor: ["#7DC2E1"],
            }
        ],

    });


    const [campaignPieChart] = useState({
        labels: SMCampaignPieChart.map((data) => data.Month),
        datasets: [
            {
                data: [12053, 14782, 4643, 25463, 7233],
                labels: ["Discount Main", "Promotional Mail", "Phone Call", "Push Notification", "Loyalty Mail"],
                type: 'pie',
                backgroundColor: [
                    '#8EC3B0',
                    '#6C4AB6',
                    '#BCEAD5',
                    '#8D72E1',
                    '#8D9EFF'
                ],
            },
        ],
    });


    return (
        <div className='senior-campaign'>
            <h3>Senior Manager - Campaign Performance Analysis</h3>

            <div className='top-section'>
                <DataBox01 />


                <div className='chart-flex'>
                    <div className="chart-wrapper-bg">
                        <div className="chart-wrapper">
                            <h3>Monthly Campaigns Delivery Analysis </h3>
                            <SMCampaignPieChartBase chartData={campaignPieChart} />
                        </div>
                    </div>
                    <div className="chart-wrapper-bg">
                        <div className="chart-wrapper">
                            <h3>Analysing Campaign Volume: A 6-Month Chart Overview</h3>
                            <SMCampaignLineChartBase chartData={campaignLineChart} />
                        </div>
                    </div>
                </div>

                <div className='chart-flex'>
                    <div className="chart-wrapper-bg w-100">
                        <div className="chart-wrapper">
                            <h3>Monthly Campaigns Delivery Analysis </h3>
                            <SMCampaignBarChartBase chartData={campaignBarChart} />
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