import React from "react";
import { useState } from 'react'
import AdminCampaignChartBase from '../../component/AdminCampaignChartBase'
import AdminCampaignChartLineBase from '../../component/AdminCampaignChartLineBase'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

// Table data tab 01
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

    const Campaign1itemsstatus = (id, newstatus) => {
        let allItems = Campaign1items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newstatus;
            }
            return item
        })
        setCampaign1items(allItems)
    }


    //Campaign Tab02
    const [Campaign2items, setCampaign2items] = useState([
        {
            id: 1,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_4",
            Total_Customers: 15,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0146807216040809,
            Priority: 1,
            status: "Pending"
        },
        {
            id: 2,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_2",
            Total_Customers: 15,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0145571863518987,
            Priority: 2,
            status: "Pending"
        },
        {
            id: 3,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_5",
            Total_Customers: 15,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0142886691005615,
            Priority: 3,
            status: "Pending"
        },
        {
            id: 4,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_3",
            Total_Customers: 15,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0136928950778866,
            Priority: 4,
            status: "Pending"
        },
        {
            id: 5,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_1",
            Total_Customers: 16,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0121976150862778,
            Priority: 5,
            status: "Pending"
        },
        {
            id: 6,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0109101030053237,
            Priority: 6,
            status: "Pending"
        },
        {
            id: 7,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0107876798200393,
            Priority: 7,
            status: "Pending"
        },
        {
            id: 8,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.0107012540126826,
            Priority: 8,
            status: "Pending"
        },
        {
            id: 9,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_1",
            Total_Customers: 20,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.0106024386731964,
            Priority: 9,
            status: "Pending"
        },
        {
            id: 10,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0104665471239033,
            Priority: 10,
            status: "Pending"
        },
        {
            id: 11,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_4",
            Total_Customers: 15,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0093738372174559,
            Priority: 11,
            status: "Pending"
        },
        {
            id: 12,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_5",
            Total_Customers: 14,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0092884216107099,
            Priority: 12,
            status: "Pending"
        },
        {
            id: 13,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_3",
            Total_Customers: 15,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0088019495191757,
            Priority: 13,
            status: "Pending"
        },
        {
            id: 14,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_1",
            Total_Customers: 16,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0087546066556874,
            Priority: 14,
            status: "Pending"
        },
        {
            id: 15,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_2",
            Total_Customers: 15,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.008555815763817,
            Priority: 15,
            status: "Pending"
        },
        {
            id: 16,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.007520802484318,
            Priority: 16,
            status: "Pending"
        },
        {
            id: 17,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.0074812167446829,
            Priority: 17,
            status: "Pending"
        },
        {
            id: 18,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_1",
            Total_Customers: 20,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0074484793990857,
            Priority: 18,
            status: "Pending"
        },
        {
            id: 19,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.0074134755815942,
            Priority: 19,
            status: "Pending"
        },
        {
            id: 20,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0071596898716402,
            Priority: 20,
            status: "Pending"
        },
        {
            id: 21,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_1",
            Total_Customers: 16,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0065920754014555,
            Priority: 21,
            status: "Pending"
        },
        {
            id: 22,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_4",
            Total_Customers: 15,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0065265680938794,
            Priority: 22,
            status: "Pending"
        },
        {
            id: 23,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_3",
            Total_Customers: 15,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0063304072427659,
            Priority: 23,
            status: "Pending"
        },
        {
            id: 24,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_5",
            Total_Customers: 14,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0063067593167196,
            Priority: 24,
            status: "Pending"
        },
        {
            id: 25,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_2",
            Total_Customers: 15,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0062864215866818,
            Priority: 25,
            status: "Pending"
        },
        {
            id: 26,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_1",
            Total_Customers: 20,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0055101436814816,
            Priority: 26,
            status: "Pending"
        },
        {
            id: 27,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0054738500457197,
            Priority: 27,
            status: "Pending"
        },
        {
            id: 28,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0053288706537339,
            Priority: 28,
            status: "Pending"
        },
        {
            id: 29,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0053089459849107,
            Priority: 29,
            status: "Pending"
        },
        {
            id: 30,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0053075249535163,
            Priority: 30,
            status: "Pending"
        },
        {
            id: 31,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_5",
            Total_Customers: 14,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0045051371931875,
            Priority: 31,
            status: "Pending"
        },
        {
            id: 32,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_4",
            Total_Customers: 15,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0044567495003948,
            Priority: 32,
            status: "Pending"
        },
        {
            id: 33,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_3",
            Total_Customers: 15,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0043147695389214,
            Priority: 33,
            status: "Pending"
        },
        {
            id: 34,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_1",
            Total_Customers: 16,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0042848533196513,
            Priority: 34,
            status: "Pending"
        },
        {
            id: 35,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_2",
            Total_Customers: 15,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0042413514728177,
            Priority: 35,
            status: "Pending"
        },
        {
            id: 36,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_1",
            Total_Customers: 20,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0039532176167669,
            Priority: 36,
            status: "Pending"
        },
        {
            id: 37,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0039030772897651,
            Priority: 37,
            status: "Pending"
        },
        {
            id: 38,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.003800633845138,
            Priority: 38,
            status: "Pending"
        },
        {
            id: 39,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.003697297285942,
            Priority: 39,
            status: "Pending"
        },
        {
            id: 40,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0035795188756388,
            Priority: 40,
            status: "Pending"
        },
        {
            id: 41,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_5",
            Total_Customers: 14,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0023941463384217,
            Priority: 41,
            status: "Pending"
        },
        {
            id: 42,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_3",
            Total_Customers: 15,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0022922834469781,
            Priority: 42,
            status: "Pending"
        },
        {
            id: 43,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_4",
            Total_Customers: 15,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0021657418052818,
            Priority: 43,
            status: "Pending"
        },
        {
            id: 44,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_2",
            Total_Customers: 15,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0020888699570535,
            Priority: 44,
            status: "Pending"
        },
        {
            id: 45,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_1",
            Total_Customers: 15,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0020462164384981,
            Priority: 45,
            status: "Pending"
        },
        {
            id: 46,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0019623651056162,
            Priority: 46,
            status: "Pending"
        },
        {
            id: 47,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0019355411690515,
            Priority: 47,
            status: "Pending"
        },
        {
            id: 48,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_1",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0019176001951642,
            Priority: 48,
            status: "Pending"
        },
        {
            id: 49,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0018504440922905,
            Priority: 49,
            status: "Pending"
        },
        {
            id: 50,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0014633195175324,
            Priority: 49,
            status: "Pending"
        }
    ]);

    const Campaign2itemsstatus = (id, newstatus) => {
        let allItems = Campaign2items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newstatus;
            }
            return item
        })
        setCampaign2items(allItems)
    }


    //Campaign Tab03
    const [Campaign3items, setCampaign3items] = useState([
        {
            id: 1,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_1",
            Total_Customers: 7,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0043967387102443,
            Priority: 1,
            status: "Pending"
        },
        {
            id: 2,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_2",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0043568225486251,
            Priority: 2,
            status: "Pending"
        },
        {
            id: 3,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_3",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0042930586368893,
            Priority: 3,
            status: "Pending"
        },
        {
            id: 4,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0042735142668963,
            Priority: 4,
            status: "Pending"
        },
        {
            id: 5,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_2",
            Total_Customers: 6,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0042687432496499,
            Priority: 5,
            status: "Pending"
        },
        {
            id: 6,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_3",
            Total_Customers: 7,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Term(months)",
            Effect: 0.0042545227420972,
            Priority: 6,
            status: "Pending"
        },
        {
            id: 7,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0041022952690892,
            Priority: 7,
            status: "Pending"
        },
        {
            id: 8,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_4",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0039546725832444,
            Priority: 8,
            status: "Pending"
        },
        {
            id: 9,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_4",
            Total_Customers: 5,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0037429763848586,
            Priority: 9,
            status: "Pending"
        },
        {
            id: 10,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_5",
            Total_Customers: 6,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0036361701390377,
            Priority: 10,
            status: "Pending"
        },
        {
            id: 11,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_4",
            Total_Customers: 6,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0029964542284429,
            Priority: 11,
            status: "Pending"
        },
        {
            id: 12,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_3",
            Total_Customers: 6,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0028335021409164,
            Priority: 12,
            status: "Pending"
        },
        {
            id: 13,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_1",
            Total_Customers: 7,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0028276030052765,
            Priority: 13,
            status: "Pending"
        },
        {
            id: 14,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_2",
            Total_Customers: 6,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0027885987683338,
            Priority: 14,
            status: "Pending"
        },
        {
            id: 15,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_5",
            Total_Customers: 6,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0027607333380747,
            Priority: 15,
            status: "Pending"
        },
        {
            id: 16,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_4",
            Total_Customers: 5,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0024398378872806,
            Priority: 16,
            status: "Pending"
        },
        {
            id: 17,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0023673134036461,
            Priority: 17,
            status: "Pending"
        },
        {
            id: 18,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0023439001828717,
            Priority: 18,
            status: "Pending"
        },
        {
            id: 19,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_5",
            Total_Customers: 6,
            Positive_impacted_feature: "Approval_Amount",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0021923158534538,
            Priority: 19,
            status: "Pending"
        },
        {
            id: 20,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_2",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0021898253139055,
            Priority: 20,
            status: "Pending"
        },
        {
            id: 21,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_3",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0021369884240929,
            Priority: 21,
            status: "Pending"
        },
        {
            id: 22,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_1",
            Total_Customers: 7,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 0.0021051732789246,
            Priority: 22,
            status: "Pending"
        },
        {
            id: 23,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_2",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0020104743619745,
            Priority: 23,
            status: "Pending"
        },
        {
            id: 24,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_4",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0019510281091397,
            Priority: 24,
            status: "Pending"
        },
        {
            id: 25,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_3",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0019081629281566,
            Priority: 25,
            status: "Pending"
        },
        {
            id: 26,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0016336375712262,
            Priority: 26,
            status: "Pending"
        },
        {
            id: 27,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_2",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0016233114970189,
            Priority: 27,
            status: "Pending"
        },
        {
            id: 28,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_3",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0015868716908622,
            Priority: 28,
            status: "Pending"
        },
        {
            id: 29,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0015565499461748,
            Priority: 29,
            status: "Pending"
        },
        {
            id: 30,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_4",
            Total_Customers: 5,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0015088333453196,
            Priority: 30,
            status: "Pending"
        },
        {
            id: 31,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_2",
            Total_Customers: 6,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0013960610973604,
            Priority: 31,
            status: "Pending"
        },
        {
            id: 32,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_3",
            Total_Customers: 6,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0013291507995174,
            Priority: 32,
            status: "Pending"
        },
        {
            id: 33,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_1",
            Total_Customers: 7,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Tenure",
            Effect: 0.0012804103293847,
            Priority: 33,
            status: "Pending"
        },
        {
            id: 34,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_5",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0012756687954697,
            Priority: 34,
            status: "Pending"
        },
        {
            id: 35,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_4",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0012635352406268,
            Priority: 35,
            status: "Pending"
        },
        {
            id: 36,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_2",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0010198440219015,
            Priority: 36,
            status: "Pending"
        },
        {
            id: 37,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0010150739868009,
            Priority: 37,
            status: "Pending"
        },
        {
            id: 38,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_4",
            Total_Customers: 5,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0009096727063959,
            Priority: 38,
            status: "Pending"
        },
        {
            id: 39,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_3",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.000811312846526,
            Priority: 39,
            status: "Pending"
        },
        {
            id: 40,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0007481127548429,
            Priority: 40,
            status: "Pending"
        },
        {
            id: 41,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_4",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0006856818569629,
            Priority: 41,
            status: "Pending"
        },
        {
            id: 42,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_3",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0003792633121773,
            Priority: 42,
            status: "Pending"
        },
        {
            id: 43,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_5",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0003236512126833,
            Priority: 43,
            status: "Pending"
        },
        {
            id: 44,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0002620670373961,
            Priority: 44,
            status: "Pending"
        },
        {
            id: 45,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_2",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.000237395349148,
            Priority: 45,
            status: "Pending"
        },
        {
            id: 46,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_2",
            Total_Customers: 6,
            Positive_impacted_feature: "Number of Dependents",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0001874153016267,
            Priority: 46,
            status: "Pending"
        },
        {
            id: 47,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_1",
            Total_Customers: 7,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Current_statement_month",
            Effect: 3.12449134035723E-05,
            Priority: 47,
            status: "Pending"
        },
        {
            id: 48,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: -3.796648389415E-05,
            Priority: 48,
            status: "Pending"
        },
        {
            id: 49,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_3",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: -4.32828316114E-05,
            Priority: 49,
            status: "Pending"
        },
        {
            id: 50,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_4",
            Total_Customers: 4,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: -4.514300052675E-05,
            Priority: 50,
            status: "Pending"
        }
    ]);

    const Campaign3itemsstatus = (id, newstatus) => {
        let allItems = Campaign3items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newstatus;
            }
            return item
        })
        setCampaign3items(allItems)
    }


    //Campaign Tab04
    const [Campaign4items, setCampaign4items] = useState([
        {
         id: 1,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_2",
         Total_Customers: 2,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0022045912338458,
         Priority: 1,
         status: "Pending"
        },
        {
         id: 2,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_4",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0021452688986415,
         Priority: 2,
         status: "Pending"
        },
        {
         id: 3,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_4",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0020578588040471,
         Priority: 3,
         status: "Pending"
        },
        {
         id: 4,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_1",
         Total_Customers: 3,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0017729895301009,
         Priority: 4,
         status: "Pending"
        },
        {
         id: 5,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_5",
         Total_Customers: 1,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0017289174143772,
         Priority: 5,
         status: "Pending"
        },
        {
         id: 6,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_1",
         Total_Customers: 3,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Current_statement_month",
         Effect: 0.0016400409343383,
         Priority: 6,
         status: "Pending"
        },
        {
         id: 7,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_3",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0016174562733351,
         Priority: 7,
         status: "Pending"
        },
        {
         id: 8,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_3",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0016125442120227,
         Priority: 8,
         status: "Pending"
        },
        {
         id: 9,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_2",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0015734971360851,
         Priority: 9,
         status: "Pending"
        },
        {
         id: 10,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub1_atomic_5",
         Total_Customers: 2,
         Positive_impacted_feature: "Funded_Amount",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0015079561189418,
         Priority: 10,
         status: "Pending"
        },
        {
         id: 11,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_5",
         Total_Customers: 1,
         Positive_impacted_feature: "min_Month_payment",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0014794878830031,
         Priority: 11,
         status: "Pending"
        },
        {
         id: 12,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_2",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0014294702190172,
         Priority: 12,
         status: "Pending"
        },
        {
         id: 13,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_4",
         Total_Customers: 2,
         Positive_impacted_feature: "min_Month_payment",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.001291240304391,
         Priority: 13,
         status: "Pending"
        },
        {
         id: 14,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_1",
         Total_Customers: 2,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0012770015584328,
         Priority: 14,
         status: "Pending"
        },
        {
         id: 15,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_3",
         Total_Customers: 2,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0012584036458843,
         Priority: 15,
         status: "Pending"
        },
        {
         id: 16,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_3",
         Total_Customers: 2,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0011890935472991,
         Priority: 16,
         status: "Pending"
        },
        {
         id: 17,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_4",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0011633935874503,
         Priority: 17,
         status: "Pending"
        },
        {
         id: 18,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_2",
         Total_Customers: 3,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Tenure",
         Effect: 0.0010893515353354,
         Priority: 18,
         status: "Pending"
        },
        {
         id: 19,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_5",
         Total_Customers: 2,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0010650322848294,
         Priority: 19,
         status: "Pending"
        },
        {
         id: 20,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub2_atomic_1",
         Total_Customers: 3,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Current_statement_month",
         Effect: 0.0009757375192926,
         Priority: 20,
         status: "Pending"
        },
        {
         id: 21,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_2",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0009390399290632,
         Priority: 21,
         status: "Pending"
        },
        {
         id: 22,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_3",
         Total_Customers: 2,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0007764156677636,
         Priority: 22,
         status: "Pending"
        },
        {
         id: 23,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_2",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0007360745826779,
         Priority: 23,
         status: "Pending"
        },
        {
         id: 24,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_4",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0007334271935699,
         Priority: 24,
         status: "Pending"
        },
        {
         id: 25,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_5",
         Total_Customers: 1,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0007250769826736,
         Priority: 25,
         status: "Pending"
        },
        {
         id: 26,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_1",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0006974629560239,
         Priority: 26,
         status: "Pending"
        },
        {
         id: 27,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_1",
         Total_Customers: 3,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0006567783952102,
         Priority: 27,
         status: "Pending"
        },
        {
         id: 28,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_3",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0006044830984793,
         Priority: 28,
         status: "Pending"
        },
        {
         id: 29,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_5",
         Total_Customers: 2,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0005938413013285,
         Priority: 29,
         status: "Pending"
        },
        {
         id: 30,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub3_atomic_4",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0005797137536124,
         Priority: 30,
         status: "Pending"
        },
        {
         id: 31,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_4",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0003808257100281,
         Priority: 31,
         status: "Pending"
        },
        {
         id: 32,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_1",
         Total_Customers: 3,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Approval_Amount",
         Effect: 0.0003741108535811,
         Priority: 32,
         status: "Pending"
        },
        {
         id: 33,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_5",
         Total_Customers: 2,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0003229419559505,
         Priority: 33,
         status: "Pending"
        },
        {
         id: 34,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_2",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0002974393549958,
         Priority: 34,
         status: "Pending"
        },
        {
         id: 35,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_2",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0002895938903765,
         Priority: 35,
         status: "Pending"
        },
        {
         id: 36,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_5",
         Total_Customers: 1,
         Positive_impacted_feature: "min_Month_payment",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0002738614895939,
         Priority: 36,
         status: "Pending"
        },
        {
         id: 37,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_3",
         Total_Customers: 2,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0002609344791672,
         Priority: 37,
         status: "Pending"
        },
        {
         id: 38,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_1",
         Total_Customers: 2,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0002379740126628,
         Priority: 38,
         status: "Pending"
        },
        {
         id: 39,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_3",
         Total_Customers: 2,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0002237880496039,
         Priority: 39,
         status: "Pending"
        },
        {
         id: 40,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub4_atomic_4",
         Total_Customers: 2,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0001511538297257,
         Priority: 40,
         status: "Pending"
        },
        {
         id: 41,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_1",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0001003684844936,
         Priority: 41,
         status: "Pending"
        },
        {
         id: 42,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_5",
         Total_Customers: 2,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 9.30114286665839E-05,
         Priority: 42,
         status: "Pending"
        },
        {
         id: 43,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_5",
         Total_Customers: 1,
         Positive_impacted_feature: "min_Month_payment",
         Negative_impacted_feature: "Early_buy_out",
         Effect: -5.35212731923801E-05,
         Priority: 43,
         status: "Pending"
        },
        {
         id: 44,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_2",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: -8.13619380066999E-05,
         Priority: 44,
         status: "Pending"
        },
        {
         id: 45,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_4",
         Total_Customers: 2,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Interest_rate",
         Effect: -0.0002277389825132,
         Priority: 45,
         status: "Pending"
        },
        {
         id: 46,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_4",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: -0.0002607071950363,
         Priority: 46,
         status: "Pending"
        },
        {
         id: 47,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_2",
         Total_Customers: 3,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: -0.0003674247606455,
         Priority: 47,
         status: "Pending"
        },
        {
         id: 48,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_1",
         Total_Customers: 3,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Tenure",
         Effect: -0.000421203199082,
         Priority: 48,
         status: "Pending"
        },
        {
         id: 49,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_3",
         Total_Customers: 2,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: -0.0004216724299242,
         Priority: 49,
         status: "Pending"
        },
        {
         id: 50,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Push Notification",
         Customer_segment: "Segment_1_PN_sub5_atomic_3",
         Total_Customers: 2,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: -0.0007953750715354,
         Priority: 50,
         status: "Pending"
        }
       ]);

    const Campaign4itemsstatus = (id, newstatus) => {
        let allItems = Campaign4items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newstatus;
            }
            return item
        })
        setCampaign4items(allItems)
    }



    //Campaign Tab05
    const [Campaign5items, setCampaign5items] = useState([
        {
         id: 1,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_1",
         Total_Customers: 32,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Tenure",
         Effect: 0.0393992311637383,
         status: "Pending",
         Priority: 1
        },
        {
         id: 2,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_3",
         Total_Customers: 32,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0343204456941222,
         status: "Pending",
         Priority: 2
        },
        {
         id: 3,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_5",
         Total_Customers: 31,
         Positive_impacted_feature: "Current_statement_month",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.034100270515169,
         status: "Pending",
         Priority: 3
        },
        {
         id: 4,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_2",
         Total_Customers: 32,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Tenure",
         Effect: 0.032185145895156,
         status: "Pending",
         Priority: 4
        },
        {
         id: 5,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_4",
         Total_Customers: 32,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.031864245280666,
         status: "Pending",
         Priority: 5
        },
        {
         id: 6,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_5",
         Total_Customers: 25,
         Positive_impacted_feature: "min_Month_payment",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0272093823559074,
         status: "Pending",
         Priority: 6
        },
        {
         id: 7,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_1",
         Total_Customers: 26,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0265613557356155,
         status: "Pending",
         Priority: 7
        },
        {
         id: 8,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_2",
         Total_Customers: 25,
         Positive_impacted_feature: "payment_value",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0257523652449467,
         status: "Pending",
         Priority: 8
        },
        {
         id: 9,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_4",
         Total_Customers: 25,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0257056782993344,
         status: "Pending",
         Priority: 9
        },
        {
         id: 10,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub1_atomic_3",
         Total_Customers: 25,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0237887381041695,
         status: "Pending",
         Priority: 10
        },
        {
         id: 11,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_5",
         Total_Customers: 31,
         Positive_impacted_feature: "Current_statement_month",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0214450466339176,
         status: "Pending",
         Priority: 11
        },
        {
         id: 12,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_4",
         Total_Customers: 32,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0207425803140654,
         status: "Pending",
         Priority: 12
        },
        {
         id: 13,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_3",
         Total_Customers: 31,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0207233916855124,
         status: "Pending",
         Priority: 13
        },
        {
         id: 14,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_1",
         Total_Customers: 32,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Current_statement_month",
         Effect: 0.0205425008423863,
         status: "Pending",
         Priority: 14
        },
        {
         id: 15,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_2",
         Total_Customers: 32,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "payment_value",
         Effect: 0.0202762753768374,
         status: "Pending",
         Priority: 15
        },
        {
         id: 16,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_5",
         Total_Customers: 25,
         Positive_impacted_feature: "Tenure",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.016235284933149,
         status: "Pending",
         Priority: 16
        },
        {
         id: 17,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_2",
         Total_Customers: 25,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0157860556146664,
         status: "Pending",
         Priority: 17
        },
        {
         id: 18,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_3",
         Total_Customers: 25,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0157189589297336,
         status: "Pending",
         Priority: 18
        },
        {
         id: 19,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_1",
         Total_Customers: 26,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0156387142405059,
         status: "Pending",
         Priority: 19
        },
        {
         id: 20,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub2_atomic_4",
         Total_Customers: 25,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0154528182505771,
         status: "Pending",
         Priority: 20
        },
        {
         id: 21,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_4",
         Total_Customers: 32,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.014872941932014,
         status: "Pending",
         Priority: 21
        },
        {
         id: 22,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_3",
         Total_Customers: 31,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0147574464118162,
         status: "Pending",
         Priority: 22
        },
        {
         id: 23,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_1",
         Total_Customers: 32,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Current_statement_month",
         Effect: 0.0145679649413975,
         status: "Pending",
         Priority: 23
        },
        {
         id: 24,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_2",
         Total_Customers: 32,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "payment_value",
         Effect: 0.0142770238569058,
         status: "Pending",
         Priority: 24
        },
        {
         id: 25,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_5",
         Total_Customers: 31,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0142664182190323,
         status: "Pending",
         Priority: 25
        },
        {
         id: 26,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_3",
         Total_Customers: 25,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "min_Month_payment",
         Effect: 0.0116511325325091,
         status: "Pending",
         Priority: 26
        },
        {
         id: 27,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_5",
         Total_Customers: 24,
         Positive_impacted_feature: "Tenure",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0116184228844836,
         status: "Pending",
         Priority: 27
        },
        {
         id: 28,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_2",
         Total_Customers: 25,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0114484029470668,
         status: "Pending",
         Priority: 28
        },
        {
         id: 29,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_4",
         Total_Customers: 25,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0112642179622225,
         status: "Pending",
         Priority: 29
        },
        {
         id: 30,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub3_atomic_1",
         Total_Customers: 26,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0109492869506782,
         status: "Pending",
         Priority: 30
        },
        {
         id: 31,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_2",
         Total_Customers: 32,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.010086463510758,
         status: "Pending",
         Priority: 31
        },
        {
         id: 32,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_5",
         Total_Customers: 31,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0099607719987572,
         status: "Pending",
         Priority: 32
        },
        {
         id: 33,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_3",
         Total_Customers: 31,
         Positive_impacted_feature: "Tenure",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0099040087921049,
         status: "Pending",
         Priority: 33
        },
        {
         id: 34,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_1",
         Total_Customers: 32,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Current_statement_month",
         Effect: 0.0097922853614153,
         status: "Pending",
         Priority: 34
        },
        {
         id: 35,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_4",
         Total_Customers: 32,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.009714724482114,
         status: "Pending",
         Priority: 35
        },
        {
         id: 36,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_1",
         Total_Customers: 26,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0084648178334454,
         status: "Pending",
         Priority: 36
        },
        {
         id: 37,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_4",
         Total_Customers: 25,
         Positive_impacted_feature: "payment_value",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0083848157118275,
         status: "Pending",
         Priority: 37
        },
        {
         id: 38,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_5",
         Total_Customers: 25,
         Positive_impacted_feature: "Current_statement_month",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0082462154509453,
         status: "Pending",
         Priority: 38
        },
        {
         id: 39,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_2",
         Total_Customers: 25,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "min_Month_payment",
         Effect: 0.008189392536713,
         status: "Pending",
         Priority: 39
        },
        {
         id: 40,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub4_atomic_3",
         Total_Customers: 25,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0081539919456176,
         status: "Pending",
         Priority: 40
        },
        {
         id: 41,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_4",
         Total_Customers: 32,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0051463932660718,
         status: "Pending",
         Priority: 41
        },
        {
         id: 42,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_5",
         Total_Customers: 31,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0049561369858779,
         status: "Pending",
         Priority: 42
        },
        {
         id: 43,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_1",
         Total_Customers: 32,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Current_statement_month",
         Effect: 0.0046185296368395,
         status: "Pending",
         Priority: 43
        },
        {
         id: 44,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_2",
         Total_Customers: 25,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0046144838929711,
         status: "Pending",
         Priority: 44
        },
        {
         id: 45,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_3",
         Total_Customers: 25,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0046127197345682,
         status: "Pending",
         Priority: 45
        },
        {
         id: 46,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_3",
         Total_Customers: 31,
         Positive_impacted_feature: "Number of Dependents",
         Negative_impacted_feature: "Interest_rate",
         Effect: 0.0045629668281902,
         status: "Pending",
         Priority: 46
        },
        {
         id: 47,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_1",
         Total_Customers: 26,
         Positive_impacted_feature: "Early_buy_out",
         Negative_impacted_feature: "Payment_frequency",
         Effect: 0.0044323264314596,
         status: "Pending",
         Priority: 47
        },
        {
         id: 48,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_5",
         Total_Customers: 24,
         Positive_impacted_feature: "Current_statement_month",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0043858018398854,
         status: "Pending",
         Priority: 48
        },
        {
         id: 49,
         Next_Best_Product: "Credit Card",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_2",
         Total_Customers: 32,
         Positive_impacted_feature: "Interest_rate",
         Negative_impacted_feature: "Term(months)",
         Effect: 0.0043529165821906,
         status: "Pending",
         Priority: 49
        },
        {
         id: 50,
         Next_Best_Product: "Loan",
         Next_Best_Action: "Loyalty",
         Customer_segment: "Segment_1_Loyalty_sub5_atomic_4",
         Total_Customers: 25,
         Positive_impacted_feature: "min_Month_payment",
         Negative_impacted_feature: "Early_buy_out",
         Effect: 0.0037983199951129,
         status: "Pending",
         Priority: 50
        }
       ]);

    const Campaign5itemsstatus = (id, newstatus) => {
        let allItems = Campaign5items;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newstatus;
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
                data: AdminCampaignBarChartTab01.map((data) => (data.Discount_main_Credit_Card)),
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
                data: AdminCampaignBarChartTab02.map((data) => (data.Promotional_mail_Credit_Card)),
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
                data: AdminCampaignBarChartTab03.map((data) => (data.Phone_call_Credit_Card)),
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
                data: AdminCampaignBarChartTab04.map((data) => (data.Push_notification_Credit_Card)),
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
                data: [1, 541, 1, 441, 1, 802, 1, 478, 1, 296, 2, 429],
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
                data: AdminCampaignBarChartTab05.map((data) => (data.Loyalty_mail_Credit_Card)),
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

                        <Campaign01Table01 Campaign1items={Campaign1items} setCampaign1items={setCampaign1items} Campaign1itemsstatus={Campaign1itemsstatus} />
                        <Campaign01Table02 Campaign1items={Campaign1items} setCampaign1items={setCampaign1items} Campaign1itemsstatus={Campaign1itemsstatus} />
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

                        <Campaign02Table01 Campaign2items={Campaign2items} setCampaign2items={setCampaign2items} Campaign2itemsstatus={Campaign2itemsstatus} />
                        <Campaign02Table02 Campaign2items={Campaign2items} setCampaign2items={setCampaign2items} Campaign2itemsstatus={Campaign2itemsstatus} />
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


                        <Campaign03Table01 Campaign3items={Campaign3items} setCampaign3items={setCampaign3items} Campaign3itemsstatus={Campaign3itemsstatus} />
                        <Campaign03Table02 Campaign3items={Campaign3items} setCampaign3items={setCampaign3items} Campaign3itemsstatus={Campaign3itemsstatus} />
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

                        <Campaign04Table01 Campaign4items={Campaign4items} setCampaign4items={setCampaign4items} Campaign4itemsstatus={Campaign4itemsstatus} />
                        <Campaign04Table02 Campaign4items={Campaign4items} setCampaign4items={setCampaign4items} Campaign4itemsstatus={Campaign4itemsstatus} />
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


                        <Campaign05Table01 Campaign5items={Campaign5items} setCampaign5items={setCampaign5items} Campaign5itemsstatus={Campaign5itemsstatus} />
                        <Campaign05Table02 Campaign5items={Campaign5items} setCampaign5items={setCampaign5items} Campaign5itemsstatus={Campaign5itemsstatus} />
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