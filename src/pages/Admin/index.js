import AdminData from '../../component/AdminData'
import TableAdminHome from '../../component/TableAdminHome'
import './style.scss'


const AdminPage = () => {
    return (
        <div>
            <div className='head'>
                <h3>Admin</h3>
                {/* <div className='btn-grp'>
                    <NavLink to="/admin-campaign" className='button-style'>Campaign</NavLink>
                </div> */}
            </div>

            <AdminData />

            <h3>Proposed Scenarios</h3>
            <TableAdminHome />
        </div>
    )
}

export default AdminPage