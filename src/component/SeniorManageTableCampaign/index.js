import { SM_Campaign_Overview_Table } from '../../json/v2/SM_Campaign_Overview_Table'

const SMCampaignOverviewTable = () => {
    return (
        <table className='white-bg'>
            <thead>
                <th>S.No</th>
                <th>Campaign</th>
                <th>Recommended Product</th>
                <th>Effect</th>
                <th>Customer Segment</th>
                <th>Rank</th>
            </thead>
            <tbody>
                {SM_Campaign_Overview_Table && SM_Campaign_Overview_Table.map((item, val) => (
                    <tr key={val}>
                        <td></td>
                        <td>{item.Column2}</td>
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

export default SMCampaignOverviewTable