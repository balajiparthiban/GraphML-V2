import React from "react";
import { useState } from 'react'
import Table03 from '../../component/ExecutiveTable01'
import Table04 from '../../component/ExecutiveTable02'
import AdminProductChart from '../../component/AdminProductChart'

import { AdminProductBarChartTab01 } from "../../json/v2/AdminProductBarChartTab01"
import { AdminProductBarChartTab02 } from "../../json/v2/AdminProductBarChartTab02"
// import { AdminProductTableTab01 } from '../../json/v2/AdminProductTableTab01'
// import * as AdminProductTableTab01 from '../../json/v2/AdminProductTableTab01'

// import adminproductable from '../../json/v2/AdminProductTableTab01.json'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'


// import * as AdminProductTableTab01 from '../../json/v2/AdminProductTableTab01'

// import * as FilterData from "../../json/campaign_copy"
// import * as Product1 from "../../json/campaign_copy"
// import * as SalesData from "../../json/campaign_copy"
import './style.scss'

const AdminProduct = () => {


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



    {/*
    const [items, setItems] = useState([
        {
            id: 1,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub1_atomic_5",
            Total_Customers: 25,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0272093823559074,
            Rank: 1
        },
        {
            id: 2,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub1_atomic_1",
            Total_Customers: 26,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0265613557356155,
            Rank: 2
        },
        {
            id: 3,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub1_atomic_2",
            Total_Customers: 25,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0257523652449467,
            Rank: 3
        },
        {
            id: 4,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub1_atomic_4",
            Total_Customers: 25,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0257056782993344,
            Rank: 4
        },
        {
            id: 5,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub1_atomic_3",
            Total_Customers: 25,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0237887381041695,
            Rank: 5
        },
        {
            id: 6,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub2_atomic_5",
            Total_Customers: 25,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.016235284933149,
            Rank: 6
        },
        {
            id: 7,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub2_atomic_2",
            Total_Customers: 25,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0157860556146664,
            Rank: 7
        },
        {
            id: 8,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub2_atomic_3",
            Total_Customers: 25,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0157189589297336,
            Rank: 8
        },
        {
            id: 9,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub2_atomic_1",
            Total_Customers: 26,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0156387142405059,
            Rank: 9
        },
        {
            id: 10,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub2_atomic_4",
            Total_Customers: 25,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0154528182505771,
            Rank: 10
        },
        {
            id: 11,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub3_atomic_3",
            Total_Customers: 25,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.0116511325325091,
            Rank: 11
        },
        {
            id: 12,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub3_atomic_5",
            Total_Customers: 24,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0116184228844836,
            Rank: 12
        },
        {
            id: 13,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub3_atomic_2",
            Total_Customers: 25,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0114484029470668,
            Rank: 13
        },
        {
            id: 14,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub3_atomic_4",
            Total_Customers: 25,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0112642179622225,
            Rank: 14
        },
        {
            id: 15,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub3_atomic_1",
            Total_Customers: 26,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.0109492869506782,
            Rank: 15
        },
        {
            id: 16,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0109101030053237,
            Rank: 16
        },
        {
            id: 17,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0107876798200393,
            Rank: 17
        },
        {
            id: 18,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.0107012540126826,
            Rank: 18
        },
        {
            id: 19,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_1",
            Total_Customers: 20,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.0106024386731964,
            Rank: 19
        },
        {
            id: 20,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub1_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0104665471239033,
            Rank: 20
        },
        {

            id: 21,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00940140239429003,
            Rank: 21
        },
        {
            id: 22,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00898906188785803,
            Rank: 22
        },
        {
            id: 23,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00887516372192884,
            Rank: 23
        },
        {
            id: 24,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00866372591717527,
            Rank: 24
        },
        {
            id: 25,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub4_atomic_1",
            Total_Customers: 26,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00846481783344548,
            Rank: 25
        },
        {
            id: 26,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub4_atomic_4",
            Total_Customers: 25,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00838481571182752,
            Rank: 26
        },
        {
            id: 27,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub4_atomic_5",
            Total_Customers: 25,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0082462154509453,
            Rank: 27
        },
        {
            id: 28,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub4_atomic_2",
            Total_Customers: 25,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.00818939253671305,
            Rank: 28
        },
        {
            id: 29,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub4_atomic_3",
            Total_Customers: 25,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00815399194561762,
            Rank: 29
        },
        {
            id: 30,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00804884080282734,
            Rank: 30
        },
        {
            id: 31,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.00752080248431806,
            Rank: 31
        },
        {
            id: 32,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.00748121674468297,
            Rank: 32
        },
        {
            id: 33,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_1",
            Total_Customers: 20,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00744847939908577,
            Rank: 33
        },
        {
            id: 34,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "min_Month_payment",
            Effect: 0.0074134755815942,
            Rank: 34
        },
        {
            id: 35,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub2_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0071596898716402,
            Rank: 35
        },
        {
            id: 36,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00636199290784842,
            Rank: 36
        },
        {
            id: 37,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00623318793423739,
            Rank: 37
        },
        {
            id: 38,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0061424941124294,
            Rank: 38
        },
        {
            id: 39,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00610082251358793,
            Rank: 39
        },
        {
            id: 40,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00604551999815959,
            Rank: 40
        },
        {
            id: 41,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_1",
            Total_Customers: 20,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00551014368148164,
            Rank: 41
        },
        {
            id: 42,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00547385004571971,
            Rank: 42
        },
        {
            id: 43,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00532887065373396,
            Rank: 43
        },
        {
            id: 44,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00530894598491077,
            Rank: 44
        },
        {
            id: 45,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub3_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00530752495351636,
            Rank: 45
        },
        {
            id: 46,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00469304152636236,
            Rank: 46
        },
        {
            id: 47,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0046630449734909,
            Rank: 47
        },
        {
            id: 48,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub5_atomic_2",
            Total_Customers: 25,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0046144838929711,
            Rank: 48
        },
        {
            id: 49,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub5_atomic_3",
            Total_Customers: 25,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00461271973456826,
            Rank: 49
        },
        {
            id: 50,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00453835336886533,
            Rank: 50
        },
        {
            id: 51,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00453004920615997,
            Rank: 51
        },
        {
            id: 52,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub5_atomic_1",
            Total_Customers: 26,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0044323264314596,
            Rank: 52
        },
        {
            id: 53,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00439440239154582,
            Rank: 53
        },
        {
            id: 54,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub5_atomic_5",
            Total_Customers: 24,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00438580183988544,
            Rank: 54
        },
        {
            id: 55,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_2",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00435682254862516,
            Rank: 55
        },
        {
            id: 56,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_3",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00429305863688937,
            Rank: 56
        },
        {
            id: 57,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00427351426689632,
            Rank: 57
        },
        {
            id: 58,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00410229526908928,
            Rank: 58
        },
        {
            id: 59,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_1",
            Total_Customers: 20,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00395321761676699,
            Rank: 59
        },
        {
            id: 60,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00390307728976517,
            Rank: 60
        },
        {
            id: 61,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00380063384513807,
            Rank: 61
        },
        {
            id: 62,
            Product: "Loan",
            Recommended_campaign: "Loyalty",
            Customer_segment: "Segment_1_Loyalty_sub5_atomic_4",
            Total_Customers: 25,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00379831999511299,
            Rank: 62
        },
        {
            id: 63,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub1_atomic_4",
            Total_Customers: 5,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00374297638485864,
            Rank: 63
        },
        {
            id: 64,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00369729728594205,
            Rank: 64
        },
        {
            id: 65,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub4_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00357951887563885,
            Rank: 65
        },
        {
            id: 66,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00326266681304883,
            Rank: 66
        },
        {
            id: 67,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00323188895202353,
            Rank: 67
        },
        {
            id: 68,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00321897092428327,
            Rank: 68
        },
        {
            id: 69,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00305778975959964,
            Rank: 69
        },
        {
            id: 70,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00305659807848313,
            Rank: 70
        },
        {
            id: 71,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_4",
            Total_Customers: 5,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00243983788728066,
            Rank: 71
        },
        {
            id: 72,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0023673134036461,
            Rank: 72
        },
        {
            id: 73,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00234390018287175,
            Rank: 73
        },
        {
            id: 74,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub1_atomic_2",
            Total_Customers: 2,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00220459123384589,
            Rank: 74
        },
        {
            id: 75,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_2",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00218982531390558,
            Rank: 75
        },
        {
            id: 76,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub2_atomic_3",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00213698842409292,
            Rank: 76
        },
        {
            id: 77,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub1_atomic_4",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0020578588040471,
            Rank: 77
        },
        {
            id: 78,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_4",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00196236510561629,
            Rank: 78
        },
        {
            id: 79,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_2",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00193554116905157,
            Rank: 79
        },
        {
            id: 80,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_1",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0019176001951642,
            Rank: 80
        },
        {
            id: 81,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_5",
            Total_Customers: 18,
            Positive_impacted_feature: "Tenure",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00185044409229053,
            Rank: 81
        },
        {
            id: 82,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00183379353475296,
            Rank: 82
        },
        {
            id: 83,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub1_atomic_1",
            Total_Customers: 3,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00177298953010093,
            Rank: 83
        },
        {
            id: 84,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub1_atomic_5",
            Total_Customers: 1,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0017289174143772,
            Rank: 84
        },
        {
            id: 85,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00163363757122627,
            Rank: 85
        },
        {
            id: 86,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_2",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00162331149701894,
            Rank: 86
        },
        {
            id: 87,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub1_atomic_3",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00161745627333514,
            Rank: 87
        },
        {
            id: 88,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 22,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00160061209587203,
            Rank: 88
        },
        {
            id: 89,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_3",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0015868716908622,
            Rank: 89
        },
        {
            id: 90,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0015565499461748,
            Rank: 90
        },
        {
            id: 91,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00152361202479123,
            Rank: 91
        },
        {
            id: 92,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub3_atomic_4",
            Total_Customers: 5,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0015088333453196,
            Rank: 92
        },
        {
            id: 93,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub2_atomic_5",
            Total_Customers: 1,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0014794878830031,
            Rank: 93
        },
        {
            id: 94,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 23,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00147520369670541,
            Rank: 94
        },
        {
            id: 95,
            Product: "Loan",
            Recommended_campaign: "Promotional Email",
            Customer_segment: "Segment_1_Promo_sub5_atomic_3",
            Total_Customers: 19,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00146331951753241,
            Rank: 95
        },
        {
            id: 96,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub2_atomic_2",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0014294702190172,
            Rank: 96
        },
        {
            id: 97,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub2_atomic_4",
            Total_Customers: 2,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00129124030439105,
            Rank: 97
        },
        {
            id: 98,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub2_atomic_1",
            Total_Customers: 2,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00127700155843285,
            Rank: 98
        },
        {
            id: 99,
            Product: "Loan",
            Recommended_campaign: "Discount Email",
            Customer_segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 22,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00123155024533479,
            Rank: 99
        },
        {
            id: 100,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub2_atomic_3",
            Total_Customers: 2,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00118909354729915,
            Rank: 100
        },
        {
            id: 101,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_2",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00101984402190153,
            Rank: 101
        },
        {
            id: 102,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00101507398680098,
            Rank: 102
        },
        {
            id: 103,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub3_atomic_2",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0009390399290632,
            Rank: 103
        },
        {
            id: 104,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_4",
            Total_Customers: 5,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00090967270639596,
            Rank: 104
        },
        {
            id: 105,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_3",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.000811312846526075,
            Rank: 105
        },
        {
            id: 106,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub4_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Current_statement_month",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00074811275484295,
            Rank: 106
        },
        {
            id: 107,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub3_atomic_4",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0007334271935699,
            Rank: 107
        },
        {
            id: 108,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub3_atomic_5",
            Total_Customers: 1,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0007250769826736,
            Rank: 108
        },
        {
            id: 109,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub3_atomic_1",
            Total_Customers: 3,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.000656778395210266,
            Rank: 109
        },
        {
            id: 110,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub3_atomic_3",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0006044830984793,
            Rank: 110
        },
        {
            id: 111,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub4_atomic_2",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0002974393549958,
            Rank: 111
        },
        {
            id: 112,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub4_atomic_5",
            Total_Customers: 1,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.0002738614895939,
            Rank: 112
        },
        {
            id: 113,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_1",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.00026206703739614,
            Rank: 113
        },
        {
            id: 114,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub4_atomic_3",
            Total_Customers: 2,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.0002609344791672,
            Rank: 114
        },
        {
            id: 115,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub4_atomic_1",
            Total_Customers: 2,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Payment_frequency",
            Effect: 0.00023797401266285,
            Rank: 115
        },
        {
            id: 116,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_2",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.000237395349148,
            Rank: 116
        },
        {
            id: 117,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub4_atomic_4",
            Total_Customers: 2,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: 0.00015115382972575,
            Rank: 117
        },
        {
            id: 118,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub5_atomic_1",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: 0.000100368484493654,
            Rank: 118
        },
        {
            id: 119,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_5",
            Total_Customers: 4,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: -3.796648389415E-05,
            Rank: 119
        },
        {
            id: 120,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_3",
            Total_Customers: 5,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: -4.32828316114E-05,
            Rank: 120
        },
        {
            id: 121,
            Product: "Loan",
            Recommended_campaign: "Phone call",
            Customer_segment: "Segment_1_Phone_sub5_atomic_4",
            Total_Customers: 4,
            Positive_impacted_feature: "payment_value",
            Negative_impacted_feature: "Early_buy_out",
            Effect: -4.514300052675E-05,
            Rank: 121
        },
        {
            id: 122,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub5_atomic_5",
            Total_Customers: 1,
            Positive_impacted_feature: "min_Month_payment",
            Negative_impacted_feature: "Early_buy_out",
            Effect: -5.35212731923801E-05,
            Rank: 122
        },
        {
            id: 123,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub5_atomic_2",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: -8.13619380066999E-05,
            Rank: 123
        },
        {
            id: 124,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub5_atomic_4",
            Total_Customers: 2,
            Positive_impacted_feature: "Early_buy_out",
            Negative_impacted_feature: "Interest_rate",
            Effect: -0.0002277389825132,
            Rank: 124
        },
        {
            id: 125,
            Product: "Loan",
            Recommended_campaign: "Push Notification",
            Customer_segment: "Segment_1_PN_sub5_atomic_3",
            Total_Customers: 2,
            Positive_impacted_feature: "Interest_rate",
            Negative_impacted_feature: "Early_buy_out",
            Effect: -0.0007953750715354,
            Rank: 125
        }
    ]);
*/}



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


    // Tab01-Line-Chart
    const [AdminProductLineChartTabo1] = useState({
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

        labels: ["Loans"],

        datasets: [
            {
                label: 'Total Sales',
                data: [3040, 3111, 2730, 2868, 2752, 2338],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#8D72E1',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#bbaaf1',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
                // height: 100,
                // fill: {
                //   target: "origin", // 3. Set the fill options
                //   above: ["#faebd7"]
                // }
            }
        ],
    });


    // Tab02-Line-Chart
    const [AdminProductLineChartTabo2] = useState({
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

        labels: ["Loans"],

        datasets: [
            {
                label: 'Total Sales',
                data: [2379, 2327, 2167, 2602, 2339, 1497],
                type: 'line',
                backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#8D72E1',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#bbaaf1',
                    '#c40076',
                    '#07d36b',
                    '#bec120',
                    '#ab310c',
                    '#cf3877'
                ],
                borderWidth: 8,
                // height: 100,
                // fill: {
                //   target: "origin", // 3. Set the fill options
                //   above: ["#faebd7"]
                // }
            }
        ],
    });


    // Tab01-Bar-Chart
    const [adminProductBarChartTab01] = useState({
        labels: AdminProductBarChartTab01.map((data) => data.Month),
        datasets: [
            {
                label: 'Discount Mail',
                data: AdminProductBarChartTab01.map((data) => (data.Discount_main)),
                backgroundColor: ["#BCEAD5"],
            },
            {
                label: 'Promotional Mail',
                data: AdminProductBarChartTab01.map((data) => (data.Promotional_mail)),
                backgroundColor: ["#B9E0FF"],
            },
            {
                label: 'Phone Call',
                data: AdminProductBarChartTab01.map((data) => (data.Phone_call)),
                backgroundColor: ["#8D9EFF"],
            },
            {
                label: 'Push Notification',
                data: AdminProductBarChartTab01.map((data) => (data.Push_notification)),
                backgroundColor: ["#8D72E1"],
            },
            {
                label: 'Loyalty Mail',
                data: AdminProductBarChartTab01.map((data) => (data.Loyalty_mail)),
                backgroundColor: ["#8D72E1"],
            }
        ],
    });


    // Tab02-Bar-Chart
    const [adminProductBarChartTab02] = useState({
        labels: AdminProductBarChartTab02.map((data) => data.Month),
        datasets: [
            {
                label: 'Discount Mail',
                data: AdminProductBarChartTab02.map((data) => (data.Discount_main)),
                backgroundColor: ["#BCEAD5"],
            },
            {
                label: 'Promotional Mail',
                data: AdminProductBarChartTab02.map((data) => (data.Promotional_mail)),
                backgroundColor: ["#B9E0FF"],
            },
            {
                label: 'Phone Call',
                data: AdminProductBarChartTab02.map((data) => (data.Phone_call)),
                backgroundColor: ["#8D9EFF"],
            },
            {
                label: 'Push Notification',
                data: AdminProductBarChartTab02.map((data) => (data.Push_notification)),
                backgroundColor: ["#8D72E1"],
            },
            {
                label: 'Loyalty Mail',
                data: AdminProductBarChartTab02.map((data) => (data.Loyalty_mail)),
                backgroundColor: ["#8D72E1"],
            }
        ],
    });


    return (



        <Tabs>
            <TabList>
                <Tab>Loan</Tab>
                <Tab>Credit Card</Tab>
            </TabList>

            <TabPanel>
                <div className='admin-campaign'>
                    <div className='admin-campaign-head'>
                        <h3>Admin Product</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total Sales of particular: <span>320L</span></h6>
                        </div>

                    </div>


                    <div>
                        <div className="chart-flex">
                            <div className='white-bg width-49'>
                                <AdminProductChart chartData={adminProductBarChartTab01} />
                            </div>

                            <div className='white-bg width-49'>
                                <AdminProductChart chartData={AdminProductLineChartTabo1} />
                            </div>
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
                        <h3>Admin Product 02</h3>

                        <div className='admin-campaign-head-right'>
                            <h6>Total Sales of particular: <span>320L</span></h6>
                        </div>

                    </div>


                    <div>

                        <div className="chart-flex">
                            <div className='white-bg width-49'>
                                <AdminProductChart chartData={adminProductBarChartTab02} />
                            </div>

                            <div className='white-bg width-49'>
                                <AdminProductChart chartData={AdminProductLineChartTabo2} />
                            </div>
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

export default AdminProduct