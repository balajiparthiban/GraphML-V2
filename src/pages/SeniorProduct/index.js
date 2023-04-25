// import SeniorManageProductTable from '../../component/SeniorManageProductTable'
import DataBox02 from '../../component/DataBox02'
import SMProductPieChartBase from '../../component/SMProductPieChartBase'
import SMProductBarChartBase from '../../component/SMProductBarChartBase'
import { SMProductBarChart } from '../../json/v2/SMProductBarChart'
import { SMProductPieChart } from '../../json/v2/SMProductPieChart'
import { useState, useContext } from 'react'
import './style.scss'
import ProductTable01 from '../../component/SeniorProductTable/ProductTable01'
// import ProductTable02 from '../../component/SeniorProductTable/ProductTable02'
import {TableContext} from "../../context/tableContext";


const SeniorProduct = () => {

    const { tableState, updateTableState } = useContext(TableContext);

    // const [items, setItems] = useState([
    //     {
    //         id: 1,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub1_atomic_5",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "min_Month_payment",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.0272093823559074,
    //         Rank: 1,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 2,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub1_atomic_1",
    //         Total_Customers: 26,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Interest_rate",
    //         Effect: 0.0265613557356155,
    //         Rank: 2,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 3,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub1_atomic_2",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "payment_value",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.0257523652449467,
    //         Rank: 3,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 4,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub1_atomic_4",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Interest_rate",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.0257056782993344,
    //         Rank: 4,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 5,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub1_atomic_3",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Payment_frequency",
    //         Effect: 0.0237887381041695,
    //         Rank: 5,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 6,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub2_atomic_5",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Tenure",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.016235284933149,
    //         Rank: 6,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 7,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub2_atomic_2",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Interest_rate",
    //         Effect: 0.0157860556146664,
    //         Rank: 7,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 8,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub2_atomic_3",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Payment_frequency",
    //         Effect: 0.0157189589297336,
    //         Rank: 8,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 9,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub2_atomic_1",
    //         Total_Customers: 26,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Interest_rate",
    //         Effect: 0.0156387142405059,
    //         Rank: 9,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 10,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub2_atomic_4",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Payment_frequency",
    //         Effect: 0.0154528182505771,
    //         Rank: 10,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 11,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub3_atomic_3",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "min_Month_payment",
    //         Effect: 0.0116511325325091,
    //         Rank: 11,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 12,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub3_atomic_5",
    //         Total_Customers: 24,
    //         Positive_impacted_feature: "Tenure",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.0116184228844836,
    //         Rank: 12,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 13,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub3_atomic_2",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Interest_rate",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.0114484029470668,
    //         Rank: 13,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 14,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub3_atomic_4",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Payment_frequency",
    //         Effect: 0.0112642179622225,
    //         Rank: 14,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 15,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub3_atomic_1",
    //         Total_Customers: 26,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Interest_rate",
    //         Effect: 0.0109492869506782,
    //         Rank: 15,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 16,
    //         Product: "Loan",
    //         Recommended_campaign: "Promotional Email",
    //         Customer_segment: "Segment_1_Promo_sub1_atomic_3",
    //         Total_Customers: 19,
    //         Positive_impacted_feature: "Interest_rate",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.0109101030053237,
    //         Rank: 16,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 17,
    //         Product: "Loan",
    //         Recommended_campaign: "Promotional Email",
    //         Customer_segment: "Segment_1_Promo_sub1_atomic_4",
    //         Total_Customers: 19,
    //         Positive_impacted_feature: "Interest_rate",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.0107876798200393,
    //         Rank: 17,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 18,
    //         Product: "Loan",
    //         Recommended_campaign: "Promotional Email",
    //         Customer_segment: "Segment_1_Promo_sub1_atomic_5",
    //         Total_Customers: 18,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "min_Month_payment",
    //         Effect: 0.0107012540126826,
    //         Rank: 18,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 19,
    //         Product: "Loan",
    //         Recommended_campaign: "Promotional Email",
    //         Customer_segment: "Segment_1_Promo_sub1_atomic_1",
    //         Total_Customers: 20,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "min_Month_payment",
    //         Effect: 0.0106024386731964,
    //         Rank: 19,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 20,
    //         Product: "Loan",
    //         Recommended_campaign: "Promotional Email",
    //         Customer_segment: "Segment_1_Promo_sub1_atomic_2",
    //         Total_Customers: 19,
    //         Positive_impacted_feature: "Interest_rate",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.0104665471239033,
    //         Rank: 20,
    //         status: 'Pending'
    //     },
    //     {
    //
    //         id: 21,
    //         Product: "Loan",
    //         Recommended_campaign: "Discount Email",
    //         Customer_segment: "Segment_1_Discount_sub1_atomic_3",
    //         Total_Customers: 23,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Payment_frequency",
    //         Effect: 0.00940140239429003,
    //         Rank: 21,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 22,
    //         Product: "Loan",
    //         Recommended_campaign: "Discount Email",
    //         Customer_segment: "Segment_1_Discount_sub1_atomic_1",
    //         Total_Customers: 23,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Interest_rate",
    //         Effect: 0.00898906188785803,
    //         Rank: 22,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 23,
    //         Product: "Loan",
    //         Recommended_campaign: "Discount Email",
    //         Customer_segment: "Segment_1_Discount_sub1_atomic_2",
    //         Total_Customers: 23,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Interest_rate",
    //         Effect: 0.00887516372192884,
    //         Rank: 23,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 24,
    //         Product: "Loan",
    //         Recommended_campaign: "Discount Email",
    //         Customer_segment: "Segment_1_Discount_sub1_atomic_4",
    //         Total_Customers: 23,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Payment_frequency",
    //         Effect: 0.00866372591717527,
    //         Rank: 24,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 25,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub4_atomic_1",
    //         Total_Customers: 26,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Interest_rate",
    //         Effect: 0.00846481783344548,
    //         Rank: 25,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 26,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub4_atomic_4",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "payment_value",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.00838481571182752,
    //         Rank: 26,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 27,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub4_atomic_5",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Current_statement_month",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.0082462154509453,
    //         Rank: 27,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 28,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub4_atomic_2",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "min_Month_payment",
    //         Effect: 0.00818939253671305,
    //         Rank: 28,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 29,
    //         Product: "Loan",
    //         Recommended_campaign: "Loyalty",
    //         Customer_segment: "Segment_1_Loyalty_sub4_atomic_3",
    //         Total_Customers: 25,
    //         Positive_impacted_feature: "Interest_rate",
    //         Negative_impacted_feature: "Early_buy_out",
    //         Effect: 0.00815399194561762,
    //         Rank: 29,
    //         status: 'Pending'
    //     },
    //     {
    //         id: 30,
    //         Product: "Loan",
    //         Recommended_campaign: "Discount Email",
    //         Customer_segment: "Segment_1_Discount_sub1_atomic_5",
    //         Total_Customers: 22,
    //         Positive_impacted_feature: "Early_buy_out",
    //         Negative_impacted_feature: "Payment_frequency",
    //         Effect: 0.00804884080282734,
    //         Rank: 30,
    //         status: 'Pending'
    //     },
    // ]);
    //
    //
    // const updateStatus = (id, newStatus) => {
    //     // alert('balaji items')
    //     let allItems = items;
    //     allItems = allItems.map(item => {
    //         if (item.id === id) {
    //             console.log('in here')
    //             item.status = newStatus;
    //             // alert('balaji items' + item.status)
    //
    //         }
    //         return item
    //     })
    //     setItems(allItems)
    //     // alert('balaji items')
    //
    // }

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

            {/* <SeniorManageProductTable /> */}

            <ProductTable01 items={tableState} updateStatus={updateTableState} />
            {/*<ProductTable02 items={items} updateStatus={updateStatus} />*/}

        </div>
    )
}

export default SeniorProduct