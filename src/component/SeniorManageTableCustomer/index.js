// import { useState, useEffect } from 'react'
// import axios from 'axios'
import { Senior_manager_customer_page } from '../../json/v2/Data_UI'

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
                {Senior_manager_customer_page && Senior_manager_customer_page.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>{item.Total_sales}</td>
                        <td>{item.Column3}</td>
                        <td>{item.Column4}</td>
                        <td>{item.Column5}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{item.Column6}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CustomerTable