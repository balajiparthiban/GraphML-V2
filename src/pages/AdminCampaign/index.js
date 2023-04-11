import React from "react";
import { useState } from 'react'
import Table03 from '../../component/ExecutiveTable01'
import Table04 from '../../component/ExecutiveTable02'
import SeniorChart from '../../component/SeniorManagementChart'
import * as FilterData from "../../json/campaign_copy"
import * as SalesData from "../../json/campaign_copy"


import { AdminProductTableTab01 } from '../../json/v2/AdminProductTableTab01'
import './style.scss'

const AdminCampaign = () => {

    const [items, setItems] = useState(AdminProductTableTab01)

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
        Product4: 'Sales4',
        Product5: 'Sales5',
        Product6: 'Sales6',
        Product7: 'Sales7'
    };

    const FilterMapper = {
        AllProduct: 'AllProduct',
        Product1: 'Product1',
        Product2: 'Product2',
        Product3: 'Product3',
        Product4: 'Product4',
        Product5: 'Product5',
        Product6: 'Product6',
        Product7: 'Product7'
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

                {
                    label: 'Email Camapign 1',
                    data: getFilteredData(keyFactor).map((data) => (data.email_campaign1)),
                    backgroundColor: ["#6C4AB6"],
                    order: 2
                },
                {
                    label: 'Email Camapign 2',
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
                    label: 'Email Camapign 1 & 2',
                    data: getFilteredData(keyFactor).map((data) => (data.email_campaign1_and_2)),
                    backgroundColor: ["#BCEAD5"],
                    order: 2
                },
                {
                    label: 'Email Camapign 1 & Phone Call',
                    data: getFilteredData(keyFactor).map((data) => (data.email_campaign1_and_phone_call)),
                    backgroundColor: ["#B9E0FF"],
                    order: 2
                },
                {
                    label: 'Email Camapign 2 & Phone Call',
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
        <div className='admin-campaign'>
            <div className='admin-campaign-head'>
                <h3>Admin Campaign</h3>

                <div className='admin-campaign-head-right'>
                    <h6>Total Sales of Particular: <span>320L</span></h6>
                    <div className="dropdown">
                        <select value={selectedChart} onChange={(event) => handleClick(event.target.value)}>
                            <option value="AllProduct">All Campaign</option>
                            <option value="Product1">Campaign 1</option>
                            <option value="Product2">Campaign 2</option>
                            <option value="Product3">Campaign 3</option>
                            <option value="Product4">Campaign 4</option>
                            <option value="Product5">Campaign 5</option>
                            <option value="Product6">Campaign 6</option>
                            <option value="Product7">Campaign 7</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                {/* <DataBox /> */}
                <div className='white-bg'>
                    <SeniorChart chartData={campaignData} />
                    {/* <Recommendation selectedChart={selectedChart} /> */}
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

export default AdminCampaign