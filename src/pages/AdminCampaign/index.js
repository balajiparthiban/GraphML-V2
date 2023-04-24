import React from "react";
import { useState } from 'react'
import Table03 from '../../component/ExecutiveTable01'
import Table04 from '../../component/ExecutiveTable02'
import AdminCampaignChartBase from '../../component/AdminCampaignChartBase'
import AdminCampaignChartLineBase from '../../component/AdminCampaignChartLineBase'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

// Table data tab 01
import { AdminProductTableTab01 } from '../../json/v2/AdminProductTableTab01'
import { AdminCampaignBarChartTab01 } from '../../json/v2/AdminCampaignBarChartTab01'
import { AdminCampaignBarChartTab02 } from '../../json/v2/AdminCampaignBarChartTab02'
import { AdminCampaignBarChartTab03 } from '../../json/v2/AdminCampaignBarChartTab03'
import { AdminCampaignBarChartTab04 } from '../../json/v2/AdminCampaignBarChartTab04'
import { AdminCampaignBarChartTab05 } from '../../json/v2/AdminCampaignBarChartTab05'


// import { AdminCampaignTab01 } from '../../json/v2/AdminCampaignTab01'

import Campaign01Table01 from '../../component/AdminCampaignTableTab01/Campaign01Table01'
import Campaign01Table02 from '../../component/AdminCampaignTableTab01/Campaign01Table02'

import Campaign02Table01 from '../../component/AdminCampaignTableTab02/Campaign02Table01'
import Campaign02Table02 from '../../component/AdminCampaignTableTab02/Campaign02Table02'

import Campaign03Table01 from '../../component/AdminCampaignTableTab03/Campaign03Table01'
import Campaign03Table02 from '../../component/AdminCampaignTableTab03/Campaign03Table02'

import Campaign04Table01 from '../../component/AdminCampaignTableTab04/Campaign04Table01'
import Campaign04Table02 from '../../component/AdminCampaignTableTab04/Campaign04Table02'

import Campaign05Table01 from '../../component/AdminCampaignTableTab05/Campaign05Table01'
import Campaign05Table02 from '../../component/AdminCampaignTableTab05/Campaign05Table02'


import './style.scss'

