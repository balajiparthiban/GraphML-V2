import './style.scss'

const Table03 = ({ items, setItems, updateStatus }) => {

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
                    <th>S.No</th>
                    {/* <th><input type="checkbox" name="select all" /></th> */}
                    <th>Products</th>
                    <th>Recommended Campaign</th>
                    <th>Success Rate</th>
                    <th>Cannabalizing Campaign</th>
                    <th>Customer Segment</th>
                    <th>Rank</th>
                    <th>Select</th>
                </thead>

                <tbody>

                    {items && items.map((item) =>
                        item && item.status === 'Pending' && (
                            <tr className="item" key={item.id}>
                                <td></td>
                                <td>Product 1</td>
                                <td>Email Campaign 2</td>
                                <td>50%</td>
                                <td>Email Campaign 3</td>
                                <td>Segment 2</td>
                                <td>1</td>
                                <td> <button
                                    className="mark_complete"
                                    key={item.id}
                                    onClick={() => {
                                        updateStatus(item.id, 'Completed');
                                    }}
                                >
                                    Move
                                </button>
                                </td>
                            </tr>
                        )
                    )}

                </tbody>
            </table>



        </div>


    )
}

export default Table03