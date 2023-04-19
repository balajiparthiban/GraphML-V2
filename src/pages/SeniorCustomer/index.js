import SMCustomerOverviewTable from '../../component/SeniorManageTableCustomer'
import DataBox03 from '../../component/DataBox03'
import SMCustomerDistributionChartBase from '../../component/SMCustomerDistributionChartBase'
import SeniorCustomerBarChartBase from '../../component/SMCustomerBarChartBase'


import { SMCustomerBarChart } from "../../json/v2/SMCustomerBarChart"
import { SMDistributionBarChart } from "../../json/v2/SMDistributionBarChart"
import { useState } from 'react'
import './style.scss'


const SeniorCustomer = () => {


    const [smDistributionCreditLoanBarChart] = useState({

        // labels: SMDistributionBarChart.map((data) => data.Month),
        datasets: [

            {
                label: 'Discount',
                data: SMDistributionBarChart.map((data) => (data.Seg_Discount)),
                backgroundColor: ["brown"],
                order: 1,
                type: 'bar'
            },
            {
                label: 'Loyalty',
                data: SMDistributionBarChart.map((data) => (data.Seg_loyalty)),
                backgroundColor: ["black"],
                order: 1,
                type: 'bar'
            },
            {
                label: 'Promotional Mail',
                data: SMDistributionBarChart.map((data) => (data.Seg_Promotional_mail)),
                backgroundColor: ["green"],
                order: 1,
                type: 'bar'
            },
            {
                label: 'Phone Call',
                data: SMDistributionBarChart.map((data) => (data.Seg_Phone_call)),
                backgroundColor: ["blue"],
                order: 1,
                type: 'bar'
            },
            {
                label: 'Push Notification',
                data: SMDistributionBarChart.map((data) => (data.Seg_Push_notification)),
                backgroundColor: ["red"],
                order: 1,
                type: 'bar'
            },

        ],

    });


    const [customerBarChart] = useState({
        labels: SMCustomerBarChart.map((data) => data.Month),
        datasets: [
            {
                label: 'Credit Card',
                data: SMCustomerBarChart.map((data) => (data.Credit_Card)),
                backgroundColor: ["#BCEAD5"],
                order: 2
            },
            {
                label: 'Loan',
                data: SMCustomerBarChart.map((data) => (data.loan)),
                backgroundColor: ["#6C4AB6"],
                order: 2
            },
        ],
    });


    return (
        <div className='senior-customer'>

            <h3>Senior Manager - Customer Analysis</h3>

            <div className='top-section'>
                <DataBox03 />
            </div>

            <div className='chart-flex'>
                <div className="chart-wrapper-bg">
                    <div className="chart-wrapper">
                        <h3>Product Sales by Customer Type</h3>
                        <SeniorCustomerBarChartBase chartData={customerBarChart} />
                    </div>
                </div>
                <div className="chart-wrapper-bg">
                    <div className="chart-wrapper">
                        <h3>Segment-Wise Campaign Distribution</h3>
                        <SMCustomerDistributionChartBase chartData={smDistributionCreditLoanBarChart} />
                    </div>
                </div>
            </div>

            <div className='table-section'>
                <h3>Customer Overview Table</h3>
                <SMCustomerOverviewTable />
            </div>

        </div>
    )
}

export default SeniorCustomer