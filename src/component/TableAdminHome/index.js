import { senior_management_first_table } from '../../json/data'

const TableAdminHome = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Name</th>
                <th>Next Best Product </th>
                <th>Next Best Action </th>
                <th>Segment</th>
                <th>Effect</th>
                <th>Month</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>Scenario 3</td>
                        <td>Product 2</td>
                        <td>Campaign 4</td>
                        <td>Segment 3</td>
                        <td>0.6</td>
                        <td>April</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableAdminHome