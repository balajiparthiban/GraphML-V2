import React from "react";
import { useState } from 'react'
import Loan01 from '../../component/AdminProductLoanTable/Loan01'
import Loan02 from '../../component/AdminProductLoanTable/Loan02'

import Credit01 from '../../component/AdminProductCreditTable/Credit01'
import Credit02 from '../../component/AdminProductCreditTable/Credit02'

import AdminProductBarChartBase from '../../component/AdminProductBarChartBase'
import AdminProductLineChartBase from '../../component/AdminProductLineChartBase'
import AdminProductLineChartBaseCreditCard from '../../component/AdminProductLineChartBaseCreditCard'

import { AdminProductBarChartTab01 } from "../../json/v2/AdminProductBarChartTab01"
import { AdminProductBarChartTab02 } from "../../json/v2/AdminProductBarChartTab02"
// import { AdminProductTableTab01 } from '../../json/v2/AdminProductTableTab01'
// import * as AdminProductTableTab01 from '../../json/v2/AdminProductTableTab01'
// import adminproductable from '../../json/v2/AdminProductTableTab01.json'
// import * as AdminProductTableTab01 from '../../json/v2/AdminProductTableTab01'
// import * as FilterData from "../../json/campaign_copy"
// import * as Product1 from "../../json/campaign_copy"
// import * as SalesData from "../../json/campaign_copy"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './style.scss'

const AdminProduct = () => {


    // LoanTableData

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
            Rank: 1,
            status: 'Pending'
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
            Rank: 2,
            status: 'Pending'
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
            Rank: 3,
            status: 'Pending'
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
            Rank: 4,
            status: 'Pending'
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
            Rank: 5,
            status: 'Pending'
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
            Rank: 6,
            status: 'Pending'
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
            Rank: 7,
            status: 'Pending'
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
            Rank: 8,
            status: 'Pending'
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
            Rank: 9,
            status: 'Pending'
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
            Rank: 10,
            status: 'Pending'
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
            Rank: 11,
            status: 'Pending'
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
            Rank: 12,
            status: 'Pending'
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
            Rank: 13,
            status: 'Pending'
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
            Rank: 14,
            status: 'Pending'
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
            Rank: 15,
            status: 'Pending'
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
            Rank: 16,
            status: 'Pending'
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
            Rank: 17,
            status: 'Pending'
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
            Rank: 18,
            status: 'Pending'
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
            Rank: 19,
            status: 'Pending'
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
            Rank: 20,
            status: 'Pending'
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
            Rank: 21,
            status: 'Pending'
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
            Rank: 22,
            status: 'Pending'
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
            Rank: 23,
            status: 'Pending'
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
            Rank: 24,
            status: 'Pending'
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
            Rank: 25,
            status: 'Pending'
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
            Rank: 26,
            status: 'Pending'
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
            Rank: 27,
            status: 'Pending'
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
            Rank: 28,
            status: 'Pending'
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
            Rank: 29,
            status: 'Pending'
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
            Rank: 30,
            status: 'Pending'
        },
        // {
        //     id: 31,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub2_atomic_3",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "min_Month_payment",
        //     Effect: 0.00752080248431806,
        //     Rank: 31,
        //     status: 'Pending'
        // },
        // {
        //     id: 32,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub2_atomic_4",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "min_Month_payment",
        //     Effect: 0.00748121674468297,
        //     Rank: 32,
        //     status: 'Pending'
        // },
        // {
        //     id: 33,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub2_atomic_1",
        //     Total_Customers: 20,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00744847939908577,
        //     Rank: 33,
        //     status: 'Pending'
        // },
        // {
        //     id: 34,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub2_atomic_2",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "min_Month_payment",
        //     Effect: 0.0074134755815942,
        //     Rank: 34,
        //     status: 'Pending'
        // },
        // {
        //     id: 35,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub2_atomic_5",
        //     Total_Customers: 18,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.0071596898716402,
        //     Rank: 35,
        //     status: 'Pending'
        // },
        // {
        //     id: 36,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub2_atomic_2",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00636199290784842,
        //     Rank: 36,
        //     status: 'Pending'
        // },
        // {
        //     id: 37,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub2_atomic_1",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00623318793423739,
        //     Rank: 37,
        //     status: 'Pending'
        // },
        // {
        //     id: 38,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub2_atomic_3",
        //     Total_Customers: 22,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.0061424941124294,
        //     Rank: 38,
        //     status: 'Pending'
        // },
        // {
        //     id: 39,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub2_atomic_4",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00610082251358793,
        //     Rank: 39,
        //     status: 'Pending'
        // },
        // {
        //     id: 40,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub2_atomic_5",
        //     Total_Customers: 22,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00604551999815959,
        //     Rank: 40,
        //     status: 'Pending'
        // },
        // {
        //     id: 41,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub3_atomic_1",
        //     Total_Customers: 20,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00551014368148164,
        //     Rank: 41,
        //     status: 'Pending'
        // },
        // {
        //     id: 42,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub3_atomic_4",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00547385004571971,
        //     Rank: 42,
        //     status: 'Pending'
        // },
        // {
        //     id: 43,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub3_atomic_3",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00532887065373396,
        //     Rank: 43,
        //     status: 'Pending'
        // },
        // {
        //     id: 44,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub3_atomic_5",
        //     Total_Customers: 18,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00530894598491077,
        //     Rank: 44,
        //     status: 'Pending'
        // },
        // {
        //     id: 45,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub3_atomic_2",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00530752495351636,
        //     Rank: 45,
        //     status: 'Pending'
        // },
        // {
        //     id: 46,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub3_atomic_1",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00469304152636236,
        //     Rank: 46,
        //     status: 'Pending'
        // },
        // {
        //     id: 47,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub3_atomic_3",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.0046630449734909,
        //     Rank: 47,
        //     status: 'Pending'
        // },
        // {
        //     id: 48,
        //     Product: "Loan",
        //     Recommended_campaign: "Loyalty",
        //     Customer_segment: "Segment_1_Loyalty_sub5_atomic_2",
        //     Total_Customers: 25,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.0046144838929711,
        //     Rank: 48,
        //     status: 'Pending'
        // },
        // {
        //     id: 49,
        //     Product: "Loan",
        //     Recommended_campaign: "Loyalty",
        //     Customer_segment: "Segment_1_Loyalty_sub5_atomic_3",
        //     Total_Customers: 25,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00461271973456826,
        //     Rank: 49,
        //     status: 'Pending'
        // },
        // {
        //     id: 50,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub3_atomic_2",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00453835336886533,
        //     Rank: 50,
        //     status: 'Pending'
        // },
        // {
        //     id: 51,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub3_atomic_5",
        //     Total_Customers: 22,
        //     Positive_impacted_feature: "payment_value",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00453004920615997,
        //     Rank: 51,
        //     status: 'Pending'
        // },
        // {
        //     id: 52,
        //     Product: "Loan",
        //     Recommended_campaign: "Loyalty",
        //     Customer_segment: "Segment_1_Loyalty_sub5_atomic_1",
        //     Total_Customers: 26,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.0044323264314596,
        //     Rank: 52,
        //     status: 'Pending'
        // },
        // {
        //     id: 53,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub3_atomic_4",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00439440239154582,
        //     Rank: 53,
        //     status: 'Pending'
        // },
        // {
        //     id: 54,
        //     Product: "Loan",
        //     Recommended_campaign: "Loyalty",
        //     Customer_segment: "Segment_1_Loyalty_sub5_atomic_5",
        //     Total_Customers: 24,
        //     Positive_impacted_feature: "Current_statement_month",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00438580183988544,
        //     Rank: 54,
        //     status: 'Pending'
        // },
        // {
        //     id: 55,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub1_atomic_2",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00435682254862516,
        //     Rank: 55,
        //     status: 'Pending'
        // },
        // {
        //     id: 56,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub1_atomic_3",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00429305863688937,
        //     Rank: 56,
        //     status: 'Pending'
        // },
        // {
        //     id: 57,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub1_atomic_5",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Current_statement_month",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00427351426689632,
        //     Rank: 57,
        //     status: 'Pending'
        // },
        // {
        //     id: 58,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub1_atomic_1",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00410229526908928,
        //     Rank: 58,
        //     status: 'Pending'
        // },
        // {
        //     id: 59,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub4_atomic_1",
        //     Total_Customers: 20,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00395321761676699,
        //     Rank: 59,
        //     status: 'Pending'
        // },
        // {
        //     id: 60,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub4_atomic_2",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00390307728976517,
        //     Rank: 60,
        //     status: 'Pending'
        // },
        // {
        //     id: 61,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub4_atomic_3",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00380063384513807,
        //     Rank: 61,
        //     status: 'Pending'
        // },
        // {
        //     id: 62,
        //     Product: "Loan",
        //     Recommended_campaign: "Loyalty",
        //     Customer_segment: "Segment_1_Loyalty_sub5_atomic_4",
        //     Total_Customers: 25,
        //     Positive_impacted_feature: "min_Month_payment",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00379831999511299,
        //     Rank: 62,
        //     status: 'Pending'
        // },
        // {
        //     id: 63,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub1_atomic_4",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "payment_value",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00374297638485864,
        //     Rank: 63,
        //     status: 'Pending'
        // },
        // {
        //     id: 64,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub4_atomic_5",
        //     Total_Customers: 18,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00369729728594205,
        //     Rank: 64,
        //     status: 'Pending'
        // },
        // {
        //     id: 65,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub4_atomic_4",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00357951887563885,
        //     Rank: 65,
        //     status: 'Pending'
        // },
        // {
        //     id: 66,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub4_atomic_5",
        //     Total_Customers: 22,
        //     Positive_impacted_feature: "min_Month_payment",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00326266681304883,
        //     Rank: 66,
        //     status: 'Pending'
        // },
        // {
        //     id: 67,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub4_atomic_4",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00323188895202353,
        //     Rank: 67,
        //     status: 'Pending'
        // },
        // {
        //     id: 68,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub4_atomic_1",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00321897092428327,
        //     Rank: 68,
        //     status: 'Pending'
        // },
        // {
        //     id: 69,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub4_atomic_3",
        //     Total_Customers: 22,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00305778975959964,
        //     Rank: 69,
        //     status: 'Pending'
        // },
        // {
        //     id: 70,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub4_atomic_2",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00305659807848313,
        //     Rank: 70,
        //     status: 'Pending'
        // },
        // {
        //     id: 71,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub2_atomic_4",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "payment_value",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00243983788728066,
        //     Rank: 71,
        //     status: 'Pending'
        // },
        // {
        //     id: 72,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub2_atomic_1",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.0023673134036461,
        //     Rank: 72,
        //     status: 'Pending'
        // },
        // {
        //     id: 73,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub2_atomic_5",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00234390018287175,
        //     Rank: 73,
        //     status: 'Pending'
        // },
        // {
        //     id: 74,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub1_atomic_2",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00220459123384589,
        //     Rank: 74,
        //     status: 'Pending'
        // },
        // {
        //     id: 75,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub2_atomic_2",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00218982531390558,
        //     Rank: 75,
        //     status: 'Pending'
        // },
        // {
        //     id: 76,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub2_atomic_3",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00213698842409292,
        //     Rank: 76,
        //     status: 'Pending'
        // },
        // {
        //     id: 77,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub1_atomic_4",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0020578588040471,
        //     Rank: 77,
        //     status: 'Pending'
        // },
        // {
        //     id: 78,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub5_atomic_4",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00196236510561629,
        //     Rank: 78,
        //     status: 'Pending'
        // },
        // {
        //     id: 79,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub5_atomic_2",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00193554116905157,
        //     Rank: 79,
        //     status: 'Pending'
        // },
        // {
        //     id: 80,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub5_atomic_1",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0019176001951642,
        //     Rank: 80,
        //     status: 'Pending'
        // },
        // {
        //     id: 81,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub5_atomic_5",
        //     Total_Customers: 18,
        //     Positive_impacted_feature: "Tenure",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00185044409229053,
        //     Rank: 81,
        //     status: 'Pending'
        // },
        // {
        //     id: 82,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub5_atomic_4",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00183379353475296,
        //     Rank: 82,
        //     status: 'Pending'
        // },
        // {
        //     id: 83,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub1_atomic_1",
        //     Total_Customers: 3,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00177298953010093,
        //     Rank: 83,
        //     status: 'Pending'
        // },
        // {
        //     id: 84,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub1_atomic_5",
        //     Total_Customers: 1,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0017289174143772,
        //     Rank: 84,
        //     status: 'Pending'
        // },
        // {
        //     id: 85,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub3_atomic_5",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00163363757122627,
        //     Rank: 85,
        //     status: 'Pending'
        // },
        // {
        //     id: 86,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub3_atomic_2",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00162331149701894,
        //     Rank: 86,
        //     status: 'Pending'
        // },
        // {
        //     id: 87,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub1_atomic_3",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00161745627333514,
        //     Rank: 87,
        //     status: 'Pending'
        // },
        // {
        //     id: 88,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub5_atomic_5",
        //     Total_Customers: 22,
        //     Positive_impacted_feature: "min_Month_payment",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00160061209587203,
        //     Rank: 88,
        //     status: 'Pending'
        // },
        // {
        //     id: 89,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub3_atomic_3",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0015868716908622,
        //     Rank: 89,
        //     status: 'Pending'
        // },
        // {
        //     id: 90,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub3_atomic_1",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0015565499461748,
        //     Rank: 90,
        //     status: 'Pending'
        // },
        // {
        //     id: 91,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub5_atomic_2",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00152361202479123,
        //     Rank: 91,
        //     status: 'Pending'
        // },
        // {
        //     id: 92,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub3_atomic_4",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "min_Month_payment",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0015088333453196,
        //     Rank: 92,
        //     status: 'Pending'
        // },
        // {
        //     id: 93,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub2_atomic_5",
        //     Total_Customers: 1,
        //     Positive_impacted_feature: "min_Month_payment",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0014794878830031,
        //     Rank: 93,
        //     status: 'Pending'
        // },
        // {
        //     id: 94,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub5_atomic_1",
        //     Total_Customers: 23,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00147520369670541,
        //     Rank: 94,
        //     status: 'Pending'
        // },
        // {
        //     id: 95,
        //     Product: "Loan",
        //     Recommended_campaign: "Promotional Email",
        //     Customer_segment: "Segment_1_Promo_sub5_atomic_3",
        //     Total_Customers: 19,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00146331951753241,
        //     Rank: 95,
        //     status: 'Pending'
        // },
        // {
        //     id: 96,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub2_atomic_2",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0014294702190172,
        //     Rank: 96,
        //     status: 'Pending'
        // },
        // {
        //     id: 97,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub2_atomic_4",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "min_Month_payment",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00129124030439105,
        //     Rank: 97,
        //     status: 'Pending'
        // },
        // {
        //     id: 98,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub2_atomic_1",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00127700155843285,
        //     Rank: 98,
        //     status: 'Pending'
        // },
        // {
        //     id: 99,
        //     Product: "Loan",
        //     Recommended_campaign: "Discount Email",
        //     Customer_segment: "Segment_1_Discount_sub5_atomic_3",
        //     Total_Customers: 22,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00123155024533479,
        //     Rank: 99,
        //     status: 'Pending'
        // },
        // {
        //     id: 100,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub2_atomic_3",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00118909354729915,
        //     Rank: 100,
        //     status: 'Pending'
        // },
        // {
        //     id: 101,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub4_atomic_2",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00101984402190153,
        //     Rank: 101,
        //     status: 'Pending'
        // },
        // {
        //     id: 102,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub4_atomic_1",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00101507398680098,
        //     Rank: 102,
        //     status: 'Pending'
        // },
        // {
        //     id: 103,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub3_atomic_2",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0009390399290632,
        //     Rank: 103,
        //     status: 'Pending'
        // },
        // {
        //     id: 104,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub4_atomic_4",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "min_Month_payment",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00090967270639596,
        //     Rank: 104,
        //     status: 'Pending'
        // },
        // {
        //     id: 105,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub4_atomic_3",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.000811312846526075,
        //     Rank: 105,
        //     status: 'Pending'
        // },
        // {
        //     id: 106,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub4_atomic_5",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Current_statement_month",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00074811275484295,
        //     Rank: 106,
        //     status: 'Pending'
        // },
        // {
        //     id: 107,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub3_atomic_4",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0007334271935699,
        //     Rank: 107,
        //     status: 'Pending'
        // },
        // {
        //     id: 108,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub3_atomic_5",
        //     Total_Customers: 1,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0007250769826736,
        //     Rank: 108,
        //     status: 'Pending'
        // },
        // {
        //     id: 109,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub3_atomic_1",
        //     Total_Customers: 3,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.000656778395210266,
        //     Rank: 109,
        //     status: 'Pending'
        // },
        // {
        //     id: 110,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub3_atomic_3",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0006044830984793,
        //     Rank: 110,
        //     status: 'Pending'
        // },
        // {
        //     id: 111,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub4_atomic_2",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0002974393549958,
        //     Rank: 111,
        //     status: 'Pending'
        // },
        // {
        //     id: 112,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub4_atomic_5",
        //     Total_Customers: 1,
        //     Positive_impacted_feature: "min_Month_payment",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.0002738614895939,
        //     Rank: 112,
        //     status: 'Pending'
        // },
        // {
        //     id: 113,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub5_atomic_1",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.00026206703739614,
        //     Rank: 113,
        //     status: 'Pending'
        // },
        // {
        //     id: 114,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub4_atomic_3",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.0002609344791672,
        //     Rank: 114,
        //     status: 'Pending'
        // },
        // {
        //     id: 115,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub4_atomic_1",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Payment_frequency",
        //     Effect: 0.00023797401266285,
        //     Rank: 115,
        //     status: 'Pending'
        // },
        // {
        //     id: 116,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub5_atomic_2",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.000237395349148,
        //     Rank: 116,
        //     status: 'Pending'
        // },
        // {
        //     id: 117,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub4_atomic_4",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: 0.00015115382972575,
        //     Rank: 117,
        //     status: 'Pending'
        // },
        // {
        //     id: 118,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub5_atomic_1",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: 0.000100368484493654,
        //     Rank: 118,
        //     status: 'Pending'
        // },
        // {
        //     id: 119,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub5_atomic_5",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: -3.796648389415E-05,
        //     Rank: 119,
        //     status: 'Pending'
        // },
        // {
        //     id: 120,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub5_atomic_3",
        //     Total_Customers: 5,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: -4.32828316114E-05,
        //     Rank: 120,
        //     status: 'Pending'
        // },
        // {
        //     id: 121,
        //     Product: "Loan",
        //     Recommended_campaign: "Phone call",
        //     Customer_segment: "Segment_1_Phone_sub5_atomic_4",
        //     Total_Customers: 4,
        //     Positive_impacted_feature: "payment_value",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: -4.514300052675E-05,
        //     Rank: 121,
        //     status: 'Pending'
        // },
        // {
        //     id: 122,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub5_atomic_5",
        //     Total_Customers: 1,
        //     Positive_impacted_feature: "min_Month_payment",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: -5.35212731923801E-05,
        //     Rank: 122,
        //     status: 'Pending'
        // },
        // {
        //     id: 123,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub5_atomic_2",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: -8.13619380066999E-05,
        //     Rank: 123,
        //     status: 'Pending'
        // },
        // {
        //     id: 124,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub5_atomic_4",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Early_buy_out",
        //     Negative_impacted_feature: "Interest_rate",
        //     Effect: -0.0002277389825132,
        //     Rank: 124,
        //     status: 'Pending'
        // },
        // {
        //     id: 125,
        //     Product: "Loan",
        //     Recommended_campaign: "Push Notification",
        //     Customer_segment: "Segment_1_PN_sub5_atomic_3",
        //     Total_Customers: 2,
        //     Positive_impacted_feature: "Interest_rate",
        //     Negative_impacted_feature: "Early_buy_out",
        //     Effect: -0.0007953750715354,
        //     Rank: 125,
        //     status: 'Pending'
        // }
    ]);


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


    // CreditTableData

    const [creditItems, setCreditItems] = useState([
        {
            id: 1,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub1_atomic_1",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Tenure",
            Effect: 0.0393992311637383,
            Rank: 1,
            status: 'Pending'
        },
        {
            id: 2,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub1_atomic_3",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0343204456941222,
            Rank: 2,
            status: 'Pending'
        },
        {
            id: 3,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub1_atomic_5",
            Total_Customers: 31,
            Positive_Impacted_Feature: "Current_statement_month",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.034100270515169,
            Rank: 3,
            status: 'Pending'
        },
        {
            id: 4,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub1_atomic_2",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Tenure",
            Effect: 0.032185145895156,
            Rank: 4,
            status: 'Pending'
        },
        {
            id: 5,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub1_atomic_4",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.031864245280666,
            Rank: 5,
            status: 'Pending'
        },
        {
            id: 6,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub2_atomic_5",
            Total_Customers: 31,
            Positive_Impacted_Feature: "Current_statement_month",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0214450466339176,
            Rank: 6,
            status: 'Pending'
        },
        {
            id: 7,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub2_atomic_4",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0207425803140654,
            Rank: 7,
            status: 'Pending'
        },
        {
            id: 8,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub2_atomic_3",
            Total_Customers: 31,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0207233916855124,
            Rank: 8,
            status: 'Pending'
        },
        {
            id: 9,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub2_atomic_1",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.0205425008423863,
            Rank: 9,
            status: 'Pending'
        },
        {
            id: 10,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub2_atomic_2",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "payment_value",
            Effect: 0.0202762753768374,
            Rank: 10,
            status: 'Pending'
        },
        {
            id: 11,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub3_atomic_4",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.014872941932014,
            Rank: 11,
            status: 'Pending'
        },
        {
            id: 12,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub3_atomic_3",
            Total_Customers: 31,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0147574464118162,
            Rank: 12,
            status: 'Pending'
        },
        {
            id: 13,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub1_atomic_4",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0146807216040809,
            Rank: 13,
            status: 'Pending'
        },
        {
            id: 14,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub3_atomic_1",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.0145679649413975,
            Rank: 14,
            status: 'Pending'
        },
        {
            id: 15,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub1_atomic_2",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0145571863518987,
            Rank: 15,
            status: 'Pending'
        },
        {
            id: 16,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub1_atomic_5",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Current_statement_month",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0142886691005615,
            Rank: 16,
            status: 'Pending'
        },
        {
            id: 17,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub3_atomic_2",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "payment_value",
            Effect: 0.0142770238569058,
            Rank: 17,
            status: 'Pending'
        },
        {
            id: 18,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub3_atomic_5",
            Total_Customers: 31,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0142664182190323,
            Rank: 18,
            status: 'Pending'
        },
        {
            id: 19,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub1_atomic_3",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0136928950778866,
            Rank: 19,
            status: 'Pending'
        },
        {
            id: 20,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub1_atomic_2",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Number of Dependents",
            Effect: 0.0131301067628151,
            Rank: 20,
            status: 'Pending'
        },
        {
            id: 21,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub1_atomic_1",
            Total_Customers: 16,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.0121976150862778,
            Rank: 21,
            status: 'Pending'
        },
        {
            id: 22,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub1_atomic_1",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.0119511819713499,
            Rank: 22,
            status: 'Pending'
        },
        {
            id: 23,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub1_atomic_3",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0116309960452891,
            Rank: 23,
            status: 'Pending'
        },
        {
            id: 24,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub1_atomic_4",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0114591963798432,
            Rank: 24,
            status: 'Pending'
        },
        {
            id: 25,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub1_atomic_5",
            Total_Customers: 17,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0113804576627438,
            Rank: 25,
            status: 'Pending'
        },
        {
            id: 26,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub4_atomic_2",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.010086463510758,
            Rank: 26,
            status: 'Pending'
        },
        {
            id: 27,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub4_atomic_5",
            Total_Customers: 31,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00996077199875726,
            Rank: 27,
            status: 'Pending'
        },
        {
            id: 28,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub4_atomic_3",
            Total_Customers: 31,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00990400879210498,
            Rank: 28,
            status: 'Pending'
        },
        {
            id: 29,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub4_atomic_1",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00979228536141538,
            Rank: 29,
            status: 'Pending'
        },
        {
            id: 30,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub4_atomic_4",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00971472448211403,
            Rank: 30,
            status: 'Pending'
        },
        {
            id: 31,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub2_atomic_4",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00937383721745598,
            Rank: 31,
            status: 'Pending'
        },
        {
            id: 32,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub2_atomic_5",
            Total_Customers: 14,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00928842161070995,
            Rank: 32,
            status: 'Pending'
        },
        {
            id: 33,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub2_atomic_3",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00880194951917577,
            Rank: 33,
            status: 'Pending'
        },
        {
            id: 34,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub2_atomic_1",
            Total_Customers: 16,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.00875460665568744,
            Rank: 34,
            status: 'Pending'
        },
        {
            id: 35,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub2_atomic_2",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.00855581576381706,
            Rank: 35,
            status: 'Pending'
        },
        {
            id: 36,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub2_atomic_5",
            Total_Customers: 17,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00841068814300992,
            Rank: 36,
            status: 'Pending'
        },
        {
            id: 37,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub2_atomic_1",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00828233590001751,
            Rank: 37,
            status: 'Pending'
        },
        {
            id: 38,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub2_atomic_3",
            Total_Customers: 17,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00817446685271328,
            Rank: 38,
            status: 'Pending'
        },
        {
            id: 39,
            Product: "Credit Card",

            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub2_atomic_4",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00812139260501845,
            Rank: 39,
            status: 'Pending'
        },
        {
            id: 40,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub2_atomic_2",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.00792020551058884,
            Rank: 40,
            status: 'Pending'
        },
        {
            id: 41,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub3_atomic_1",
            Total_Customers: 16,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.0065920754014555,
            Rank: 41,
            status: 'Pending'
        },
        {
            id: 42,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub3_atomic_4",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00652656809387942,
            Rank: 42,
            status: 'Pending'
        },
        {
            id: 43,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub3_atomic_3",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00633040724276594,
            Rank: 43,
            status: 'Pending'
        },
        {
            id: 44,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub3_atomic_5",
            Total_Customers: 14,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00630675931671964,
            Rank: 44,
            status: 'Pending'
        },
        {
            id: 45,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub3_atomic_2",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0062864215866818,
            Rank: 45,
            status: 'Pending'
        },
        {
            id: 46,
            Product: "Credit Card",

            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub3_atomic_1",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00621333588439038,
            Rank: 46,
            status: 'Pending'
        },
        {
            id: 47,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub3_atomic_3",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0061960997384892,
            Rank: 47,
            status: 'Pending'
        },
        {
            id: 48,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub3_atomic_5",
            Total_Customers: 17,
            Positive_Impacted_Feature: "Current_statement_month",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00608261167983152,
            Rank: 48,
            status: 'Pending'
        },
        {
            id: 49,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub3_atomic_4",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00603929690698349,
            Rank: 49,
            status: 'Pending'
        },
        {
            id: 50,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub3_atomic_2",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.00602862070655126,
            Rank: 50,
            status: 'Pending'
        },
        {
            id: 51,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub5_atomic_4",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00514639326607189,
            Rank: 51,
            status: 'Pending'
        },
        {
            id: 52,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub5_atomic_5",
            Total_Customers: 31,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00495613698587795,
            Rank: 52,
            status: 'Pending'
        },
        {
            id: 53,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub5_atomic_1",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00461852963683957,
            Rank: 53,
            status: 'Pending'
        },
        {
            id: 54,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub5_atomic_3",
            Total_Customers: 31,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00456296682819023,
            Rank: 54,
            status: 'Pending'
        },
        {
            id: 55,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub4_atomic_5",
            Total_Customers: 14,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00450513719318756,
            Rank: 55,
            status: 'Pending'
        },
        {
            id: 56,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub4_atomic_4",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00445674950039485,
            Rank: 56,
            status: 'Pending'
        },
        {
            id: 57,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub4_atomic_4",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00440270453291386,
            Rank: 57,
            status: 'Pending'
        },
        {
            id: 58,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub1_atomic_1",
            Total_Customers: 7,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00439673871024438,
            Rank: 58,
            status: 'Pending'
        },
        {
            id: 59,
            Product: "Credit Card",
            Recommended_Campaign: "Loyalty",
            Customer_Segment: "Segment_1_Loyalty_sub5_atomic_2",
            Total_Customers: 32,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.00435291658219066,
            Rank: 59,
            status: 'Pending'
        },
        {
            id: 60,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub4_atomic_3",
            Total_Customers: 17,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00433681116720606,
            Rank: 60,
            status: 'Pending'
        },
        {
            id: 61,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub4_atomic_3",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00431476953892147,
            Rank: 61,
            status: 'Pending'
        },
        {
            id: 62,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub4_atomic_1",
            Total_Customers: 16,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.00428485331965138,
            Rank: 62,
            status: 'Pending'
        },
        {
            id: 63,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub1_atomic_2",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00426874324964998,
            Rank: 63,
            status: 'Pending'
        },
        {
            id: 64,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub1_atomic_3",
            Total_Customers: 7,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.0042545227420972,
            Rank: 64,
            status: 'Pending'
        },
        {
            id: 65,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub4_atomic_2",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0042413514728177,
            Rank: 65,
            status: 'Pending'
        },
        {
            id: 66,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub4_atomic_5",
            Total_Customers: 17,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00410826951620165,
            Rank: 66,
            status: 'Pending'
        },
        {
            id: 67,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub4_atomic_1",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00397850193075501,
            Rank: 67,
            status: 'Pending'
        },
        {
            id: 68,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub1_atomic_4",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00395467258324448,
            Rank: 68,
            status: 'Pending'
        },
        {
            id: 69,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub4_atomic_2",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Term(months)",
            Effect: 0.00391499541418007,
            Rank: 69,
            status: 'Pending'
        },
        {
            id: 70,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub1_atomic_5",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00363617013903778,
            Rank: 70,
            status: 'Pending'
        },
        {
            id: 71,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub2_atomic_4",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00299645422844295,
            Rank: 71,
            status: 'Pending'
        },
        {
            id: 72,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub2_atomic_3",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00283350214091648,
            Rank: 72,
            status: 'Pending'
        },
        {
            id: 73,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub2_atomic_1",
            Total_Customers: 7,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00282760300527657,
            Rank: 73,
            status: 'Pending'
        },
        {
            id: 74,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub2_atomic_2",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00278859876833381,
            Rank: 74,
            status: 'Pending'
        },
        {
            id: 75,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub2_atomic_5",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00276073333807473,
            Rank: 75,
            status: 'Pending'
        },
        {
            id: 76,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub5_atomic_5",
            Total_Customers: 14,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00239414633842177,
            Rank: 76,
            status: 'Pending'
        },
        {
            id: 77,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub5_atomic_3",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00229228344697813,
            Rank: 77,
            status: 'Pending'
        },
        {
            id: 78,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub3_atomic_5",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Approval_Amount",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00219231585345388,
            Rank: 78,
            status: 'Pending'
        },
        {
            id: 79,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub5_atomic_4",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00216574180528185,
            Rank: 79,
            status: 'Pending'
        },
        {
            id: 80,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub1_atomic_4",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00214526889864156,
            Rank: 80,
            status: 'Pending'
        },
        {
            id: 81,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub3_atomic_1",
            Total_Customers: 7,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.0021051732789246,
            Rank: 81,
            status: 'Pending'
        },
        {
            id: 82,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub5_atomic_2",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00208886995705358,
            Rank: 82,
            status: 'Pending'
        },
        {
            id: 83,
            Product: "Credit Card",
            Recommended_Campaign: "Promotional Email",
            Customer_Segment: "Segment_1_Promo_sub5_atomic_1",
            Total_Customers: 15,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00204621643849816,
            Rank: 83,
            status: 'Pending'
        },
        {
            id: 84,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub5_atomic_1",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.0020321290757141,
            Rank: 84,
            status: 'Pending'
        },
        {
            id: 85,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub3_atomic_2",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00201047436197458,
            Rank: 85,
            status: 'Pending'
        },
        {
            id: 86,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub3_atomic_4",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00195102810913973,
            Rank: 86,
            status: 'Pending'
        },
        {
            id: 87,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub3_atomic_3",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0019081629281566,
            Rank: 87,
            status: 'Pending'
        },
        {
            id: 88,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub5_atomic_4",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00189812200617895,
            Rank: 88,
            status: 'Pending'
        },
        {
            id: 89,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub5_atomic_3",
            Total_Customers: 17,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00179960216722889,
            Rank: 89,
            status: 'Pending'
        },
        {
            id: 90,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub5_atomic_5",
            Total_Customers: 17,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00175558035692139,
            Rank: 90,
            status: 'Pending'
        },
        {
            id: 91,
            Product: "Credit Card",
            Recommended_Campaign: "Discount Email",
            Customer_Segment: "Segment_1_Discount_sub5_atomic_2",
            Total_Customers: 18,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00172700392230332,
            Rank: 91,
            status: 'Pending'
        },
        {
            id: 92,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub1_atomic_1",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.00164004093433833,
            Rank: 92,
            status: 'Pending'
        },
        {
            id: 93,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub1_atomic_3",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0016125442120227,
            Rank: 93,
            status: 'Pending'
        },
        {
            id: 94,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub1_atomic_2",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00157349713608519,
            Rank: 94,
            status: 'Pending'
        },
        {
            id: 95,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub1_atomic_5",
            Total_Customers: 2,
            Positive_Impacted_Feature: "Funded_Amount",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0015079561189418,
            Rank: 95,
            status: 'Pending'
        },
        {
            id: 96,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub4_atomic_2",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00139606109736046,
            Rank: 96,
            status: 'Pending'
        },
        {
            id: 97,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub4_atomic_3",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Tenure",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00132915079951748,
            Rank: 97,
            status: 'Pending'
        },
        {
            id: 98,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub4_atomic_1",
            Total_Customers: 7,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Tenure",
            Effect: 0.00128041032938479,
            Rank: 98,
            status: 'Pending'
        },
        {
            id: 99,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub4_atomic_5",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00127566879546976,
            Rank: 99,
            status: 'Pending'
        },
        {
            id: 100,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub4_atomic_4",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00126353524062688,
            Rank: 100,
            status: 'Pending'
        },
        {
            id: 101,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub2_atomic_3",
            Total_Customers: 2,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00125840364588434,
            Rank: 101,
            status: 'Pending'
        },
        {
            id: 102,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub2_atomic_4",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0011633935874503,
            Rank: 102,
            status: 'Pending'
        },
        {
            id: 103,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub2_atomic_2",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Tenure",
            Effect: 0.00108935153533543,
            Rank: 103,
            status: 'Pending'
        },
        {
            id: 104,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub2_atomic_5",
            Total_Customers: 2,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00106503228482945,
            Rank: 104,
            status: 'Pending'
        },
        {
            id: 105,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub2_atomic_1",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 0.000975737519292633,
            Rank: 105,
            status: 'Pending'
        },
        {
            id: 106,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub3_atomic_3",
            Total_Customers: 2,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0007764156677636,
            Rank: 106,
            status: 'Pending'
        },
        {
            id: 107,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub3_atomic_2",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.000736074582677933,
            Rank: 107,
            status: 'Pending'
        },
        {
            id: 108,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub3_atomic_1",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.000697462956023966,
            Rank: 108,
            status: 'Pending'
        },
        {
            id: 109,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub5_atomic_4",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.000685681856962916,
            Rank: 109,
            status: 'Pending'
        },
        {
            id: 110,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub3_atomic_5",
            Total_Customers: 2,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0005938413013285,
            Rank: 110,
            status: 'Pending'
        },
        {
            id: 111,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub3_atomic_4",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.000579713753612466,
            Rank: 111,
            status: 'Pending'
        },
        {
            id: 112,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub4_atomic_4",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.000380825710028166,
            Rank: 112,
            status: 'Pending'
        },
        {
            id: 113,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub5_atomic_3",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.000379263312177335,
            Rank: 113,
            status: 'Pending'
        },
        {
            id: 114,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub4_atomic_1",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Approval_Amount",
            Effect: 0.000374110853581133,
            Rank: 114,
            status: 'Pending'
        },
        {
            id: 115,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub5_atomic_5",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00032365121268334,
            Rank: 115,
            status: 'Pending'
        },
        {
            id: 116,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub4_atomic_5",
            Total_Customers: 2,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.0003229419559505,
            Rank: 116,
            status: 'Pending'
        },
        {
            id: 117,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub4_atomic_2",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.000289593890376599,
            Rank: 117,
            status: 'Pending'
        },
        {
            id: 118,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub4_atomic_3",
            Total_Customers: 2,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00022378804960395,
            Rank: 118,
            status: 'Pending'
        },
        {
            id: 119,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub5_atomic_2",
            Total_Customers: 6,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 0.00018741530162675,
            Rank: 119,
            status: 'Pending'
        },
        {
            id: 120,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub5_atomic_5",
            Total_Customers: 2,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: 9.30114286665839E-05,
            Rank: 120,
            status: 'Pending'
        },
        {
            id: 121,
            Product: "Credit Card",
            Recommended_Campaign: "Phone call",
            Customer_Segment: "Segment_1_Phone_sub5_atomic_1",
            Total_Customers: 7,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Current_statement_month",
            Effect: 3.12449134035723E-05,
            Rank: 121,
            status: 'Pending'
        },
        {
            id: 122,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub5_atomic_4",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: -0.0002607071950363,
            Rank: 122,
            status: 'Pending'
        },
        {
            id: 123,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub5_atomic_2",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: -0.000367424760645512,
            Rank: 123,
            status: 'Pending'
        },
        {
            id: 124,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub5_atomic_1",
            Total_Customers: 3,
            Positive_Impacted_Feature: "Interest_rate",
            Negative_Impacted_Feature: "Tenure",
            Effect: -0.000421203199082099,
            Rank: 124,
            status: 'Pending'
        },
        {
            id: 125,
            Product: "Credit Card",
            Recommended_Campaign: "Push Notification",
            Customer_Segment: "Segment_1_PN_sub5_atomic_3",
            Total_Customers: 2,
            Positive_Impacted_Feature: "Number of Dependents",
            Negative_Impacted_Feature: "Interest_rate",
            Effect: -0.000421672429924232,
            Rank: 125,
            status: 'Pending'
        }
    ])


    // CreditTableData
    const updateCreditTable = (id, newStatus) => {
        let allItems = creditItems;
        allItems = allItems.map(item => {
            if (item.id === id) {
                console.log('in here')
                item.status = newStatus;
            }
            return item
        })
        setCreditItems(allItems)
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
                // backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#8D72E1',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#B9E0FF',
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
                // backgroundColor: ["#ff0000"],
                order: 1,
                backgroundColor: [
                    '#B9E0FF',
                    '#8EC3B0',
                    '#9ED5C5',
                    '#BCEAD5'
                ],
                borderColor: [
                    '#B9E0FF',
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
        <>
            <h3 className="head">Admin - Product performance analysis</h3>
            <Tabs>
                <TabList>
                    <Tab>Loan</Tab>
                    <Tab>Credit Card</Tab>
                </TabList>

                <TabPanel>
                    <div className='admin-campaign'>
                        <div className='admin-campaign-head'>
                            <h3>Loan</h3>

                            <div className='admin-campaign-head-right'>
                                <h6>Total Loans Availed: <span>320L</span></h6>
                            </div>

                        </div>


                        <div>
                            <div className="chart-flex">
                                <div className="width-49">
                                    <div className='white-bg head'>
                                        <h3>Month wise count of loans availed</h3>
                                        <AdminProductLineChartBase chartData={AdminProductLineChartTabo1} />
                                    </div>
                                </div>

                                <div className="width-49">
                                    <div className='white-bg head'>
                                        <h3>Month wise campaign trends</h3>
                                        <AdminProductBarChartBase chartData={adminProductBarChartTab01} />
                                    </div>
                                </div>
                            </div>

                            <Loan01 items={items} setItems={setItems} updateStatus={updateStatus} />
                            <Loan02 items={items} setItems={setItems} updateStatus={updateStatus} />


                            <div className="button-wrapper">
                                <button className="button-style">Send Campaign</button>
                            </div>
                        </div>

                    </div>
                </TabPanel>


                <TabPanel>
                    <div className='admin-campaign'>
                        <div className='admin-campaign-head'>
                            <h3>Credit Card</h3>

                            <div className='admin-campaign-head-right'>
                                <h6>Total Credit Card Purchased: <span>3214</span></h6>
                            </div>

                        </div>


                        <div>

                            <div className="chart-flex">
                                <div className='width-49'>
                                    <div className='white-bg head'>
                                        <h3>Month wise count of credit card purchased</h3>
                                        <AdminProductLineChartBaseCreditCard chartData={AdminProductLineChartTabo2} />
                                    </div>
                                </div>
                                <div className='width-49'>
                                    <div className='white-bg head'>
                                        <h3>Month wise campaign trends</h3>
                                        <AdminProductBarChartBase chartData={adminProductBarChartTab02} />
                                    </div>
                                </div>
                            </div>

                            <Credit01 creditItems={creditItems} setCreditItems={setCreditItems} updateCreditTable={updateCreditTable} />
                            <Credit02 creditItems={creditItems} setCreditItems={setCreditItems} updateCreditTable={updateCreditTable} />

                            <div className="button-wrapper">
                                <button className="button-style">Send Campaign</button>
                            </div>
                        </div>

                    </div>
                </TabPanel>

            </Tabs>

        </>
    )
}

export default AdminProduct