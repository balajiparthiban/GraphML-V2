import { senior_management_first_table } from '../../json/data'

const TableAdminProduct = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Product</th>
                <th>Segment </th>
                <th>Recommended Campaign </th>
                <th>Customer Count</th>
                <th>Rank</th>
                <th>Conversation Rate</th>
                <th>Action that affects positively</th>
                <th>Action that affects negatively</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>Product 1</td>
                        <td>Segment 3</td>
                        <td>Campaign 2</td>
                        <td>7034</td>
                        <td>1</td>
                        <td>67%</td>
                        <td>Action 3</td>
                        <td>Action 2</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableAdminProduct