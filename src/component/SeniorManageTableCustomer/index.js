// import { useState, useEffect } from 'react'
// import axios from 'axios'
import { senior_management_first_table } from '../../json/data'

const CustomerTable = () => {
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
                <th>Segment</th>
                <th>Recommended Product</th>
                <th>Recommended Campaign</th>
                <th>Marketing Fatigue</th>
                <th>Conversion Rate</th>
                <th>CLV</th>
                <th>Churn Rate</th>
                <th>Rank</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>Segment 1</td>
                        <td>Product 2</td>
                        <td>Email Campaign 2</td>
                        <td>3%</td>
                        <td>5%</td>
                        <td>$150</td>
                        <td>5%</td>
                        <td>2</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CustomerTable