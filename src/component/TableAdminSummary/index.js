import { SMAdminSUmmary } from '../../json/v2/SMAdminSummary'

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
                {SMAdminSUmmary && SMAdminSUmmary.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>{item.Admin}</td>
                        <td>{item.Product}</td>
                        <td>{item.Testing_Campaign}</td>
                        <td>{item.Month}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableAdminSummary