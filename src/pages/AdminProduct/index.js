import React from "react";
import { useState } from 'react'
import Table03 from '../../component/ExecutiveTable01'
import Table04 from '../../component/ExecutiveTable02'
import AdminProductChart from '../../component/AdminProductChart'
import { AdminProductBarChartTab01 } from "../../json/v2/AdminProductBarChartTab01"

import { AdminProductTableTab01 } from '../../json/v2/AdminProductTableTab01'

import adminproductable from '../../json/v2/AdminProductTableTab01.json'

// import * as AdminProductTableTab01 from '../../json/v2/AdminProductTableTab01'



// import * as FilterData from "../../json/campaign_copy"
// import * as Product1 from "../../json/campaign_copy"
// import * as SalesData from "../../json/campaign_copy"
import './style.scss'

const AdminProduct = () => {

    const [items, setItems] = useState(AdminProductTableTab01)

    const updateStatus = (id, newStatus) => {
        let allItems = items;
        allItems = items.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newStatus;
            }
            return item
        })
        setItems(allItems)
    }


    // Tab01-Line-Chart
    const [AdminProductLineChartTabo1] = useState({
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            }
        },

        labels: ["Loans"],

        datasets: [
            {
                label: 'Total Sales',
                data: [3040, 3111, 2730, 2868, 2752, 2338],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#8D72E1',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#bbaaf1',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
                // height: 100,
                // fill: {
                //   target: "origin", // 3. Set the fill options
                //   above: ["#faebd7"]
                // }
            }
        ],
    });


    // Tab01-Bar-Chart
    const [adminProductBarChart] = useState({
        labels: AdminProductBarChartTab01.map((data) => data.Month),
        datasets: [
            {
                label: 'Discount Mail',
                data: AdminProductBarChartTab01.map((data) => (data.Discount_main)),
                backgroundColor: ["#BCEAD5"],
            },
            {
                label: 'Promotional Mail',
                data: AdminProductBarChartTab01.map((data) => (data.Promotional_mail)),
                backgroundColor: ["#B9E0FF"],
            },
            {
                label: 'Phone Call',
                data: AdminProductBarChartTab01.map((data) => (data.Phone_call)),
                backgroundColor: ["#8D9EFF"],
            },
            {
                label: 'Push Notification',
                data: AdminProductBarChartTab01.map((data) => (data.Push_notification)),
                backgroundColor: ["#8D72E1"],
            },
            {
                label: 'Loyalty Mail',
                data: AdminProductBarChartTab01.map((data) => (data.Loyalty_mail)),
                backgroundColor: ["#8D72E1"],
            }
        ],
    });


    return (
        <div className='admin-campaign'>
            <div className='admin-campaign-head'>
                <h3>Admin Product</h3>

                <div className='admin-campaign-head-right'>
                    <h6>Total Sales of particular: <span>320L</span></h6>
                </div>

            </div>


            <div>

                <div className="chart-flex">
                <div className='white-bg width-49'>
                    <AdminProductChart chartData={adminProductBarChart} />
                </div>

                <div className='white-bg width-49'>
                    <AdminProductChart chartData={AdminProductLineChartTabo1} />
                </div>
                </div>

                <Table03 items={items} setItems={setItems} updateStatus={updateStatus} />
                <Table04 items={items} setItems={setItems} updateStatus={updateStatus} />

                <div className="button-wrapper">
                    <button className="button-style">Send Campaign</button>
                </div>
            </div>

        </div>
    )
}

export default AdminProduct