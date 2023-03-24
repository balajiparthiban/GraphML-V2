import { senior_management_first_table } from '../../json/data'

const TableAdminProduct2 = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Product </th>
                <th>Recommended Campaign </th>
                <th>Recommended Segment</th>
                <th>Select Campaigns</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>Segment 3</td>
                        <td>Campaign 2</td>
                        <td>Campaign 3</td>
                        <td>5</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableAdminProduct2