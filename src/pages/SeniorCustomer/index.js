import SMCustomerOverviewTable from '../../component/SeniorManageTableCustomer'
import DataBox03 from '../../component/DataBox03'
import SeniorChart from '../../component/SeniorManagementChart'
import SeniorCustomerBarChartBase from '../../component/SMCustomerBarChartBase'
import { SMCustomerBarChart } from "../../json/v2/SMCustomerBarChart"
import { useState } from 'react'
import './style.scss'


const SeniorCustomer = () => {

    const [customerBarChart] = useState({

        labels: SMCustomerBarChart.map((data) => data.Month),
        datasets: [
            // {
            //     label: 'Product',
            //     data: SMCustomerBarChart.map((data) => (data.Product)),
            //     backgroundColor: ["#BCEAD5"],
            //     order: 2
            // },
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

            <h3>Senior Customer</h3>

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
                        {/* <SeniorChart chartData={userData} /> */}
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