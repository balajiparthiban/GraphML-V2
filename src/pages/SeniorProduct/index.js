import { useState, useContext } from 'react'
import DataBox02 from '../../component/DataBox02'
import SMProductPieChartBase from '../../component/SMProductPieChartBase'
import SMProductBarChartBase from '../../component/SMProductBarChartBase'
import { SMProductBarChart } from '../../json/v2/SMProductBarChart'
import { SMProductPieChart } from '../../json/v2/SMProductPieChart'
import ProductTable01 from '../../component/SeniorProductTable/ProductTable01'
import {TableContext} from "../../context/tableContext";
import './style.scss'


const SeniorProduct = () => {

    const { tableState, updateTableState } = useContext(TableContext);

    const [productBarChart] = useState({
        labels: SMProductBarChart.map((data) => data.Month),
        datasets: [
            {
                label: 'Loan',
                data: SMProductBarChart.map((data) => (data.Loans)),
                backgroundColor: ["#8EC3B0"],
            },
            {
                label: 'Credit Card',
                data: SMProductBarChart.map((data) => (data.Credit_Cards)),
                backgroundColor: ["#6C4AB6"],
            },
        ],

    });

    const [ProductSalesContributionChart] = useState({
        // labels: Campaign.map((data) => data.__EMPTY),
        // labels: AllProduct.map((data) => data.Month),
        // options: {
        //     scales: {
        //         xAxes: [{
        //             gridLines: {
        //                 drawOnChartArea: false
        //             }
        //         }],
        //         yAxes: [{
        //             gridLines: {
        //                 drawOnChartArea: false
        //             }
        //         }]
        //     }
        // },
        // labels: ["Loan", "Credit Cards"],

        // labels: [ "Credit Card", "Loan" ],
        // datasets: [
        //     {
        //         data: [13311, 16839],
        //         label: ["Loan", "Credit Cards"],
        //         type: 'pie',
        //         order: 1,
        //         backgroundColor: [
        //             '#8EC3B0',
        //             '#6C4AB6',
        //         ],

        //         borderColor: [
        //             'rgba(255,99,132,1)',
        //             'rgba(54, 162, 235, 1)',
        //         ],
        //         borderWidth: 0,
        //         height: 100,
        //         fill: {
        //           target: "origin", // 3. Set the fill options
        //           above: ["#faebd7"]
        //         }
        //     },
        // ],

        datasets: [
            {
                label: 'Loan',
                data: SMProductPieChart.map((data) => (data.loans)),
                backgroundColor: ["#8EC3B0"],
                type: 'pie',
            },
            {
                label: 'Credit Card',
                data: SMProductPieChart.map((data) => (data.credit_cards)),
                backgroundColor: ["#6C4AB6"],
                type: 'pie',
            },
        ],
    });

    return (
        <div className='senior-product'>
            <h3>Senior Manager - Product Sales Analysis</h3>

            <div className='top-section'>
                <DataBox02 />
                <div className='chart-flex'>
                    <div className="chart-wrapper-bg">
                        <div className="chart-wrapper">
                            <h3>Product Sales Share Breakdown</h3>
                            <SMProductPieChartBase chartData={ProductSalesContributionChart} />
                        </div>
                    </div>
                    <div className="chart-wrapper-bg">
                        <div className="chart-wrapper">
                            <h3>Sales Chart</h3>
                            <SMProductBarChartBase chartData={productBarChart} />
                        </div>
                    </div>
                </div>
            </div>

            <h3>Product Prioritization for Targeting Specific Customer Segment</h3>


            <ProductTable01 items={tableState} updateStatus={updateTableState} />

        </div>
    )
}

export default SeniorProduct