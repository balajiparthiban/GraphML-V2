import SeniorManageProductTable from '../../component/SeniorManageProductTable'
import DataBox02 from '../../component/DataBox02'
import SeniorChart from '../../component/SeniorManagementChart'
import { useState } from 'react'
import './style.scss'


const SeniorProduct = () => {

    const [ProductSalesContributionChart] = useState({
        // labels: Campaign.map((data) => data.__EMPTY),
        // labels: AllProduct.map((data) => data.Month),
        labels: ["Loan", "Credit Cards"],
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

        datasets: [
            {
                label: 'Total Sales',
                data: [16839, 13311],
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
                ],
                borderWidth: 0,
                // height: 100,
                // fill: {
                //   target: "origin", // 3. Set the fill options
                //   above: ["#faebd7"]
                // }
            }
        ],
    });


    return (
        <div className='senior-product'>
            <h3>Senior Manager - Product</h3>

            <div className='top-section'>
                <DataBox02 />
                <div className='chart-flex'>
                    <div className="chart-wrapper-bg">
                        <div className="chart-wrapper">
                            <h3>Product Sales Contribution Chart</h3>
                            <SeniorChart chartData={ProductSalesContributionChart} />
                        </div>
                    </div>
                    <div className="chart-wrapper-bg">
                        <div className="chart-wrapper">
                            <h3>Sales Chart</h3>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Overview Table</h3>

            <SeniorManageProductTable />
        </div>
    )
}

export default SeniorProduct