import { useContext } from 'react'
import AdminData from '../../component/AdminData'
import ProductTable02 from '../../component/SeniorProductTable/ProductTable02'
import CustomerTable02 from '../../component/SeniorCustomerTable/CustomerTable02'
import CampaignTable02 from '../../component/SeniorCampaignTable/CampaignTable02'

import { TableContext } from "../../context/tableContext";
import { CustomerTableContext } from "../../context/customerTableContext";
import { CampaignTableContext } from "../../context/campaignTableContext";
import './style.scss'


const AdminPage = () => {

    const { tableState, updateTableState } = useContext(TableContext);
    const { customerTableState, updateCustomerTableState } = useContext(CustomerTableContext);
    const { campaignTableState, updateCampaignTableState } = useContext(CampaignTableContext);

    return (
        <div className='admin-page'>
            <div className='head'>
                <h3>Admin</h3>
            </div>

            <AdminData />

            <h3>Proposed Scenarios</h3>

            <h5>Product Table</h5>
            <ProductTable02 items={tableState} updateStatus={updateTableState} />
            <h5>Customer Table</h5>
            <CustomerTable02 items={customerTableState} updateStatus={updateCustomerTableState} />
            <h5>Campaign Table</h5>
            <CampaignTable02 items={campaignTableState} updateStatus={updateCampaignTableState} />

            <div className='button-send'>
                <button className="button-style">Send Campaigns</button>
            </div>

        </div>
    )
}

export default AdminPage