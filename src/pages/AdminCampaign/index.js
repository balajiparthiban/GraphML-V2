import React from "react";
import { useState } from 'react'
import Table03 from '../../component/ExecutiveTable01'
import Table04 from '../../component/ExecutiveTable02'
import AdminCampaignChartBase from '../../component/AdminCampaignChartBase'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

// Table data tab 01
import { AdminProductTableTab01 } from '../../json/v2/AdminProductTableTab01'
import { AdminCampaignBarChartTab01 } from '../../json/v2/AdminCampaignBarChartTab01'
import { AdminCampaignBarChartTab02 } from '../../json/v2/AdminCampaignBarChartTab02'
import { AdminCampaignBarChartTab03 } from '../../json/v2/AdminCampaignBarChartTab03'
import { AdminCampaignBarChartTab04 } from '../../json/v2/AdminCampaignBarChartTab04'
import { AdminCampaignBarChartTab05 } from '../../json/v2/AdminCampaignBarChartTab05'
import './style.scss'

const AdminCampaign = () => {

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

    // Tab01-Bar-Chart
    const [adminCampaignBarChartTab01] = useState({
        labels: AdminCampaignBarChartTab01.map((data) => data.Month),
        datasets: [

            {
                label: 'Discount Main Loan',
                data: AdminCampaignBarChartTab01.map((data) => (data.Discount_main_loan)),
                backgroundColor: ["#B9E0FF"],
            },
            {
                label: 'Discount Main Credit Card',
                data: AdminCampaignBarChartTab01.map((data) => (data.Discount_main_credit_card)),
                backgroundColor: ["#8D9EFF"],
            },

        ],
    });


    // Tab02-Bar-Chart
    const [adminCampaignBarChartTab02] = useState({
        labels: AdminCampaignBarChartTab02.map((data) => data.Month),
        datasets: [

            {
                label: 'Discount Main Loan',
                data: AdminCampaignBarChartTab02.map((data) => (data.Promotional_mail_loan)),
                backgroundColor: ["#B9E0FF"],
            },
            {
                label: 'Discount Main Credit Card',
                data: AdminCampaignBarChartTab02.map((data) => (data.Promotional_mail_credit_card)),
                backgroundColor: ["#8D9EFF"],
            },

        ],
    });


    // Tab03-Bar-Chart
    const [adminCampaignBarChartTab03] = useState({
        labels: AdminCampaignBarChartTab03.map((data) => data.Month),
        datasets: [

            {
                label: 'Phone Call Loan',
                data: AdminCampaignBarChartTab03.map((data) => (data.Phone_call_loan)),
                backgroundColor: ["#B9E0FF"],
            },
            {
                label: 'Phone Call Credit Card',
                data: AdminCampaignBarChartTab03.map((data) => (data.Phone_call_credit_card)),
                backgroundColor: ["#8D9EFF"],
            },

        ],
    });


    // Tab04-Bar-Chart
    const [adminCampaignBarChartTab04] = useState({
        labels: AdminCampaignBarChartTab04.map((data) => data.Month),
        datasets: [

            {
                label: 'Discount Main Loan',
                data: AdminCampaignBarChartTab04.map((data) => (data.Push_notification_loan)),
                backgroundColor: ["#B9E0FF"],
            },
            {
                label: 'Discount Main Credit Card',
                data: AdminCampaignBarChartTab04.map((data) => (data.Push_notification_credit_card)),
                backgroundColor: ["#8D9EFF"],
            },

        ],
    });


    // Tab05-Bar-Chart
    const [adminCampaignBarChartTab05] = useState({
        labels: AdminCampaignBarChartTab05.map((data) => data.Month),
        datasets: [

            {
                label: 'Discount Main Loan',
                data: AdminCampaignBarChartTab05.map((data) => (data.Loyalty_mail_loan)),
                backgroundColor: ["#B9E0FF"],
            },
            {
                label: 'Discount Main Credit Card',
                data: AdminCampaignBarChartTab05.map((data) => (data.Loyalty_mail_credit_card)),
                backgroundColor: ["#8D9EFF"],
            },

        ],
    });


    return (

        <Tabs>
            <TabList>
                <Tab>Campaign 1</Tab>
                <Tab>Campaign 2</Tab>
                <Tab>Campaign 3</Tab>
                <Tab>Campaign 4</Tab>
                <Tab>Campaign 5</Tab>
            </TabList>


            {/* Tab01 */}
            <TabPanel>
                <div className='admin-campaign'>
                    <div className='admin-campaign-head'>
                        <h3>Admin Campaign</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total Discount Mail Sent: <span>12053</span></h6>
                        </div>
                    </div>

                    <div>
                        <div className='white-bg'>
                            <AdminCampaignChartBase chartData={adminCampaignBarChartTab01} />
                        </div>
                        <Table03 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <Table04 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <div className="button-wrapper">
                            <button className="button-style">Send Campaign</button>
                        </div>
                    </div>

                </div>
            </TabPanel>


            {/* Tab02 */}
            <TabPanel>
                <div className='admin-campaign'>
                    <div className='admin-campaign-head'>
                        <h3>Admin Campaign 2</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total Promotional Mail Sent: <span>14782</span></h6>
                        </div>
                    </div>

                    <div>
                        <div className='white-bg'>
                            <AdminCampaignChartBase chartData={adminCampaignBarChartTab02} />
                        </div>
                        <Table03 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <Table04 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <div className="button-wrapper">
                            <button className="button-style">Send Campaign</button>
                        </div>
                    </div>

                </div>
            </TabPanel>


            {/* Tab03 */}
            <TabPanel>
                <div className='admin-campaign'>
                    <div className='admin-campaign-head'>
                        <h3>Admin Campaign 3</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total Phonecall Sent: <span>4643</span></h6>
                        </div>
                    </div>

                    <div>
                        <div className='white-bg'>
                            <AdminCampaignChartBase chartData={adminCampaignBarChartTab03} />
                        </div>
                        <Table03 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <Table04 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <div className="button-wrapper">
                            <button className="button-style">Send Campaign</button>
                        </div>
                    </div>

                </div>
            </TabPanel>


            {/* Tab04 */}
            <TabPanel>
                <div className='admin-campaign'>
                    <div className='admin-campaign-head'>
                        <h3>Admin Campaign 4</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total Push notification Sent: <span>25463</span></h6>
                        </div>
                    </div>

                    <div>
                        <div className='white-bg'>
                            <AdminCampaignChartBase chartData={adminCampaignBarChartTab04} />
                        </div>
                        <Table03 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <Table04 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <div className="button-wrapper">
                            <button className="button-style">Send Campaign</button>
                        </div>
                    </div>

                </div>
            </TabPanel>



            <TabPanel>
                <div className='admin-campaign'>
                    <div className='admin-campaign-head'>
                        <h3>Admin Campaign 5</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total Loyalty Mail Sent: <span>7233</span></h6>
                        </div>
                    </div>

                    <div>
                        <div className='white-bg'>
                            <AdminCampaignChartBase chartData={adminCampaignBarChartTab05} />
                        </div>
                        <Table03 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <Table04 items={items} setItems={setItems} updateStatus={updateStatus} />
                        <div className="button-wrapper">
                            <button className="button-style">Send Campaign</button>
                        </div>
                    </div>

                </div>
            </TabPanel>

        </Tabs>

    )
}

export default AdminCampaign