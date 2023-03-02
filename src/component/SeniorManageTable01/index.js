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
                <th>Name</th>
                <th>Product</th>
                <th>Campaign</th>
                <th>Segment</th>
                <th>Effect</th>
                <th>Month</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>{item.Campaigns}</td>
                        <td>{item.Product}</td>
                        <td>{item.Success_rate}%</td>
                        <td>Segment 1</td>
                        <td>3</td>
                        <td>{item.Success_rate}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table01