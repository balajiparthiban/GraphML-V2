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
                    <tr>
                        <th>S.No</th>
                        {/* <th><input type="checkbox" name="select all" /></th> */}
                        <th>Products</th>
                        <th>Location</th>
                        <th>Age</th>
                        <th>CLV</th>
                        <th>Attrition Rate %</th>
                        <th>Customer Count</th>
                        <th>Primary Positive Causal</th>
                        <th>Primary Negative Causal</th>
                        <th>Select</th>
                    </tr>
                </thead>

                <tbody>

                    {items && items.map((item) =>
                        item && item.status === 'Pending' && (
                            <tr className="item" key={item.id}>
                                <td></td>
                                <td>{item.Products}</td>
                                <td>{item.Location}</td>
                                <td>{item.Age}</td>
                                <td>{item.CLV}</td>
                                <td>{item.Attrition_Rate}</td>
                                <td>{item.Customer_Count}</td>
                                <td>{item.Primary_Positive_Causal}</td>
                                <td>{item.Primary_Negative_Causal}</td>
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