import Table01 from '../../component/SeniorManageTable01'
import DataBox02 from '../../component/DataBox02'
import SeniorChart from '../../component/SeniorManagementChart'
import { AllProduct } from "../../json/campaign_copy"
import { useState } from 'react'
import './style.scss'


const SeniorProduct = () => {

    const [userData] = useState({
        // labels: Campaign.map((data) => data.__EMPTY),
        labels: AllProduct.map((data) => data.Month),
        datasets: [
            {
                label: 'Total Sales',
                // data: [361609, 187344, 216253, 357834, 280355, 186708],
                data: [361609, 187344, 216253, 357834],
                type: 'pie',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#6C4AB6',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
                // height: 100,
                // fill: {
                //   target: "origin", // 3. Set the fill options
                //   above: ["#faebd7"]
                // }
            }
        ],
    });



    const [userData02] = useState({
        // labels: Campaign.map((data) => data.__EMPTY),
        labels: AllProduct.map((data) => data.Month),
        datasets: [
            {
                label: 'Email Campaign 1',
                data: AllProduct.map((data) => (data.email_campaign1)),
                backgroundColor: ["#6C4AB6"],
                order: 2
            },
            {
                label: 'Email Campaign 2',
                data: AllProduct.map((data) => (data.email_campaign2)),
                backgroundColor: ["#8EC3B0"],
                order: 2
            },
            {
                label: 'Phone Call',
                data: AllProduct.map((data) => (data.phone_call)),
                backgroundColor: ["#9ED5C5"],
                order: 2
            },
            {
                label: 'Email Campaign 1 & 2',
                data: AllProduct.map((data) => (data.email_campaign1_and_2)),
                backgroundColor: ["#BCEAD5"],
                order: 2
            },
            {
                label: 'Email Campaign 1 & Phone Call',
                data: AllProduct.map((data) => (data.email_campaign1_and_phone_call)),
                backgroundColor: ["#B9E0FF"],
                order: 2
            },
            {
                label: 'Email Campaign 2 & Phone Call',
                data: AllProduct.map((data) => (data.email_campaign2_and_phone_call)),
                backgroundColor: ["#8D9EFF"],
                order: 2
            },
            {
                label: 'All Channels',
                data: AllProduct.map((data) => (data.all_channels)),
                backgroundColor: ["#8D72E1"],
                order: 2
            },
        ],

    });


    return (
        <div className='admin-summary'>
            <h3>Senior Product</h3>

            <div className='top-section'>
                <DataBox02 />
                <div>
                    <h3>Product Sales Contribution</h3>
                    <SeniorChart chartData={userData} />
                </div>
                <div>
                    <h3>Sales Chart</h3>
                    <SeniorChart chartData={userData02} />
                </div>
            </div>

            <h3>Overview Table</h3>
            <Table01 />
        </div>
    )
}

export default SeniorProduct