import { NavLink } from 'react-router-dom'
import AdminData from '../../component/AdminData'
import Table01 from '../../component/SeniorManageTable01'
import './style.scss'

const AdminPage = () => {
    return (
        <div>
            <div className='head'>
                <h3>Admin</h3>
                <div className='btn-grp'>
                    <NavLink to="/admin-campaign" className='button-style'>Campaign</NavLink>
                </div>
            </div>

            <AdminData />
            <Table01 />
        </div>
    )
}

export default AdminPage