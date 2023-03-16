import { senior_management_first_table } from '../../json/data'

const TableAdminProduct2 = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Segment </th>
                <th>Recommended Campaign </th>
                <th>Cannabalizing Campaign</th>
                <th>Marketing Fatigue</th>
                <th>Additional Campaign</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>Segment 3</td>
                        <td>Campaign 2</td>
                        <td>Campaign 3</td>
                        <td>5</td>
                        <td>Campaign 1</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableAdminProduct2