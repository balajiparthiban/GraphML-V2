import { SM_Customer_Overview_Table } from '../../json/v2/SM_Customer_Overview_Table'

const SMCustomerOverviewTable = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Next Best Product </th>
                <th>Next Best Action </th>
                <th>Customer Segment</th>
                <th>Customer Count</th>
                <th>Effect</th>
                <th>Priority</th>
            </thead>
            <tbody>
                {SM_Customer_Overview_Table && SM_Customer_Overview_Table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>{item.Next_Best_Product}</td>
                        <td>{item.Next_Best_Action}</td>
                        <td>{item.Customer_segment}</td>
                        <td>{item.Customer_count}</td>
                        <td>{parseFloat(item.Effect * 100).toFixed(2)} %</td>
                        <td>{item.Priority}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SMCustomerOverviewTable