import { useState } from 'react'
import DataBox from '../../component/DataBox'
import Table01 from '../../component/SeniorManageTable01'
import SeniorChart from '../../component/SeniorManagementChart'
import { AllProduct } from "../../json/campaign_copy"
import { NavLink } from 'react-router-dom'
// import {CampaignInfo} from '../../json/segment-table'
import Segment from '../../component/Segment'
import Recommendation from '../../component/Recommendation'
import './style.scss'

// import { SalesData } from "../../json/sales";
// import { ITEAllProduct } from "../../json/ITE_all_products_updated_segmentation_new.csv"


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
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
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
                <div className='btn-grp'>
                    <button className='button-style'>What If Scenario</button>
                    <NavLink to="/admin-summary" className='button-style'>Admin Summary</NavLink>
                </div>
            </div>

            <div>
                <DataBox />
                {/* <Table01 /> */}
                <div className='chart-wrapper'>
                    <h3>Sales Forecast Chart</h3>
                    <SeniorChart chartData={userData} />
                    {/* <Recommendation /> */}
                </div>
                {/* <Segment /> */}
            </div>
        </div>
    )
}

export default SeniorManagement