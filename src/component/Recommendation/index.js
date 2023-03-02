// import { useState, useEffect } from 'react'
// import axios from 'axios'
import './style.scss'


// const recommendation = [
//     {
//         "id": 1,
//         "name": "product1",
//         "cam": {
//             "T1_email_campaign1": 199763,
//             "T2_email_campaign2": 1092,
//             "T3_phone_call": 1248,
//             "T4_email_campaign1_and_2": 34021,
//             "T5_email_campaign1_and_phone_call": 81051,
//             "T6_email_campaign2_and_phone_call": 132953,
//             "T7_all_channels": 35377
//         }
//     },
//     {
//         "id": 2,
//         "name": "product2",
//         "cam": {
//             "T1_email_campaign1": 199763,
//             "T2_email_campaign2": 1105,
//             "T3_phone_call": 1254,
//             "T4_email_campaign1_and_2": 34041,
//             "T5_email_campaign1_and_phone_call": 80950,
//             "T6_email_campaign2_and_phone_call": 133112,
//             "T7_all_channels": 35218
//         }
//     },
//     {
//         "id": 3,
//         "name": "product1_product2",
//         "cam": {
//             "T1_email_campaign1": 973,
//             "T2_email_campaign2": 199841,
//             "T3_phone_call": 834,
//             "T4_email_campaign1_and_2": 34117,
//             "T5_email_campaign1_and_phone_call": 80811,
//             "T6_email_campaign2_and_phone_call": 133220,
//             "T7_all_channels": 35489
//         }
//     },
//     {
//         "id": 4,
//         "name": "product2_product1",
//         "cam": {
//             "T1_email_campaign1": 199798,
//             "T2_email_campaign2": 993,
//             "T3_phone_call": 1003,
//             "T4_email_campaign1_and_2": 33995,
//             "T5_email_campaign1_and_phone_call": 80948,
//             "T6_email_campaign2_and_phone_call": 132927,
//             "T7_all_channels": 35581
//         }
//     }
// ]

const Recommendation = ({selectedChart}) => {
    // const [recommend, setRecommend] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:3000/products')
    //         .then(res => {
    //             setRecommend(res.data)
    //         })
    // })

    const Mapper = {
        Product1: '<li>For Proudct 1 run Email Campaign 1 for <span>199762</span> Customers</li>',
        Product2: '<li>For Proudct 2 run Email Campaign 1 for <span>199763</span> Customers</li>',
        Product3: '<li>For Proudct 1 | Product 2 run Email Campaign 2 for <span>198841</span> Customers</li>',
        Product4: '<li>For Proudct 2 | Product 1 run Email Campaign 1 for <span>199798</span> Customers</li>'
    };

    // let sum = 0;

    // for (let i in recommend) {
    //     if (recommend.hasOwnProperty(i)) {
    //         sum = sum + recommend[i]
    //     }
    // }
    // console.log(sum)


    // for (let i in recommendation) {
    //     if (recommendation.hasOwnProperty(i)) {
    //         sum = sum + recommendation[i]
    //     }
    // }
    const recommendationFilter = (name) => {
        let fragment = '';
        if (!Mapper.hasOwnProperty(name)) {
            for (let key in Mapper) {
                if (Mapper[key]) {
                    fragment += `<li key={key}>${Mapper[key]}</li>`
                }
            }
        } else {
            fragment = Mapper[name];
        }
        return fragment;
    }

    // console.log("recommendationFilter() service:::")
    // console.log(recommendationFilter())
    let dangerouslySetInnerHTML;
    return (
        <div className='recommendation'>
            <h3>Recommendation</h3>
            <ul dangerouslySetInnerHTML={{__html: !selectedChart ? recommendationFilter() : recommendationFilter(selectedChart)}}>
                {/*  
                {recommendation.map((prod, val) => (
                    // console.log(prod, 'Balaji'),
                    // <li key={val}>Run {prod.cam.T1_email_campaign1 + prod.cam.T2_email_campaign2 + prod.cam.T3_phone_call + prod.cam.T4_email_campaign1_and_2 + prod.cam.T5_email_campaign1_and_phone_call + prod.cam.T6_email_campaign2_and_phone_call + prod.cam.T7_all_channels}  For Proudct 1 run Email Campaign 1 for 199762 Customers </li>
                    // <li key={val}>Run {prod.cam.T1_email_campaign1}  For Proudct 1 run Email Campaign 1 for 199762 Customers </li>
                    ))}
                */}
            </ul>
        </div>
    )
}

export default Recommendation