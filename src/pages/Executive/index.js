import React from "react";
import { useState } from 'react'
import DataBox from '../../component/DataBox'
import Table03 from '../../component/ExecutiveTable01'
import Table04 from '../../component/ExecutiveTable02'
import SeniorChart from '../../component/SeniorManagementChart'
import * as FilterData from "../../json/campaign_copy"
import * as SalesData from "../../json/campaign_copy"
import Recommendation from '../../component/Recommendation'
import './style.scss'

const Executive = () => {

    const [items, setItems] = useState([

        {
            id: 1,
            Products: "Product 1",
            Location: "State X",
            Age: "below 20",
            CLV: "Low",
            Attrition_Rate: "0.2",
            Customer_Count: 66224,
            Primary_Positive_Causal: "T4 Email Campaign 1 & 2",
            Primary_Negative_Causal: "T7 All Channels",
            status: 'Pending'
        },
        {
            id: 2,
            Products: "Product 1",
            Location: "State Y",
            Age: "below 20",
            CLV: "Medium",
            Attrition_Rate: "2.0",
            Customer_Count: 277,
            Primary_Positive_Causal: "T4 Email Campaign 1 & 2",
            Primary_Negative_Causal: "T7 All Channels",
            status: 'Pending'
        },
        {
            id: 3,
            Products: "Product 1",
            Location: "State Z",
            Age: "below 20",
            CLV: "High",
            Attrition_Rate: "2.0",
            Customer_Count: 2,
            Primary_Positive_Causal: "T4 Email Campaign 1 & 2",
            Primary_Negative_Causal: "T7 All Channels",
            status: 'Pending'
        },
        {
            id: 4,
            Products: "Product 1",
            Location: "State X",
            Age: "20 to 30",
            CLV: "Low",
            Attrition_Rate: "2.0",
            Customer_Count: 11996,
            Primary_Positive_Causal: "T4 Email Campaign 1 & 2",
            Primary_Negative_Causal: "T7 All Channels",
            status: 'Completed'
        },
        {
            id: 5,
            Products: "Product 1",
            Location: "State Y",
            Age: "20 to 30",
            CLV: "Medium",
            Attrition_Rate: "2.0",
            Customer_Count: 60,
            Primary_Positive_Causal: "T4 Email Campaign 1 & 2",
            Primary_Negative_Causal: "T7 All Channels",
            status: 'Completed'
        },
        {
            id: 6,
            Products: "Product 1",
            Location: "State Z",
            Age: "20 to 30",
            CLV: "High",
            Attrition_Rate: "2.0",
            Customer_Count: 4,
            Primary_Positive_Causal: "T4 Email Campaign 1 & 2",
            Primary_Negative_Causal: "T7 All Channels",
            status: 'Completed'
        }
    ])

    const updateStatus = (id, newStatus) => {
        let allItems = items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newStatus;
            }
            return item
        })
        setItems(allItems)
    }

    const Mapper = {
        AllProduct: 'AllSales',
        Product1: 'Sales1',
        Product2: 'Sales2',
        Product3: 'Sales3',
        Product4: 'Sales4'
    };

    const FilterMapper = {
        AllProduct: 'AllProduct',
        Product1: 'Product1',
        Product2: 'Product2',
        Product3: 'Product3',
        Product4: 'Product4',
    };

    const getSalesData = (salesKey = 'AllSales') => {
        return SalesData[Mapper[salesKey]];
    };

    const getFilteredData = (filterKey) => {
        return FilterData[FilterMapper[filterKey]];
    };

    const setInitialState = (keyFactor = 'AllProduct') => {
        return {
            labels: getFilteredData(keyFactor).map((data) => data.Month),
            datasets: [
                {
                    label: 'Total Sales',
                    // data: [361609, 187344, 216253, 357834, 280355, 186708],
                    data: getSalesData(keyFactor).map((data) => (data.total)),
                    type: 'line',
                    backgroundColor: ["#ff0000"],
                    order: 1,
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(32, 292, 305, 7)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 8,
                },

                // {
                //     label: 'Product 1',
                //     // data: [361609, 187344, 216253, 357834, 280355, 186708],
                //     data: getSalesData(keyFactor).map((data) => (data.product1)),
                //     type: 'line',
                //     backgroundColor: ["#ff0000"],
                //     order: 1,
                //     borderColor: [
                //         'rgba(255,99,132,1)',
                //         'rgba(32, 292, 305, 7)',
                //         'rgba(54, 162, 235, 1)',
                //         'rgba(255, 206, 86, 1)',
                //         'rgba(75, 192, 192, 1)',
                //         'rgba(153, 102, 255, 1)',
                //         'rgba(255, 159, 64, 1)'
                //     ],
                //     borderWidth: 8,
                // },

                {
                    label: 'Email Campaign 1',
                    data: getFilteredData(keyFactor).map((data) => (data.email_campaign1)),
                    backgroundColor: ["#6C4AB6"],
                    order: 2
                },
                {
                    label: 'Email Campaign 2',
                    data: getFilteredData(keyFactor).map((data) => (data.email_campaign2)),
                    backgroundColor: ["#8EC3B0"],
                    order: 2
                },
                {
                    label: 'Phone Call',
                    data: getFilteredData(keyFactor).map((data) => (data.phone_call)),
                    backgroundColor: ["#9ED5C5"],
                    order: 2
                },
                {
                    label: 'Email Campaign 1 & 2',
                    data: getFilteredData(keyFactor).map((data) => (data.email_campaign1_and_2)),
                    backgroundColor: ["#BCEAD5"],
                    order: 2
                },
                {
                    label: 'Email Campaign 1 & Phone Call',
                    data: getFilteredData(keyFactor).map((data) => (data.email_campaign1_and_phone_call)),
                    backgroundColor: ["#B9E0FF"],
                    order: 2
                },
                {
                    label: 'Email Campaign 2 & Phone Call',
                    data: getFilteredData(keyFactor).map((data) => (data.email_campaign2_and_phone_call)),
                    backgroundColor: ["#8D9EFF"],
                    order: 2
                },
                {
                    label: 'All Channels',
                    data: getFilteredData(keyFactor).map((data) => (data.all_channels)),
                    backgroundColor: ["#8D72E1"],
                    order: 2
                },

            ],
        }
    };


    const [campaignData, setCampaignData] = useState(setInitialState());


    //condition
    const [selectedChart, setSelectedChart] = useState('All Products');
    const handleClick = (value) => {
        // const data = processFilterData(value);
        setSelectedChart(value);
        setCampaignData(setInitialState(value));
        // setInitialState()
    }


    return (
        <div className='executive-wrapper'>
            <div className='executive-head'>
                <h3>Executive</h3>

                <div className='executive-dd'>
                    <div className="dropdown">
                        <select value={selectedChart} onChange={(event) => handleClick(event.target.value)}>
                            <option value="AllProduct">All Product</option>
                            <option value="Product1">Product 1</option>
                            <option value="Product2">Product 2</option>
                            <option value="Product3">Product 1 | Product 2</option>
                            <option value="Product4">Product 2 | Product 1</option>
                        </select>
                    </div>
                </div>

            </div>

            <div>
                <DataBox />
                <div className='chart-wrapper'>
                    <SeniorChart chartData={campaignData} />
                    <Recommendation selectedChart={selectedChart} />
                </div>
                {/* <Table03 items={items} setItems={setItems} updateStatus={updateStatus} /> */}
                <Table04 items={items} setItems={setItems} updateStatus={updateStatus} />
                <div className="send">
                    <button>Send Campaign</button>
                </div>
            </div>

        </div>
    )
}

export default Executive