const AdminCampaign = () => {


    //Campaign Tab01
    const [Campaign1items, setCampaign1items] = useState([
        {
            id: 1,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Number of Dependents",
            Effect: 0.0131301067628151,
            Rank: 1,
            status: 'Pending'
        },
        {
            id: 2,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0119511819713499,
            Rank: 2,
            status: 'Pending'
        },
        {
            id: 3,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0116309960452891,
            Rank: 3,
            status: 'Pending'
        },
        {
            id: 4,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0114591963798432,
            Rank: 4,
            status: 'Pending'
        },
        {
            id: 5,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0113804576627438,
            Rank: 5,
            status: 'Pending'
        },
        {
            id: 6,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00940140239429,
            Rank: 6,
            status: 'Pending'
        },
        {
            id: 7,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.008989061887858,
            Rank: 7,
            status: 'Pending'
        },
        {
            id: 8,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0088751637219288,
            Rank: 8,
            status: 'Pending'
        },
        {
            id: 9,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0086637259171752,
            Rank: 9,
            status: 'Pending'
        },
        {
            id: 10,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0084106881430099,
            Rank: 10,
            status: 'Pending'
        },
        {
            id: 11,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0082823359000175,
            Rank: 11,
            status: 'Pending'
        },
        {
            id: 12,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081744668527132,
            Rank: 12,
            status: 'Pending'
        },
        {
            id: 13,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081213926050184,
            Rank: 13,
            status: 'Pending'
        },
        {
            id: 14,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0080488408028273,
            Rank: 14,
            status: 'Pending'
        },
        {
            id: 15,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0079202055105888,
            Rank: 15,
            status: 'Pending'
        },
        {
            id: 16,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0063619929078484,
            Rank: 16,
            status: 'Pending'
        },
        {
            id: 17,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0062331879342373,
            Rank: 17,
            status: 'Pending'
        },
        {
            id: 18,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0062133358843903,
            Rank: 18,
            status: 'Pending'
        },
        {
            id: 19,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0061960997384892,
            Rank: 19,
            status: 'Pending'
        },
        {
            id: 20,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061424941124294,
            Rank: 20,
            status: 'Pending'
        },
        {
            id: 21,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061008225135879,
            Rank: 21,
            status: 'Pending'
        },
        {
            id: 22,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060826116798315,
            Rank: 22,
            status: 'Pending'
        },
        {
            id: 23,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0060455199981595,
            Rank: 23,
            status: 'Pending'
        },
        {
            id: 24,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060392969069834,
            Rank: 24,
            status: 'Pending'
        },
        {
            id: 25,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0060286207065512,
            Rank: 25,
            status: 'Pending'
        },
        {
            id: 26,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0046930415263623,
            Rank: 26,
            status: 'Pending'
        },
        {
            id: 27,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0046630449734909,
            Rank: 27,
            status: 'Pending'
        },
        {
            id: 28,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0045383533688653,
            Rank: 28,
            status: 'Pending'
        },
        {
            id: 29,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0045300492061599,
            Rank: 29,
            status: 'Pending'
        },
        {
            id: 30,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0044027045329138,
            Rank: 30,
            status: 'Pending'
        },
        {
            id: 31,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0043944023915458,
            Rank: 31,
            status: 'Pending'
        },
        {
            id: 32,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.004336811167206,
            Rank: 32,
            status: 'Pending'
        },
        {
            id: 33,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0041082695162016,
            Rank: 33,
            status: 'Pending'
        },
        {
            id: 34,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.003978501930755,
            Rank: 34,
            status: 'Pending'
        },
        {
            id: 35,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.00391499541418,
            Rank: 35,
            status: 'Pending'
        },
        {
            id: 36,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0032626668130488,
            Rank: 36,
            status: 'Pending'
        },
        {
            id: 37,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032318889520235,
            Rank: 37,
            status: 'Pending'
        },
        {
            id: 38,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032189709242832,
            Rank: 38,
            status: 'Pending'
        },
        {
            id: 39,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030577897595996,
            Rank: 39,
            status: 'Pending'
        },
        {
            id: 40,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030565980784831,
            Rank: 40,
            status: 'Pending'
        },
        {
            id: 41,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0020321290757141,
            Rank: 41,
            status: 'Pending'
        },
        {
            id: 42,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018981220061789,
            Rank: 42,
            status: 'Pending'
        },
        {
            id: 43,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018337935347529,
            Rank: 43,
            status: 'Pending'
        },
        {
            id: 44,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017996021672288,
            Rank: 44,
            status: 'Pending'
        },
        {
            id: 45,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017555803569213,
            Rank: 45,
            status: 'Pending'
        },
        {
            id: 46,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017270039223033,
            Rank: 46,
            status: 'Pending'
        },
        {
            id: 47,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.001600612095872,
            Rank: 47,
            status: 'Pending'
        },
        {
            id: 48,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0015236120247912,
            Rank: 48,
            status: 'Pending'
        },
        {
            id: 49,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0014752036967054,
            Rank: 49,
            status: 'Pending'
        },
        {
            id: 50,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0012315502453347,
            Rank: 50,
            status: 'Pending'
        }
    ]);

    const Campaign1itemsStatus = (id, newStatus) => {
        let allItems = Campaign1items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newStatus;
            }
            return item
        })
        setCampaign1items(allItems)
    }


    //Campaign Tab02
    const [Campaign2items, setCampaign2items] = useState([
        {
            id: 1,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Number of Dependents",
            Effect: 0.0131301067628151,
            Rank: 1,
            status: 'Pending'
        },
        {
            id: 2,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0119511819713499,
            Rank: 2,
            status: 'Pending'
        },
        {
            id: 3,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0116309960452891,
            Rank: 3,
            status: 'Pending'
        },
        {
            id: 4,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0114591963798432,
            Rank: 4,
            status: 'Pending'
        },
        {
            id: 5,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0113804576627438,
            Rank: 5,
            status: 'Pending'
        },
        {
            id: 6,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00940140239429,
            Rank: 6,
            status: 'Pending'
        },
        {
            id: 7,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.008989061887858,
            Rank: 7,
            status: 'Pending'
        },
        {
            id: 8,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0088751637219288,
            Rank: 8,
            status: 'Pending'
        },
        {
            id: 9,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0086637259171752,
            Rank: 9,
            status: 'Pending'
        },
        {
            id: 10,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0084106881430099,
            Rank: 10,
            status: 'Pending'
        },
        {
            id: 11,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0082823359000175,
            Rank: 11,
            status: 'Pending'
        },
        {
            id: 12,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081744668527132,
            Rank: 12,
            status: 'Pending'
        },
        {
            id: 13,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081213926050184,
            Rank: 13,
            status: 'Pending'
        },
        {
            id: 14,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0080488408028273,
            Rank: 14,
            status: 'Pending'
        },
        {
            id: 15,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0079202055105888,
            Rank: 15,
            status: 'Pending'
        },
        {
            id: 16,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0063619929078484,
            Rank: 16,
            status: 'Pending'
        },
        {
            id: 17,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0062331879342373,
            Rank: 17,
            status: 'Pending'
        },
        {
            id: 18,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0062133358843903,
            Rank: 18,
            status: 'Pending'
        },
        {
            id: 19,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0061960997384892,
            Rank: 19,
            status: 'Pending'
        },
        {
            id: 20,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061424941124294,
            Rank: 20,
            status: 'Pending'
        },
        {
            id: 21,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061008225135879,
            Rank: 21,
            status: 'Pending'
        },
        {
            id: 22,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060826116798315,
            Rank: 22,
            status: 'Pending'
        },
        {
            id: 23,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0060455199981595,
            Rank: 23,
            status: 'Pending'
        },
        {
            id: 24,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060392969069834,
            Rank: 24,
            status: 'Pending'
        },
        {
            id: 25,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0060286207065512,
            Rank: 25,
            status: 'Pending'
        },
        {
            id: 26,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0046930415263623,
            Rank: 26,
            status: 'Pending'
        },
        {
            id: 27,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0046630449734909,
            Rank: 27,
            status: 'Pending'
        },
        {
            id: 28,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0045383533688653,
            Rank: 28,
            status: 'Pending'
        },
        {
            id: 29,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0045300492061599,
            Rank: 29,
            status: 'Pending'
        },
        {
            id: 30,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0044027045329138,
            Rank: 30,
            status: 'Pending'
        },
        {
            id: 31,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0043944023915458,
            Rank: 31,
            status: 'Pending'
        },
        {
            id: 32,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.004336811167206,
            Rank: 32,
            status: 'Pending'
        },
        {
            id: 33,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0041082695162016,
            Rank: 33,
            status: 'Pending'
        },
        {
            id: 34,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.003978501930755,
            Rank: 34,
            status: 'Pending'
        },
        {
            id: 35,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.00391499541418,
            Rank: 35,
            status: 'Pending'
        },
        {
            id: 36,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0032626668130488,
            Rank: 36,
            status: 'Pending'
        },
        {
            id: 37,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032318889520235,
            Rank: 37,
            status: 'Pending'
        },
        {
            id: 38,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032189709242832,
            Rank: 38,
            status: 'Pending'
        },
        {
            id: 39,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030577897595996,
            Rank: 39,
            status: 'Pending'
        },
        {
            id: 40,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030565980784831,
            Rank: 40,
            status: 'Pending'
        },
        {
            id: 41,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0020321290757141,
            Rank: 41,
            status: 'Pending'
        },
        {
            id: 42,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018981220061789,
            Rank: 42,
            status: 'Pending'
        },
        {
            id: 43,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018337935347529,
            Rank: 43,
            status: 'Pending'
        },
        {
            id: 44,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017996021672288,
            Rank: 44,
            status: 'Pending'
        },
        {
            id: 45,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017555803569213,
            Rank: 45,
            status: 'Pending'
        },
        {
            id: 46,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017270039223033,
            Rank: 46,
            status: 'Pending'
        },
        {
            id: 47,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.001600612095872,
            Rank: 47,
            status: 'Pending'
        },
        {
            id: 48,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0015236120247912,
            Rank: 48,
            status: 'Pending'
        },
        {
            id: 49,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0014752036967054,
            Rank: 49,
            status: 'Pending'
        },
        {
            id: 50,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0012315502453347,
            Rank: 50,
            status: 'Pending'
        }
    ]);

    const Campaign2itemsStatus = (id, newStatus) => {
        let allItems = Campaign2items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newStatus;
            }
            return item
        })
        setCampaign2items(allItems)
    }


    //Campaign Tab03
    const [Campaign3items, setCampaign3items] = useState([
        {
            id: 1,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Number of Dependents",
            Effect: 0.0131301067628151,
            Rank: 1,
            status: 'Pending'
        },
        {
            id: 2,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0119511819713499,
            Rank: 2,
            status: 'Pending'
        },
        {
            id: 3,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0116309960452891,
            Rank: 3,
            status: 'Pending'
        },
        {
            id: 4,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0114591963798432,
            Rank: 4,
            status: 'Pending'
        },
        {
            id: 5,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0113804576627438,
            Rank: 5,
            status: 'Pending'
        },
        {
            id: 6,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00940140239429,
            Rank: 6,
            status: 'Pending'
        },
        {
            id: 7,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.008989061887858,
            Rank: 7,
            status: 'Pending'
        },
        {
            id: 8,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0088751637219288,
            Rank: 8,
            status: 'Pending'
        },
        {
            id: 9,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0086637259171752,
            Rank: 9,
            status: 'Pending'
        },
        {
            id: 10,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0084106881430099,
            Rank: 10,
            status: 'Pending'
        },
        {
            id: 11,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0082823359000175,
            Rank: 11,
            status: 'Pending'
        },
        {
            id: 12,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081744668527132,
            Rank: 12,
            status: 'Pending'
        },
        {
            id: 13,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081213926050184,
            Rank: 13,
            status: 'Pending'
        },
        {
            id: 14,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0080488408028273,
            Rank: 14,
            status: 'Pending'
        },
        {
            id: 15,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0079202055105888,
            Rank: 15,
            status: 'Pending'
        },
        {
            id: 16,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0063619929078484,
            Rank: 16,
            status: 'Pending'
        },
        {
            id: 17,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0062331879342373,
            Rank: 17,
            status: 'Pending'
        },
        {
            id: 18,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0062133358843903,
            Rank: 18,
            status: 'Pending'
        },
        {
            id: 19,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0061960997384892,
            Rank: 19,
            status: 'Pending'
        },
        {
            id: 20,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061424941124294,
            Rank: 20,
            status: 'Pending'
        },
        {
            id: 21,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061008225135879,
            Rank: 21,
            status: 'Pending'
        },
        {
            id: 22,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060826116798315,
            Rank: 22,
            status: 'Pending'
        },
        {
            id: 23,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0060455199981595,
            Rank: 23,
            status: 'Pending'
        },
        {
            id: 24,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060392969069834,
            Rank: 24,
            status: 'Pending'
        },
        {
            id: 25,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0060286207065512,
            Rank: 25,
            status: 'Pending'
        },
        {
            id: 26,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0046930415263623,
            Rank: 26,
            status: 'Pending'
        },
        {
            id: 27,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0046630449734909,
            Rank: 27,
            status: 'Pending'
        },
        {
            id: 28,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0045383533688653,
            Rank: 28,
            status: 'Pending'
        },
        {
            id: 29,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0045300492061599,
            Rank: 29,
            status: 'Pending'
        },
        {
            id: 30,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0044027045329138,
            Rank: 30,
            status: 'Pending'
        },
        {
            id: 31,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0043944023915458,
            Rank: 31,
            status: 'Pending'
        },
        {
            id: 32,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.004336811167206,
            Rank: 32,
            status: 'Pending'
        },
        {
            id: 33,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0041082695162016,
            Rank: 33,
            status: 'Pending'
        },
        {
            id: 34,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.003978501930755,
            Rank: 34,
            status: 'Pending'
        },
        {
            id: 35,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.00391499541418,
            Rank: 35,
            status: 'Pending'
        },
        {
            id: 36,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0032626668130488,
            Rank: 36,
            status: 'Pending'
        },
        {
            id: 37,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032318889520235,
            Rank: 37,
            status: 'Pending'
        },
        {
            id: 38,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032189709242832,
            Rank: 38,
            status: 'Pending'
        },
        {
            id: 39,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030577897595996,
            Rank: 39,
            status: 'Pending'
        },
        {
            id: 40,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030565980784831,
            Rank: 40,
            status: 'Pending'
        },
        {
            id: 41,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0020321290757141,
            Rank: 41,
            status: 'Pending'
        },
        {
            id: 42,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018981220061789,
            Rank: 42,
            status: 'Pending'
        },
        {
            id: 43,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018337935347529,
            Rank: 43,
            status: 'Pending'
        },
        {
            id: 44,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017996021672288,
            Rank: 44,
            status: 'Pending'
        },
        {
            id: 45,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017555803569213,
            Rank: 45,
            status: 'Pending'
        },
        {
            id: 46,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017270039223033,
            Rank: 46,
            status: 'Pending'
        },
        {
            id: 47,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.001600612095872,
            Rank: 47,
            status: 'Pending'
        },
        {
            id: 48,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0015236120247912,
            Rank: 48,
            status: 'Pending'
        },
        {
            id: 49,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0014752036967054,
            Rank: 49,
            status: 'Pending'
        },
        {
            id: 50,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0012315502453347,
            Rank: 50,
            status: 'Pending'
        }
    ]);

    const Campaign3itemsStatus = (id, newStatus) => {
        let allItems = Campaign3items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newStatus;
            }
            return item
        })
        setCampaign3items(allItems)
    }




    //Campaign Tab04
    const [Campaign4items, setCampaign4items] = useState([
        {
            id: 1,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Number of Dependents",
            Effect: 0.0131301067628151,
            Rank: 1,
            status: 'Pending'
        },
        {
            id: 2,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0119511819713499,
            Rank: 2,
            status: 'Pending'
        },
        {
            id: 3,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0116309960452891,
            Rank: 3,
            status: 'Pending'
        },
        {
            id: 4,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0114591963798432,
            Rank: 4,
            status: 'Pending'
        },
        {
            id: 5,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0113804576627438,
            Rank: 5,
            status: 'Pending'
        },
        {
            id: 6,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00940140239429,
            Rank: 6,
            status: 'Pending'
        },
        {
            id: 7,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.008989061887858,
            Rank: 7,
            status: 'Pending'
        },
        {
            id: 8,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0088751637219288,
            Rank: 8,
            status: 'Pending'
        },
        {
            id: 9,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0086637259171752,
            Rank: 9,
            status: 'Pending'
        },
        {
            id: 10,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0084106881430099,
            Rank: 10,
            status: 'Pending'
        },
        {
            id: 11,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0082823359000175,
            Rank: 11,
            status: 'Pending'
        },
        {
            id: 12,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081744668527132,
            Rank: 12,
            status: 'Pending'
        },
        {
            id: 13,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081213926050184,
            Rank: 13,
            status: 'Pending'
        },
        {
            id: 14,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0080488408028273,
            Rank: 14,
            status: 'Pending'
        },
        {
            id: 15,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0079202055105888,
            Rank: 15,
            status: 'Pending'
        },
        {
            id: 16,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0063619929078484,
            Rank: 16,
            status: 'Pending'
        },
        {
            id: 17,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0062331879342373,
            Rank: 17,
            status: 'Pending'
        },
        {
            id: 18,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0062133358843903,
            Rank: 18,
            status: 'Pending'
        },
        {
            id: 19,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0061960997384892,
            Rank: 19,
            status: 'Pending'
        },
        {
            id: 20,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061424941124294,
            Rank: 20,
            status: 'Pending'
        },
        {
            id: 21,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061008225135879,
            Rank: 21,
            status: 'Pending'
        },
        {
            id: 22,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060826116798315,
            Rank: 22,
            status: 'Pending'
        },
        {
            id: 23,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0060455199981595,
            Rank: 23,
            status: 'Pending'
        },
        {
            id: 24,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060392969069834,
            Rank: 24,
            status: 'Pending'
        },
        {
            id: 25,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0060286207065512,
            Rank: 25,
            status: 'Pending'
        },
        {
            id: 26,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0046930415263623,
            Rank: 26,
            status: 'Pending'
        },
        {
            id: 27,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0046630449734909,
            Rank: 27,
            status: 'Pending'
        },
        {
            id: 28,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0045383533688653,
            Rank: 28,
            status: 'Pending'
        },
        {
            id: 29,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0045300492061599,
            Rank: 29,
            status: 'Pending'
        },
        {
            id: 30,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0044027045329138,
            Rank: 30,
            status: 'Pending'
        },
        {
            id: 31,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0043944023915458,
            Rank: 31,
            status: 'Pending'
        },
        {
            id: 32,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.004336811167206,
            Rank: 32,
            status: 'Pending'
        },
        {
            id: 33,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0041082695162016,
            Rank: 33,
            status: 'Pending'
        },
        {
            id: 34,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.003978501930755,
            Rank: 34,
            status: 'Pending'
        },
        {
            id: 35,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.00391499541418,
            Rank: 35,
            status: 'Pending'
        },
        {
            id: 36,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0032626668130488,
            Rank: 36,
            status: 'Pending'
        },
        {
            id: 37,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032318889520235,
            Rank: 37,
            status: 'Pending'
        },
        {
            id: 38,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032189709242832,
            Rank: 38,
            status: 'Pending'
        },
        {
            id: 39,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030577897595996,
            Rank: 39,
            status: 'Pending'
        },
        {
            id: 40,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030565980784831,
            Rank: 40,
            status: 'Pending'
        },
        {
            id: 41,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0020321290757141,
            Rank: 41,
            status: 'Pending'
        },
        {
            id: 42,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018981220061789,
            Rank: 42,
            status: 'Pending'
        },
        {
            id: 43,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018337935347529,
            Rank: 43,
            status: 'Pending'
        },
        {
            id: 44,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017996021672288,
            Rank: 44,
            status: 'Pending'
        },
        {
            id: 45,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017555803569213,
            Rank: 45,
            status: 'Pending'
        },
        {
            id: 46,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017270039223033,
            Rank: 46,
            status: 'Pending'
        },
        {
            id: 47,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.001600612095872,
            Rank: 47,
            status: 'Pending'
        },
        {
            id: 48,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0015236120247912,
            Rank: 48,
            status: 'Pending'
        },
        {
            id: 49,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0014752036967054,
            Rank: 49,
            status: 'Pending'
        },
        {
            id: 50,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0012315502453347,
            Rank: 50,
            status: 'Pending'
        }
    ]);

    const Campaign4itemsStatus = (id, newStatus) => {
        let allItems = Campaign4items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newStatus;
            }
            return item
        })
        setCampaign4items(allItems)
    }



    //Campaign Tab05
    const [Campaign5items, setCampaign5items] = useState([
        {
            id: 1,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Number of Dependents",
            Effect: 0.0131301067628151,
            Rank: 1,
            status: 'Pending'
        },
        {
            id: 2,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0119511819713499,
            Rank: 2,
            status: 'Pending'
        },
        {
            id: 3,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0116309960452891,
            Rank: 3,
            status: 'Pending'
        },
        {
            id: 4,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0114591963798432,
            Rank: 4,
            status: 'Pending'
        },
        {
            id: 5,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0113804576627438,
            Rank: 5,
            status: 'Pending'
        },
        {
            id: 6,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00940140239429,
            Rank: 6,
            status: 'Pending'
        },
        {
            id: 7,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.008989061887858,
            Rank: 7,
            status: 'Pending'
        },
        {
            id: 8,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0088751637219288,
            Rank: 8,
            status: 'Pending'
        },
        {
            id: 9,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0086637259171752,
            Rank: 9,
            status: 'Pending'
        },
        {
            id: 10,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0084106881430099,
            Rank: 10,
            status: 'Pending'
        },
        {
            id: 11,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0082823359000175,
            Rank: 11,
            status: 'Pending'
        },
        {
            id: 12,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081744668527132,
            Rank: 12,
            status: 'Pending'
        },
        {
            id: 13,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0081213926050184,
            Rank: 13,
            status: 'Pending'
        },
        {
            id: 14,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0080488408028273,
            Rank: 14,
            status: 'Pending'
        },
        {
            id: 15,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0079202055105888,
            Rank: 15,
            status: 'Pending'
        },
        {
            id: 16,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0063619929078484,
            Rank: 16,
            status: 'Pending'
        },
        {
            id: 17,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0062331879342373,
            Rank: 17,
            status: 'Pending'
        },
        {
            id: 18,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0062133358843903,
            Rank: 18,
            status: 'Pending'
        },
        {
            id: 19,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0061960997384892,
            Rank: 19,
            status: 'Pending'
        },
        {
            id: 20,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061424941124294,
            Rank: 20,
            status: 'Pending'
        },
        {
            id: 21,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061008225135879,
            Rank: 21,
            status: 'Pending'
        },
        {
            id: 22,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060826116798315,
            Rank: 22,
            status: 'Pending'
        },
        {
            id: 23,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0060455199981595,
            Rank: 23,
            status: 'Pending'
        },
        {
            id: 24,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0060392969069834,
            Rank: 24,
            status: 'Pending'
        },
        {
            id: 25,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0060286207065512,
            Rank: 25,
            status: 'Pending'
        },
        {
            id: 26,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0046930415263623,
            Rank: 26,
            status: 'Pending'
        },
        {
            id: 27,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0046630449734909,
            Rank: 27,
            status: 'Pending'
        },
        {
            id: 28,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0045383533688653,
            Rank: 28,
            status: 'Pending'
        },
        {
            id: 29,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0045300492061599,
            Rank: 29,
            status: 'Pending'
        },
        {
            id: 30,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0044027045329138,
            Rank: 30,
            status: 'Pending'
        },
        {
            id: 31,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0043944023915458,
            Rank: 31,
            status: 'Pending'
        },
        {
            id: 32,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.004336811167206,
            Rank: 32,
            status: 'Pending'
        },
        {
            id: 33,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0041082695162016,
            Rank: 33,
            status: 'Pending'
        },
        {
            id: 34,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.003978501930755,
            Rank: 34,
            status: 'Pending'
        },
        {
            id: 35,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.00391499541418,
            Rank: 35,
            status: 'Pending'
        },
        {
            id: 36,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0032626668130488,
            Rank: 36,
            status: 'Pending'
        },
        {
            id: 37,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032318889520235,
            Rank: 37,
            status: 'Pending'
        },
        {
            id: 38,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0032189709242832,
            Rank: 38,
            status: 'Pending'
        },
        {
            id: 39,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030577897595996,
            Rank: 39,
            status: 'Pending'
        },
        {
            id: 40,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0030565980784831,
            Rank: 40,
            status: 'Pending'
        },
        {
            id: 41,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0020321290757141,
            Rank: 41,
            status: 'Pending'
        },
        {
            id: 42,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018981220061789,
            Rank: 42,
            status: 'Pending'
        },
        {
            id: 43,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0018337935347529,
            Rank: 43,
            status: 'Pending'
        },
        {
            id: 44,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017996021672288,
            Rank: 44,
            status: 'Pending'
        },
        {
            id: 45,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 17,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017555803569213,
            Rank: 45,
            status: 'Pending'
        },
        {
            id: 46,
            Product: "Credit Card",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 18,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0017270039223033,
            Rank: 46,
            status: 'Pending'
        },
        {
            id: 47,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.001600612095872,
            Rank: 47,
            status: 'Pending'
        },
        {
            id: 48,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0015236120247912,
            Rank: 48,
            status: 'Pending'
        },
        {
            id: 49,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0014752036967054,
            Rank: 49,
            status: 'Pending'
        },
        {
            id: 50,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0012315502453347,
            Rank: 50,
            status: 'Pending'
        }
    ]);

    const Campaign5itemsStatus = (id, newStatus) => {
        let allItems = Campaign5items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newStatus;
            }
            return item
        })
        setCampaign5items(allItems)
    }


    // Tab01-Bar-Chart
    const [adminCampaignBarChartTab01] = useState({
        labels: AdminCampaignBarChartTab01.map((data) => data.Month),
        datasets: [

            {
                label: 'Loan',
                data: AdminCampaignBarChartTab01.map((data) => (data.Discount_main_loan)),
                backgroundColor: ["#8D72E1"],
            },
            {
                label: 'Credit Card',
                data: AdminCampaignBarChartTab01.map((data) => (data.Discount_main_credit_card)),
                backgroundColor: ["#B9E0FF"],
            },

        ],
    });


    // Tab01-Line-Chart
    const [adminCampaignLineChartTab01] = useState({
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

        labels: ["Loans", "Credit Card"],

        datasets: [
            {
                label: 'Loan',
                data: [400, 372, 925, 1142, 555, 446],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#B9E0FF',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#8D72E1',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            },


            {
                label: 'Credit Card',
                data: [545, 651, 980, 778, 1022, 557],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#96EACC',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderColor: [
                    '#cf3877',
                    '#A5D8EC',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            }
        ],
    });


    // Tab02-Bar-Chart
    const [adminCampaignBarChartTab02] = useState({
        labels: AdminCampaignBarChartTab02.map((data) => data.Month),
        datasets: [

            {
                label: 'Loan',
                data: AdminCampaignBarChartTab02.map((data) => (data.Promotional_mail_loan)),
                backgroundColor: ["#8D72E1"],
            },
            {
                label: 'Credit Card',
                data: AdminCampaignBarChartTab02.map((data) => (data.Promotional_mail_credit_card)),
                backgroundColor: ["#B9E0FF"],
            },

        ],
    });


    // Tab02-Line-Chart
    const [adminCampaignLineChartTab02] = useState({
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

        labels: ["Loans", "Credit Card"],

        datasets: [
            {
                label: 'Loan',
                data: [1484, 1705, 1730, 558, 341, 367],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#B9E0FF',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#8D72E1',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            },


            {
                label: 'Credit Card',
                data: [989, 1395, 891, 993, 417, 1101],

                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#96EACC',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderColor: [
                    '#cf3877',
                    '#A5D8EC',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            }
        ],
    });


    // Tab03-Bar-Chart
    const [adminCampaignBarChartTab03] = useState({
        labels: AdminCampaignBarChartTab03.map((data) => data.Month),
        datasets: [

            {
                label: 'Loan',
                data: AdminCampaignBarChartTab03.map((data) => (data.Phone_call_loan)),
                backgroundColor: ["#8D72E1"],
            },
            {
                label: 'Credit Card',
                data: AdminCampaignBarChartTab03.map((data) => (data.Phone_call_credit_card)),
                backgroundColor: ["#B9E0FF"],
            },

        ],
    });



    // Tab03-Line-Chart
    const [adminCampaignLineChartTab03] = useState({
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

        labels: ["Loans", "Credit Card"],

        datasets: [
            {
                label: 'Loan',
                data: [327, 423, 261, 88, 456, 146],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#B9E0FF',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#8D72E1',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            },


            {
                label: 'Credit Card',
                data: [202, 202, 308, 104, 141, 480],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#96EACC',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderColor: [
                    '#cf3877',
                    '#A5D8EC',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            }
        ],
    });


    // Tab04-Bar-Chart
    const [adminCampaignBarChartTab04] = useState({
        labels: AdminCampaignBarChartTab04.map((data) => data.Month),
        datasets: [

            {
                label: 'Loan',
                data: AdminCampaignBarChartTab04.map((data) => (data.Push_notification_loan)),
                backgroundColor: ["#8D72E1"],
            },
            {
                label: 'Credit Card',
                data: AdminCampaignBarChartTab04.map((data) => (data.Push_notification_credit_card)),
                backgroundColor: ["#B9E0FF"],
            },

        ],
    });


    // Tab04-Line-Chart
    const [adminCampaignLineChartTab04] = useState({
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

        labels: ["Loans", "Credit Card"],

        datasets: [
            {
                label: 'Loan',
                data: [2566, 1877, 1448, 2361, 2449, 1389],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#B9E0FF',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#8D72E1',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            },


            {
                label: 'Credit Card',
                data: [1,541, 1,441, 1,802, 1,478, 1,296, 2,429],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#96EACC',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderColor: [
                    '#cf3877',
                    '#A5D8EC',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            }
        ],
    });


    // Tab05-Bar-Chart
    const [adminCampaignBarChartTab05] = useState({
        labels: AdminCampaignBarChartTab05.map((data) => data.Month),
        datasets: [

            {
                label: 'Loan',
                data: AdminCampaignBarChartTab05.map((data) => (data.Loyalty_mail_loan)),
                backgroundColor: ["#8D72E1"],
            },
            {
                label: 'Credit Card',
                data: AdminCampaignBarChartTab05.map((data) => (data.Loyalty_mail_credit_card)),
                backgroundColor: ["#B9E0FF"],
            },

        ],
    });


    // Tab05-Line-Chart
    const [adminCampaignLineChartTab05] = useState({
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

        labels: ["Loans", "Credit Card"],

        datasets: [
            {
                label: 'Loan',
                data: [486, 441, 587, 327, 281, 363],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#B9E0FF',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#8D72E1',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            },


            {
                label: 'Credit Card',
                data: [357, 352, 348, 477, 628, 599],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#96EACC',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderColor: [
                    '#cf3877',
                    '#A5D8EC',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
            }
        ],
    });


    return (

        <Tabs>
            <TabList>
                <Tab>Discount Mail</Tab>
                <Tab>Promotional Mail</Tab>
                <Tab>Phone Call</Tab>
                <Tab>Push Notificaiton </Tab>
                <Tab>Loyalty Mail</Tab>
            </TabList>


            {/* Tab01 */}
            <TabPanel>
                <div className='admin-campaign'>
                    <div className='admin-campaign-head'>
                        <h3>Analysis of discount campaign</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total discount mail sent: <span>12053</span></h6>
                        </div>
                    </div>

                    <div>

                        <div className="d-flex">
                            <div className='white-bg w-49 head'>
                                <h3>Product-specific monthly campaign delivery chart</h3>
                                <AdminCampaignChartBase chartData={adminCampaignBarChartTab01} />
                            </div>
                            <div className='white-bg w-49 head'>
                                <h3>Monthly product sales chart</h3>
                                <AdminCampaignChartLineBase chartData={adminCampaignLineChartTab01} />
                            </div>
                        </div>

                        <Campaign01Table01 Campaign1items={Campaign1items} setCampaign1items={setCampaign1items} Campaign1itemsStatus={Campaign1itemsStatus} />
                        <Campaign01Table02 Campaign1items={Campaign1items} setCampaign1items={setCampaign1items} Campaign1itemsStatus={Campaign1itemsStatus} />
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
                        <h3>Analysis of promotional campaign</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total promotional mail sent: <span>14782</span></h6>
                        </div>
                    </div>

                    <div>

                        <div className="d-flex">
                            <div className='white-bg w-49 head'>
                                <h3>Product-specific monthly campaign delivery chart</h3>
                                <AdminCampaignChartBase chartData={adminCampaignBarChartTab02} />
                            </div>
                            <div className='white-bg w-49 head'>
                                <h3>Monthly product sales chart</h3>
                                <AdminCampaignChartLineBase chartData={adminCampaignLineChartTab02} />
                            </div>
                        </div>

                        <Campaign02Table01 Campaign2items={Campaign2items} setCampaign2items={setCampaign2items} Campaign2itemsStatus={Campaign2itemsStatus} />
                        <Campaign02Table02 Campaign2items={Campaign2items} setCampaign2items={setCampaign2items} Campaign2itemsStatus={Campaign2itemsStatus} />
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
                        <h3>Analysis of phone call campaign</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total phone call sent: <span>4643</span></h6>
                        </div>
                    </div>

                    <div>

                        <div className="d-flex">
                            <div className='white-bg w-49 head'>

                                <h3>Product-specific monthly campaign delivery chart</h3>
                                <AdminCampaignChartBase chartData={adminCampaignBarChartTab03} />
                            </div>
                            <div className='white-bg w-49 head'>
                                <h3>Monthly product sales chart</h3>
                                <AdminCampaignChartLineBase chartData={adminCampaignLineChartTab03} />
                            </div>
                        </div>


                        <Campaign03Table01 Campaign3items={Campaign3items} setCampaign3items={setCampaign3items} Campaign3itemsStatus={Campaign3itemsStatus} />
                        <Campaign03Table02 Campaign3items={Campaign3items} setCampaign3items={setCampaign3items} Campaign3itemsStatus={Campaign3itemsStatus} />
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
                        <h3>Analysis of push notification campaign</h3>
                        <div className='admin-campaign-head-right'>
                            <h6>Total push notification sent: <span>25463</span></h6>
                        </div>
                    </div>

                    <div>
                       

                        <div className="d-flex">
                            <div className='white-bg w-49 head'>
                                <h3>Product-specific monthly campaign delivery chart</h3>
                                <AdminCampaignChartBase chartData={adminCampaignBarChartTab04} />
                            </div>
                            <div className='white-bg w-49 head'>
                                <h3>Monthly product sales chart</h3>
                                <AdminCampaignChartLineBase chartData={adminCampaignLineChartTab04} />
                            </div>
                        </div>

                        <Campaign04Table01 Campaign4items={Campaign4items} setCampaign4items={setCampaign4items} Campaign4itemsStatus={Campaign4itemsStatus} />
                        <Campaign04Table02 Campaign4items={Campaign4items} setCampaign4items={setCampaign4items} Campaign4itemsStatus={Campaign4itemsStatus} />
                        <div className="button-wrapper">
                            <button className="button-style">Send Campaign</button>
                        </div>
                    </div>

                </div>
            </TabPanel>



            <TabPanel>
                <div className='admin-campaign'>
                    <div className='admin-campaign-head'>
                        <h3>Analysis of loyalty mail campaign</h3>
                        <div className='admin-campaign-head-right'>
                            <h6>Total loyalty mail sent: <span>7233</span></h6>
                        </div>
                    </div>

                    <div>
                       

                        <div className="d-flex">
                            <div className='white-bg w-49 head'>
                                <h3>Product-specific monthly campaign delivery chart</h3>
                                <AdminCampaignChartBase chartData={adminCampaignBarChartTab05} />
                            </div>
                            <div className='white-bg w-49 head'>
                                <h3>Monthly product sales chart</h3>
                                <AdminCampaignChartLineBase chartData={adminCampaignLineChartTab05} />
                            </div>
                        </div>


                        <Campaign05Table01 Campaign5items={Campaign5items} setCampaign5items={setCampaign5items} Campaign5itemsStatus={Campaign5itemsStatus} />
                        <Campaign05Table02 Campaign5items={Campaign5items} setCampaign5items={setCampaign5items} Campaign5itemsStatus={Campaign5itemsStatus} />
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