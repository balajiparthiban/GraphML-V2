// import { useState, useEffect } from 'react';
// import axios from 'axios'
import './style.scss'
import img1 from '../../images/icon-01.png';
import img2 from '../../images/icon-02.png';
import img3 from '../../images/icon-03.png';
import img4 from '../../images/icon-04.png';
import { Senior_manager_home_page_box_data } from '../../json/v2/Data_UI'

// const total_sales = [
//     {
//       "id": 1,
//       "No_of_Campaign": 7,
//       "No_of_Products": 4,
//       "Total_sales": 2400499,
//       "Number_of_customers": 200000
//     }
//   ],


const DataBox = () => {

    // const [photos, setPhotos] = useState([]);

    // useEffect(() => {
    //     // axios.get('http://localhost:3000/total_sales')
    //     axios.get('./data.json')
    //         .then(res => {
    //             setPhotos(res.data)
    //         })
    // }, []);

    const formatter = new Intl.NumberFormat('en', {
        style: 'decimal',
        signDisplay: 'never',
        useGrouping: true,
        notation: 'compact'
    });

    return (
        <>
            <ul className='data-box'>

                <li className='green'>
                    <h3>Total No. of Customers</h3>
                    <div>
                        <span><img src={img1} alt={img1} /></span>
                        <div className='line light-g'>
                            {Senior_manager_home_page_box_data.map((item, iDx) => {
                                return <h2 className='flipX' key={iDx}>{item.Total_number_of_customers}</h2>
                            })}
                        </div>
                    </div>
                </li>
                <li className='blue'>
                    <h3>Total No. of Products</h3>
                    <div>
                        <span><img src={img2} alt={img2} /></span>
                        <div className='line light-b'>
                            {Senior_manager_home_page_box_data.map((item, iDx) => {
                                return <h2 className='flipX' key={iDx}>{item.Total_number_of_Products}</h2>
                            })}
                        </div>
                    </div>
                </li>
                <li className='purple'>
                    <h3>Total No. of Campaigns</h3>
                    <div>
                        <span><img src={img3} alt={img3} /></span>
                        <div className='line light-p'>
                            {Senior_manager_home_page_box_data.map((item, iDx) => {
                                return <h2 className='flipX' key={iDx}>{formatter.format(item.Total_number_of_campaigns)}</h2>
                            })}
                        </div>
                    </div>
                </li>
                <li className='orange'>
                    <h3>Total Sales</h3>
                    <div>
                        <span><img src={img4} alt={img4} /></span>
                        <div className='line light-o'>
                            {Senior_manager_home_page_box_data.map((item, iDx) => {
                                return <h2 className='flipX' key={iDx}>{formatter.format(item.Total_sales)}</h2>
                            })}
                        </div>
                    </div>
                </li>
            </ul>


            <ul className="data-box grid-02">
                <li className='green'>
                    <h3>Most Effective Campaigns</h3>
                    <div>
                        {/* <span><img src={img1} alt={img1} /></span> */}
                        <div className='line light-g'>
                            {Senior_manager_home_page_box_data.map((item, iDx) => {
                                return <h2 className='flipX' key={iDx}>{item.Most_effective_campaign}</h2>
                            })}
                        </div>
                    </div>
                </li>
                <li className='blue'>
                    <h3>Most Effective Micro Segment</h3>
                    <div>
                        {/* <span><img src={img2} alt={img2} /></span> */}
                        <div className='line light-g'>
                            {Senior_manager_home_page_box_data.map((item, iDx) => {
                                return <h2 className='flipX' key={iDx}>{item.Most_effective_segment}</h2>
                            })}
                        </div>
                    </div>
                </li>
                <li className='purple'>
                    <h3>Effect Rate</h3>
                    <div>
                        {/* <span><img src={img3} alt={img3} /></span> */}
                        <div className='line light-g'>
                            {Senior_manager_home_page_box_data.map((item, iDx) => {
                                return <h2 className='flipX' key={iDx}>{parseFloat(item.Effect_rate*100).toFixed(2)} %</h2>
                            })}
                        </div>
                    </div>
                </li>
            </ul>

        </>
    );
}


export default DataBox