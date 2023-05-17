import './style.scss'

const Campaign04Table01 = ({ Campaign4items, setCampaign4items, Campaign4itemsstatus }) => {
    return (
        <div>
            <div className='head-top'>
                <h4>Segment Table</h4>
                <div className='button'>
                    <button>Move to Campaign View</button>
                </div>
            </div>

            <table className='white-bg'>

                <thead>
                    <tr>
                    <th>S.No</th>
                        <th>Next Best Product </th>
                        <th>Next Best Action </th>
                        <th>Customer Segment</th>
                        <th>Total Customers</th>
                        <th>Positive Causality</th>
                        <th>Negative Causality</th>
                        <th>Effect</th>
                        <th>Priority</th>
                        <th>Select</th>
                    </tr>
                </thead>

                <tbody>

                    {Campaign4items && Campaign4items.map((item) =>
                        item && item.status === 'Pending' && (
                            <tr className="item" key={item.id}>
                                <td></td>
                                <td>{item.Next_Best_Product}</td>
                                <td>{item.Next_Best_Action}</td>
                                <td>{item.Customer_segment}</td>
                                <td>{item.Total_Customers}</td>
                                <td>{item.Positive_impacted_feature}</td>
                                <td>{item.Negative_impacted_feature}</td>
                                <td>{parseFloat(item.Effect * 100).toFixed(2)}% </td>
                                <td>{item.Priority}</td>
                                <td><button className="mark_complete" key={item.id} onClick={() => { Campaign4itemsstatus(item.id, 'Completed'); }}>Move</button></td>
                            </tr>
                        )
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default Campaign04Table01