import { senior_management_first_table } from '../../json/data'

const TableAdminProduct = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Next Best Product </th>
                <th>Next Best Action </th>
                <th>Recommended Segment </th>
                <th>Customer Count</th>
                <th>Conversation Rate</th>
                <th>Positively Affecting Actions</th>
                <th>Negatively Affecting Actions </th>
                <th>Priority</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>Product 1</td>
                        <td>Campaign 2</td>
                        <td>Segment 3</td>
                        <td>7034</td>
                        <td>67%</td>
                        <td>Action 3</td>
                        <td>Action 2</td>
                        <td>1</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableAdminProduct