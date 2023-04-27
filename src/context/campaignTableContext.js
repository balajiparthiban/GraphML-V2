import { createContext, useState, useContext } from 'react'

export const CampaignTableContext = createContext();

export default function TableProvider({ children }) {

    const [campaignTableState, setCampaignTableState] = useState([
        {
            id: 1,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub5_atomic_1",
            Customer_count: 32,
            Effect: 0.0393992311637383,
            Priority: 1,
            status: 'Pending'
        },
        {
            id: 2,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub3_atomic_1",
            Customer_count: 32,
            Effect: 0.0393992311637383,
            Priority: 2,
            status: 'Pending'
        },
        {
            id: 3,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub5_atomic_3",
            Customer_count: 32,
            Effect: 0.0343204456941222,
            Priority: 3,
            status: 'Pending'
        },
        {
            id: 4,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub3_atomic_2",
            Customer_count: 32,
            Effect: 0.0343204456941222,
            Priority: 4,
            status: 'Pending'
        },
        {
            id: 5,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub5_atomic_5",
            Customer_count: 32,
            Effect: 0.034100270515169,
            Priority: 5,
            status: 'Pending'
        },
        {
            id: 6,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub3_atomic_3",
            Customer_count: 32,
            Effect: 0.034100270515169,
            Priority: 6,
            status: 'Pending'
        },
        {
            id: 7,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub5_atomic_2",
            Customer_count: 32,
            Effect: 0.032185145895156,
            Priority: 7,
            status: 'Pending'
        },
        {
            id: 8,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub3_atomic_4",
            Customer_count: 32,
            Effect: 0.032185145895156,
            Priority: 8,
            status: 'Pending'
        },
        {
            id: 9,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub5_atomic_4",
            Customer_count: 32,
            Effect: 0.031864245280666,
            Priority: 9,
            status: 'Pending'
        },
        {
            id: 10,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub3_atomic_5",
            Customer_count: 32,
            Effect: 0.031864245280666,
            Priority: 10,
            status: 'Pending'
        },
        {
            id: 11,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub1_atomic_5",
            Customer_count: 32,
            Effect: 0.0214450466339176,
            Priority: 11,
            status: 'Pending'
        },
        {
            id: 12,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub4_atomic_1",
            Customer_count: 32,
            Effect: 0.0214450466339176,
            Priority: 12,
            status: 'Pending'
        },
        {
            id: 13,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub1_atomic_4",
            Customer_count: 32,
            Effect: 0.0207425803140654,
            Priority: 13,
            status: 'Pending'
        },
        {
            id: 14,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub4_atomic_2",
            Customer_count: 32,
            Effect: 0.0207425803140654,
            Priority: 14,
            status: 'Pending'
        },
        {
            id: 15,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub1_atomic_3",
            Customer_count: 32,
            Effect: 0.0207233916855124,
            Priority: 15,
            status: 'Pending'
        },
        {
            id: 16,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub4_atomic_3",
            Customer_count: 32,
            Effect: 0.0207233916855124,
            Priority: 16,
            status: 'Pending'
        },
        {
            id: 17,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub1_atomic_1",
            Customer_count: 32,
            Effect: 0.0205425008423863,
            Priority: 17,
            status: 'Pending'
        },
        {
            id: 18,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub4_atomic_4",
            Customer_count: 32,
            Effect: 0.0205425008423863,
            Priority: 18,
            status: 'Pending'
        },
        {
            id: 19,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub1_atomic_2",
            Customer_count: 32,
            Effect: 0.0202762753768374,
            Priority: 19,
            status: 'Pending'
        },
        {
            id: 20,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub4_atomic_5",
            Customer_count: 32,
            Effect: 0.0202762753768374,
            Priority: 20,
            status: 'Pending'
        },
        {
            id: 21,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub2_atomic_4",
            Customer_count: 32,
            Effect: 0.014872941932014,
            Priority: 21,
            status: 'Pending'
        },
        {
            id: 22,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub5_atomic_1",
            Customer_count: 32,
            Effect: 0.014872941932014,
            Priority: 22,
            status: 'Pending'
        },
        {
            id: 23,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub2_atomic_3",
            Customer_count: 32,
            Effect: 0.0147574464118162,
            Priority: 23,
            status: 'Pending'
        },
        {
            id: 24,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub5_atomic_2",
            Customer_count: 32,
            Effect: 0.0147574464118162,
            Priority: 24,
            status: 'Pending'
        },
        {
            id: 25,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Loan_Segment_1_Promo_sub1_atomic_4",
            Customer_count: 15,
            Effect: 0.0146807216040809,
            Priority: 25,
            status: 'Pending'
        },
        {
            id: 26,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub5_atomic_3",
            Customer_count: 15,
            Effect: 0.0146807216040809,
            Priority: 26,
            status: 'Pending'
        },
        {
            id: 27,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Loan_Segment_1_Loyalty_sub2_atomic_1",
            Customer_count: 32,
            Effect: 0.0145679649413975,
            Priority: 27,
            status: 'Pending'
        },
        {
            id: 28,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Loyalty",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub5_atomic_4",
            Customer_count: 32,
            Effect: 0.0145679649413975,
            Priority: 28,
            status: 'Pending'
        },
        {
            id: 29,
            Next_Best_Product: "Loan",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Loan_Segment_1_Promo_sub1_atomic_2",
            Customer_count: 15,
            Effect: 0.0145571863518987,
            Priority: 29,
            status: 'Pending'
        },
        {
            id: 30,
            Next_Best_Product: "Credit Card",
            Next_Best_Action: "Promotional Email",
            Customer_segment: "Credit_Card_Segment_1_Loyalty_sub5_atomic_5",
            Customer_count: 15,
            Effect: 0.0145571863518987,
            Priority: 30,
            status: 'Pending'
        }

    ]);

    const updateCampaignTableState = (rowId, status) => {
        const updatedCampaignRecords = campaignTableState.reduce((acc, item) => {
            if (item.id === rowId) {
                item.status = status;
            }
            acc.push(item);
            return acc;
        }, []);
        setCampaignTableState(updatedCampaignRecords);
    };

    return (<>
        <CampaignTableContext.Provider value={{ updateCampaignTableState, campaignTableState }}>
            {children}
        </CampaignTableContext.Provider>
    </>)
}
