import { OverviewTable } from '../../json/v2/Senior_Manager_Product_Overview_Table'

const SeniorManageProductTable = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Product</th>
                <th>Recommended Campaign</th>
                <th>Customer Segment</th>
                <th>Effect</th>
                <th>Rank</th>
            </thead>
            <tbody>
                {OverviewTable && OverviewTable.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>{item.Product}</td>
                        <td>{item.Recommended_campaign}</td>
                        <td>{item.Customer_Segment}</td>
                        <td>{item.Column4}</td>
                        <td>{item.Column5}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SeniorManageProductTable