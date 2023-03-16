import { senior_management_first_table } from '../../json/data'

const TableAdminSummary = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Admin</th>
                <th>Product </th>
                <th>Testing Campaign</th>
                <th>Month</th>
            </thead>
            <tbody>
                {senior_management_first_table && senior_management_first_table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>Admin 1</td>
                        <td>Product 1</td>
                        <td>Campaign 1 and Campaign 2</td>
                        <td>March</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableAdminSummary