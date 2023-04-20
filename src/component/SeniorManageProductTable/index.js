import { OverviewTable } from '../../json/v2/Senior_Manager_Product_Overview_Table'

const SeniorManageProductTable = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Next Best Product </th>
                <th>Next Best Action </th>
                <th>Customer Segment</th>
                <th>Effect</th>
                <th>Priority</th>
            </thead>
            <tbody>
                {OverviewTable && OverviewTable.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>{item.Product}</td>
                        <td>{item.Recommended_campaign}</td>
                        <td>{item.Customer_Segment}</td>
                        {/* <td>{item.Column4} % </td> */}
                        <td>{parseFloat(item.Column4*100).toFixed(2)} % </td>
                        {/* <td>{parseFloat(item.Column4*100).toFixed(2)} </td> */}
                        <td>{item.Column5}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SeniorManageProductTable