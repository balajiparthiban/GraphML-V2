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
                    <th>Product</th>
                    <th>Recommended Campaign</th>
                    <th>Customer Segment</th>
                    <th>Total Customers</th>
                    <th>Positive Impacted Feature</th>
                    <th>Negative Impacted Feature</th>
                    <th>Effect</th>
                    <th>Rank</th>
                    <th>Select</th>
                </thead>

                <tbody>

                    {items && items.map((item) =>
                        item && item.status === 'Pending' && (
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
                                <td><button className="mark_complete" key={item.id} onClick={() => { updateStatus(item.id, 'Completed'); }}>Move</button></td>
                            </tr>
                        )
                    )}

                </tbody>
            </table>



        </div>


    )
}

export default Table03