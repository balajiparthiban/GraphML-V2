import {useContext, useState} from 'react'
import AdminData from '../../component/AdminData'
// import TableAdminHome from '../../component/TableAdminHome'
import ProductTable02 from '../../component/SeniorProductTable/ProductTable02'
import './style.scss'
import {TableContext} from "../../context/tableContext";


const AdminPage = () => {

    const { tableState, updateTableState } = useContext(TableContext);

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
            {/* <TableAdminHome /> */}

            <ProductTable02 items={tableState} updateStatus={updateTableState} />
        </div>
    )
}

export default AdminPage