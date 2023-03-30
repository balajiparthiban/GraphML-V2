import { useState } from 'react'
import AdminCampaignOverviewTable from '../../component/AdminCampaignOverviewTable'
import { AllProduct } from "../../json/campaign_copy"
import SeniorChart from '../../component/SeniorManagementChart'
import './style.scss'

const AdminCampaign = () => {

    const [userData] = useState({
        // labels: Campaign.map((data) => data.__EMPTY),
        labels: AllProduct.map((data) => data.Month),
        datasets: [
            // {
            //     label: 'Total Sales',
            //     data: [361609, 187344, 216253, 357834, 280355, 186708],
            //     type: 'line',
            //     // backgroundColor: ["#ff0000"],
            //     order: 1,
            //     // backgroundColor: [
            //     //     'rgba(255, 99, 132, 0.2)',
            //     //     'rgba(54, 162, 235, 0.2)',
            //     //     'rgba(255, 206, 86, 0.2)',
            //     //     'rgba(75, 192, 192, 0.2)',
            //     //     'rgba(153, 102, 255, 0.2)',
            //     //     'rgba(255, 159, 64, 0.2)'
            //     // ],
            //     borderColor: [
            //         'rgba(255,99,132,1)',
            //         'rgba(54, 162, 235, 1)',
            //         'rgba(255, 206, 86, 1)',
            //         'rgba(75, 192, 192, 1)',
            //         'rgba(153, 102, 255, 1)',
            //         'rgba(255, 159, 64, 1)'
            //     ],
            //     borderWidth: 8,
            //     // fill: {
            //     //   target: "origin", // 3. Set the fill options
            //     //   above: ["#faebd7"]
            //     // }
            // },

            {
                label: 'Product 1',
                data: AllProduct.map((data) => (data.email_campaign1_and_2)),
                backgroundColor: ["#BCEAD5"],
                order: 2
            },
            {
                label: 'Product 2',
                data: AllProduct.map((data) => (data.email_campaign1_and_phone_call)),
                backgroundColor: ["#B9E0FF"],
                order: 2
            },
            {
                label: 'Product 3',
                data: AllProduct.map((data) => (data.email_campaign2_and_phone_call)),
                backgroundColor: ["#8D9EFF"],
                order: 2
            },
            {
                label: 'Product 4',
                data: AllProduct.map((data) => (data.all_channels)),
                backgroundColor: ["#8D72E1"],
                order: 2
            },

        ],

    });


    return (
        <div className='admin-campaign'>
            <div className='admin-campaign-head'>

                <h3>Admin Campaign</h3>
                <div className='admin-campaign-head-right'>
                    <h6>Total Sales of particular: <span>320L</span></h6>
                    <div className='select-dd'>
                        <select>
                            <option>Campaign 1</option>
                            <option>Campaign 2</option>
                            <option>Campaign 3</option>
                            <option>Campaign 4</option>
                            <option>Campaign 5</option>
                            <option>Campaign 6</option>
                            <option>Campaign 7</option>
                        </select>
                    </div>
                </div>
            </div>


            <div className='chart-flex'>
                <div className="chart-wrapper-bg">
                    <div className="chart-wrapper">
                        <h3>Campaign Performance vs Product</h3>
                        <SeniorChart chartData={userData} />
                    </div>
                </div>

                <div className="chart-wrapper-bg">
                    <div className="chart-wrapper">
                        <h3>Overview Table</h3>
                        <button>Send Campaign</button>
                        <AdminCampaignOverviewTable />
                    </div>
                </div>
            </div>

            <h3 className='table-head'>Product Settings</h3>

            <AdminCampaignOverviewTable />

            <div className="btn">
                <button className='button-style'>Send Campaign</button>
            </div>

        </div>
    )
}

export default AdminCampaign