import { useState } from 'react'
import { AllProduct } from "../../json/campaign_copy"
import TableAdminProduct from '../../component/TableAdminProduct'
import TableAdminProduct2 from '../../component/TableAdminProduct2'
import SeniorChart from '../../component/SeniorManagementChart'
import './style.scss'

const AdminProduct = () => {

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
                data: AllProduct.map((data) => (data.email_campaign1)),
                backgroundColor: ["#6C4AB6"],
                order: 2
            },
            {
                label: 'Product 2',
                data: AllProduct.map((data) => (data.email_campaign2)),
                backgroundColor: ["#8EC3B0"],
                order: 2
            },
            {
                label: 'Product 3',
                data: AllProduct.map((data) => (data.phone_call)),
                backgroundColor: ["#9ED5C5"],
                order: 2
            },
            {
                label: 'Product 4',
                data: AllProduct.map((data) => (data.email_campaign1_and_2)),
                backgroundColor: ["#BCEAD5"],
                order: 2
            },
           

        ],

    });


    return (
        <div className='admin-campaign'>
            <div className='admin-campaign-head'>

                <h3>Admin Product</h3>
                <div className='admin-campaign-head-right'>
                    <h6>Total Sales of particular: <span>320L</span></h6>
                    <div className='select-dd'>
                        <select>
                            <option>Product 1</option>
                            <option>Product 2</option>
                            <option>Product 3</option>
                            <option>Product 4</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='admin-campaign-chart'>
                <h3>Product vs Sales</h3>
                <SeniorChart chartData={userData} />
            </div>

            <button className='button-style'>Send Campaign</button>

            <TableAdminProduct />

            <h3 className='table-head'>Campaign Settings</h3>

            <TableAdminProduct2 />
        </div>
    )
}

export default AdminProduct