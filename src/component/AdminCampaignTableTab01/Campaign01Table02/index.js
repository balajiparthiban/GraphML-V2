import './style.scss'

const Campaign01Table02 = ({ Campaign1items, setCampaign1items, Campaign1itemsstatus }) => {
    return (
        <div>

            <div className='head'>
                <h4>Campaign Settings</h4>
                {/* <div className='button'>
                    <button>Move to Segment Table</button>
                </div> */}
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
                        <th>Choose Campaign</th>
                        <th>Select</th>
                    </tr>
                </thead>

                <tbody>

                    {Campaign1items && Campaign1items.map((item) =>
                        item && item.status === 'Completed' && (
                            <tr className="item" key={item.id}>
                                <td></td>
                                <td>{item.Product}</td>
                                <td>{item.Recommended_campaign}</td>
                                <td>{item.Customer_segment}</td>
                                <td>{item.Total_Customers}</td>
                                <td>{item.Positive_impacted_feature}</td>
                                <td>{item.Negative_impacted_feature}</td>
                                <td>{parseFloat(item.Effect * 100).toFixed(2)}% </td>
                                <td>{item.Rank}</td>

                                <td>
                                    <select>
                                        <option>Discount Mail</option>
                                        <option>Promotional Mail</option>
                                        <option>Phone Call</option>
                                        <option>Push Notificaiton</option>
                                        <option>Loyalty Mail</option>
                                    </select>
                                </td>

                                <td><button className="mark_pending" key={item.id} onClick={() => { Campaign1itemsstatus(item.id, 'Pending') }}>Remove</button></td>
                            </tr>
                        )
                    )}

                </tbody>

            </table>

        </div>
    )
}

export default Campaign01Table02