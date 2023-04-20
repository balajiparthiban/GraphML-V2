// import { useState, useEffect } from 'react'
// import axios from 'axios'
import { senior_management_first_table } from '../../json/data'

const Table01 = () => {
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

                
                <th>Next Best Product </th>
                <th>Next Best Action </th>

                
                <th>Success Rate</th>
                <th>Cannabalizing Campaign</th>
                <th>Customer Segment</th>
                <th>Priority</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>Product 1</td>
                        <td>Email Campaign 1</td>
                        <td>50%</td>
                        <td>Email Campaign 3</td>
                        <td>Segment 2</td>
                        <td>1</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table01