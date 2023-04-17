import './style.scss'

const Campaign04Table01 = ({ Campaign4items, setCampaign4items, Campaign4itemsStatus }) => {
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
                        <th>Product</th>
                        <th>Recommended_campaign</th>
                        <th>Customer_segment</th>
                        <th>Total_Customers</th>
                        <th>Positive_impacted_feature</th>
                        <th>Negative_impacted_feature</th>
                        <th>Effect</th>
                        <th>Rank</th>
                        <th>Select</th>
                    </tr>
                </thead>

                <tbody>

                    {Campaign4items && Campaign4items.map((item) =>
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
                                <td><button className="mark_complete" key={item.id} onClick={() => { Campaign4itemsStatus(item.id, 'Completed'); }}>Move</button></td>
                            </tr>
                        )
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default Campaign04Table01