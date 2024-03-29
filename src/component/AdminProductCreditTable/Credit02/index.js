import './style.scss'

const Credit02 = ({ creditItems, setCreditItems, updateCreditTable }) => {
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

                    {creditItems && creditItems.map((item) =>
                        item && item.status === 'Completed' && (
                            <tr className="item" key={item.id}>
                                <td></td>
                                <td>{item.Product}</td>
                                <td>{item.Recommended_Campaign}</td>
                                <td>{item.Customer_Segment}</td>
                                <td>{item.Total_Customers}</td>
                                <td>{item.Positive_Impacted_Feature}</td>
                                <td>{item.Negative_Impacted_Feature}</td>
                                <td>{parseFloat(item.Effect*100).toFixed(2)}% </td>
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

                                <td><button className="mark_pending" key={item.id} onClick={() => { updateCreditTable(item.id, 'Pending') }}>Remove</button></td>
                            </tr>
                        )
                    )}

                </tbody>

            </table>

        </div>
    )
}

export default Credit02