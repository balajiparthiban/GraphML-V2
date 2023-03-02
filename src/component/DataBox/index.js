// import { useState, useEffect } from 'react';
// import axios from 'axios'
import './style.scss'
import img1 from '../../images/icon-01.png';
import img2 from '../../images/icon-02.png';
import img3 from '../../images/icon-03.png';
import img4 from '../../images/icon-04.png';
import { total_sales } from '../../json/data.js'

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
        <ul className='data-box'>

            <li className='green'>
                <h3>Total Num. of Customer</h3>
                <div>
                    <span><img src={img1} alt={img1} /></span>
                    <div className='line light-g'>
                        {total_sales.map((item, iDx) => {
                            return <h2 className='flipX' key={iDx}>{item.No_of_Campaign}</h2>
                        })}
                    </div>
                </div>
            </li>
            <li className='blue'>
                <h3>Total Num. of Product</h3>
                <div>
                    <span><img src={img2} alt={img2} /></span>
                    <div className='line light-b'>
                        {total_sales.map((item, iDx) => {
                            return <h2 className='flipX' key={iDx}>{item.No_of_Products}</h2>
                        })}
                    </div>
                </div>
            </li>
            <li className='purple'>
                <h3>Total Num. of Campaign</h3>
                <div>
                    <span><img src={img3} alt={img3} /></span>
                    <div className='line light-p'>
                        {total_sales.map((item, iDx) => {
                            return <h2 className='flipX' key={iDx}>{formatter.format(item.No_of_Products)}</h2>
                        })}
                    </div>
                </div>
            </li>
            <li className='orange'>
                <h3>Total Sales</h3>
                <div>
                    <span><img src={img4} alt={img4} /></span>
                    <div className='line light-o'>
                        <h2 className='flipX'>1.43M</h2>
                    </div>
                </div>
            </li>


            {/* Dummy */}
            <li className='green'>
                <h3>Most Effective Campaign</h3>
                <div>
                    {/* <span><img src={img1} alt={img1} /></span> */}
                    <div className='line light-g'>
                        <h2 className='flipX font-size'>Campaign 1</h2>
                    </div>
                </div>
            </li>
            <li className='blue'>
                <h3>Most Effective Micro Segment</h3>
                <div>
                    {/* <span><img src={img2} alt={img2} /></span> */}
                    <div className='line light-b'>
                        <h2 className='flipX font-size'>Segment 1</h2>
                    </div>
                </div>
            </li>
            <li className='purple'>
                <h3>Churn Rate</h3>
                <div>
                    {/* <span><img src={img3} alt={img3} /></span> */}
                    <div className='line light-p'>
                        <h2 className='flipX'>2.73%</h2>
                    </div>
                </div>
            </li>
            <li className='orange'>
                <h3>Avg. Customer ITV</h3>
                <div>
                    {/* <span><img src={img4} alt={img4} /></span> */}
                    <div className='line light-o'>
                        <h2 className='flipX'>$150</h2>
                    </div>
                </div>
            </li>
        </ul>
    );
}


export default DataBox