import './style.scss'

const recommendation = [
    {
        "id": 1,
        "name": "product1",
        "cam": {
            "T1_email_campaign1": 199763,
            "T2_email_campaign2": 1092,
            "T3_phone_call": 1248,
            "T4_email_campaign1_and_2": 34021,
            "T5_email_campaign1_and_phone_call": 81051,
            "T6_email_campaign2_and_phone_call": 132953,
            "T7_all_channels": 35377
        }
    },
    {
        "id": 2,
        "name": "product2",
        "cam": {
            "T1_email_campaign1": 199763,
            "T2_email_campaign2": 1105,
            "T3_phone_call": 1254,
            "T4_email_campaign1_and_2": 34041,
            "T5_email_campaign1_and_phone_call": 80950,
            "T6_email_campaign2_and_phone_call": 133112,
            "T7_all_channels": 35218
        }
    },
    {
        "id": 3,
        "name": "product1_product2",
        "cam": {
            "T1_email_campaign1": 973,
            "T2_email_campaign2": 199841,
            "T3_phone_call": 834,
            "T4_email_campaign1_and_2": 34117,
            "T5_email_campaign1_and_phone_call": 80811,
            "T6_email_campaign2_and_phone_call": 133220,
            "T7_all_channels": 35489
        }
    },
    {
        "id": 4,
        "name": "product2_product1",
        "cam": {
            "T1_email_campaign1": 199798,
            "T2_email_campaign2": 993,
            "T3_phone_call": 1003,
            "T4_email_campaign1_and_2": 33995,
            "T5_email_campaign1_and_phone_call": 80948,
            "T6_email_campaign2_and_phone_call": 132927,
            "T7_all_channels": 35581
        }
    }
]

const Segment = () => {
    return (
        <div className='segment'>
            <h3>Segment</h3>
            <ul>
                <li>
                    <div className='next-best-action'>
                        <h4>Next Best Actions</h4>
                        <li>For Proudct 1 run Email Campaign 1 for <span>199762</span> Customers </li>
                        <li>For Proudct 2 run Email Campaign 1 for <span>199763</span> Customers </li>
                        <li>For Proudct 1 | Product 2 run Email Campaign 2 for <span>198841</span> Customers </li>
                        <li>For Proudct 2 | Product 1 run Email Campaign 1 for <span>199798</span> Customers </li>
                        {/* {recommendation.map((prod, val) => (
                            // console.log(prod, 'Balaji'),
                            <div key={val} className="best-action">Run {prod.cam.T1_email_campaign1 + prod.cam.T2_email_campaign2 + prod.cam.T3_phone_call + prod.cam.T4_email_campaign1_and_2 + prod.cam.T5_email_campaign1_and_phone_call + prod.cam.T6_email_campaign2_and_phone_call + prod.cam.T7_all_channels}  Campaigns for Product {val + 1}</div>
                        ))} */}
                    </div>
                    <div className='cannabalization'>
                        <h4>Cannabalization</h4>
                        {/* decrease 1st increase last */}
                        <div className='best-action'>For product 1, running Email Campaign 2 will cannibalize the effect of - Email Campaign 1</div>
                        <div className='best-action'>For product 2, running Email Campaign 2 will cannibalize the effect of - Email Campaign 2</div>
                        <div className='best-action'>For product 1 | product 2, running Email Campaign 2 will cannibalize the effect of - Email Phone Call</div>
                        <div className='best-action'>For product 2 | product 1, running Email Campaign 2 will cannibalize the effect of - Email Campaign 2</div>

                        {/* <div className='best-action'>Run email campaign 120 for this customer for this product 1</div>
                        <div className='best-action'>Run email campaign 239 for this customer for this product 2</div>
                        <div className='best-action'>Run email campaign 199029 for this customer for this product 1 | product 2</div>
                        <div className='best-action'>Run email campaign 204 for this customer for this product 1</div> */}
                    </div>
                </li>

                <li>
                    <div className='fatigue'>
                        <h4>Marketing Fatigue</h4>
                        <p>For Product 1, running <span>Email Campaign 1</span> more than <span>10 times</span> will create fatigue for the customers</p>
                        <p>For Product 2, running <span>Email Campaign 2</span> more than <span>5 times</span> will create fatigue for the customers</p>
                        <p>For Product 1 | 2, running <span>Email Campaign 1 & 2</span> more than <span>8 times</span> will create fatigue for the customers</p>
                        <p>For Product 2 | 1, running <span>Email Campaign 1 and Phone Call</span> more than <span>7 times</span>  will create fatigue for the customers</p>
                        {/* <p>Run email campaign 3 for this customer for this product 2</p>
                        <p>Run email campaign 4 for this customer for this product 3</p>
                        <p>Run email campaign 4 for this customer for this product 4</p> */}
                    </div>
                    <div className='segmentation'>
                        <h4>Segmentations</h4>
                        <p>For a customer who are having age below 20, living in state X, "Phone call - increase" is the recmmended campaign for product 1</p>
                        <p>For a customer having a low CLV with an age greater than 50, running "all email_campaign_1- decrease" will cannibalize the effect of "all phone call - increase"</p>
                        <p>For a customer living in State Y, sending email_campaign_1 & 2 more than 9 times will create fatigue to the customers</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Segment