import { SM_Customer_Overview_Table } from '../../json/v2/SM_Customer_Overview_Table'

const SMCustomerOverviewTable = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Customer Segment</th>
                <th> Product</th>
                <th> Recommended Campaign</th>
                <th>Effect</th>
                <th>Rank</th>
            </thead>
            <tbody>
                {SM_Customer_Overview_Table && SM_Customer_Overview_Table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>{item.Total_Sales}</td>
                        <td>{item.Column3}</td>
                        <td>{item.Column4}</td>
                        <td>{item.Column5}</td>
                        <td>{item.Column6}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SMCustomerOverviewTable