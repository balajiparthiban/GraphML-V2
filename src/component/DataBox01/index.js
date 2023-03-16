import './style.scss'
import img1 from '../../images/icon-01.png';
import img2 from '../../images/icon-02.png';
import img3 from '../../images/icon-03.png';
import img4 from '../../images/icon-04.png';
import { total_sales } from '../../json/data.js'

const DataBox01 = () => {

    const formatter = new Intl.NumberFormat('en', {
        style: 'decimal',
        signDisplay: 'never',
        useGrouping: true,
        notation: 'compact'
    });

    return (
        <ul className='data-box-02'>
            <li className='purple'>
                <h3>Total Active Campaign</h3>
                <div>
                    <div className='line light-p'>
                        <h2 className='flipX'>7</h2>
                    </div>
                </div>
            </li>
        </ul>
    );
}


export default DataBox01