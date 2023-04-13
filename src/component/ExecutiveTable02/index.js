import './style.scss'

const Table04 = ({ items, setItems, updateStatus }) => {
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
                        <th>Products</th>
                        <th>Location</th>
                        <th>Age</th>
                        <th>CLV</th>
                        <th>Attrition Rate %</th>
                        <th>Customer Count</th>
                        <th>Primary Positive Causal</th>
                        <th>Primary Negative Causal</th>
                        <th>Recommended Campaign</th>
                        <th>Select Campaigns</th>
                        <th>Select</th>
                    </tr>
                </thead>

                <tbody>

                    {items && items.map((item) =>
                        item && item.status === 'Completed' && (
                            <tr className="item" key={item.id}>
                                <td></td>
                                <td>{item.Product}</td>

                                <td>{item.Products}</td>
                                <td>{item.Location}</td>
                                <td>{item.Age}</td>
                                <td>{item.CLV}</td>
                                <td>{item.Attrition_Rate}</td>
                                <td>{item.Customer_Count}</td>
                                <td>{item.Primary_Positive_Causal}</td>
                                <td>{item.Primary_Negative_Causal}</td>
                                
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

                                <td><button className="mark_pending" key={item.id} onClick={() => { updateStatus(item.id, 'Pending') }}>Remove</button></td>
                            </tr>
                        )
                    )}

                </tbody>

            </table>

        </div>
    )
}

export default Table04