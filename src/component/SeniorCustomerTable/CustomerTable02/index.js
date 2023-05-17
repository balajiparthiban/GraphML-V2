import './style.scss'

const CustomerTable02 = ({ items, updateStatus }) => {
    return (
        <div>

            <div className='head'>
              
            </div>

            <table className='white-bg'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Customer Segment</th>
                        <th>Next Best Product </th>
                        <th>Next Best Action </th>
                        <th>Customer Count</th>
                        <th>Effect</th>
                        <th>Priority</th>
                        <th>Select</th>
                    </tr>
                </thead>

                <tbody>

                    {items && items.map((item) =>
                        item && item.status === 'Completed' && (
                            <tr className="item" key={item.id}>
                                <td></td>
                                <td>{item.Customer_segment}</td>
                                <td>{item.Next_Best_Product}</td>
                                <td>{item.Next_Best_Action}</td>
                                <td>{item.Customer_count}</td>
                                <td>{parseFloat(item.Effect * 100).toFixed(2)} % </td>
                                <td>{item.Priority}</td>


                                <td><button className="mark_pending" key={item.id} onClick={() => { updateStatus(item.id, 'Pending') }}>Remove</button></td>
                            </tr>
                        )
                    )}

                </tbody>

            </table>

        </div>
    )
}

export default CustomerTable02