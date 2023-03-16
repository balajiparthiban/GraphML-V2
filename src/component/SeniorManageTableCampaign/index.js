// import { useState, useEffect } from 'react'
// import axios from 'axios'
import { senior_management_first_table } from '../../json/data'

const CampaignTable = () => {
    // const [photos, setPhotos] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:3000/senior_management_first_table')
    //         .then(res => {
    //             setPhotos(res.data)
    //         })
    // })
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Campaign</th>
                <th>Recommended Product</th>
                <th>Success Rate</th>
                <th>Customer Segment</th>
                <th>Marketing Fatigue</th>
                <th>Effect</th>
                <th>Rank</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>Email Camp 1</td>
                        <td>Product 1</td>
                        <td>50%</td>
                        <td>Segment 2</td>
                        <td>3</td>
                        <td>12%</td>
                        <td>1</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CampaignTable