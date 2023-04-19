import './style.scss'

const Campaign04Table02 = ({ Campaign4items, setCampaign4items, Campaign4itemsStatus }) => {
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
                        <th>Rank</th>
                        <th>Choose Campaign</th>
                        <th>Select</th>
                    </tr>
                </thead>

                <tbody>

                    {Campaign4items && Campaign4items.map((item) =>
                        item && item.status === 'Completed' && (
                            <tr className="item" key={item.id}>
                                <td></td>
                                <td>{item.Product}</td>
                                <td>{item.Recommended_campaign}</td>
                                <td>{item.Customer_segment}</td>
                                <td>{item.Total_Customers}</td>
                                <td>{item.Positive_impacted_feature}</td>
                                <td>{item.Negative_impacted_feature}</td>
                                <td>{item.Effect}</td>
                                <td>{item.Rank}</td>

                                <td>
                                    <select>
                                        <option>Email Campaign 1</option>
                                        <option>Email Campaign 2</option>
                                        <option>Phone Call</option>
                                        <option>Email Campaign 1 & 2</option>
                                        <option>Email Campaign 1 & Phone Call</option>
                                        <option>Email Campaign 2 & Phone Call</option>
                                        <option>All Channels</option>
                                    </select>
                                </td>

                                <td><button className="mark_pending" key={item.id} onClick={() => { Campaign4itemsStatus(item.id, 'Pending') }}>Remove</button></td>
                            </tr>
                        )
                    )}

                </tbody>

            </table>

        </div>
    )
}

export default Campaign04Table02