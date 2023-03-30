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
                        {/* <th><input type="checkbox" name="select all" /></th> */}
                        <th>Products</th>
                        <th>Recommended Campaign</th>
                        <th>Success Rate</th>
                        <th>Cannabalizing Campaign</th>
                        <th>Customer Segment</th>
                        <th>Rank</th>
                        <th>Selected Campaigns</th>
                        <th>Select</th>
                    </tr>
                </thead>

                <tbody>

                    {items && items.map((item) =>
                        item && item.status === 'Completed' && (
                            <tr className="item" key={item.id}>
                                <td></td>
                                <td>Product 1</td>
                                <td>Email Campaign 2</td>
                                <td>50%</td>
                                <td>Email Campaign 3</td>
                                <td>Segment 2</td>
                                <td>1</td>
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


                                <td> <button className="mark_pending" key={item.id} onClick={() => { updateStatus(item.id, 'Pending') }}>Remove</button>
                                </td>
                            </tr>
                        )
                    )}

                </tbody>

            </table>

        </div>
    )
}

export default Table04