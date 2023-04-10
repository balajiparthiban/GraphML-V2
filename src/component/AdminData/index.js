// import { useState, useEffect } from 'react';
// import axios from 'axios'
import './style.scss'
// import img1 from '../../images/icon-01.png';
// import img2 from '../../images/icon-02.png';
// import img3 from '../../images/icon-03.png';
// import img4 from '../../images/icon-04.png';
// import { total_sales } from '../../json/data.js'

// const total_sales = [
//     {
//       "id": 1,
//       "No_of_Campaign": 7,
//       "No_of_Products": 4,
//       "Total_sales": 2400499,
//       "Number_of_customers": 200000
//     }
//   ],


const AdminData = () => {

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
            {/* Dummy */}
            <li className='green'>
                <h3>Present Running Campaign</h3>
                <div>
                    {/* <span><img src={img1} alt={img1} /></span> */}
                    <div className='line light-g'>
                        <h2 className='flipX'>5</h2>
                    </div>
                </div>
            </li>
            <li className='blue'>
                <h3>Planned Reach Outs</h3>
                <div>
                    {/* <span><img src={img2} alt={img2} /></span> */}
                    <div className='line light-b'>
                        <h2 className='flipX'>50L</h2>
                    </div>
                </div>
            </li>
            <li className='purple'>
                <h3>Current Reach Outs</h3>
                <div>
                    {/* <span><img src={img3} alt={img3} /></span> */}
                    <div className='line light-p'>
                        <h2 className='flipX'>20L</h2>
                    </div>
                </div>
            </li>
            <li className='orange'>
                <h3>Current Success Rate</h3>
                <div>
                    {/* <span><img src={img4} alt={img4} /></span> */}
                    <div className='line light-o'>
                        <h2 className='flipX'>4.76%</h2>
                    </div>
                </div>
            </li>
        </ul>
    );
}


export default AdminData