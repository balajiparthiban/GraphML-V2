import './style.scss'

const Credit01 = ({ creditItems, setCreditItems, updateCreditTable }) => {
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
                        <th>Rank</th>
                        <th>Select</th>
                    </tr>
                </thead>

                <tbody>

                    {creditItems && creditItems.map((item) =>
                        item && item.status === 'Pending' && (
                            <tr className="item" key={item.id}>
                                <td></td>

                                <td>{item.Product}</td>
                                <td>{item.Recommended_Campaign}</td>
                                <td>{item.Customer_Segment}</td>
                                <td>{item.Total_Customers}</td>
                                <td>{item.Positive_Impacted_Feature}</td>
                                <td>{item.Negative_Impacted_Feature}</td>
                                <td>{item.Effect}</td>
                                <td>{item.Rank}</td>
                                <td><button className="mark_complete" key={item.id} onClick={() => { updateCreditTable(item.id, 'Completed'); }}>Move</button></td>
                            </tr>
                        )
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default Credit01