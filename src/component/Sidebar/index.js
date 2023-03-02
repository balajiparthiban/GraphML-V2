import { NavLink } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faClose, faPeopleRoof } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './style.scss'


const Sidebar = () => {

    const [click, SetClick] = useState(false)
    const [click02, SetClick02] = useState(false)

    const Menu01 = () => {
        SetClick(false);
        SetClick02(true)
    }

    const Menu02 = () => {
        SetClick(true);
        SetClick02(false);
    }

    const close = () => {
        SetClick(false);
        SetClick02(false)
    }

    return (
        <>
            <aside>
            <ReactTooltip />
                <div>
                    <button onClick={Menu02} data-tip="Senior Management">
                        <FontAwesomeIcon icon={faChalkboardTeacher} />
                    </button>
                </div>

                <div>
                    <button onClick={Menu01} data-tip="Admin">
                        <FontAwesomeIcon icon={faPeopleRoof} />
                    </button>
                </div>
            </aside>

            <div className='sidebar-dd-wrapper'>

                {click02 ?
                    <div className='sidebar-dd'>
                        <button onClick={close}>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                        <NavLink to="/admin" activeClassName='active' onClick={close}>Admin</NavLink>
                        <NavLink to="/admin-product" activeClassName='active' onClick={close}>Admin - Product</NavLink>
                        <NavLink to="/admin-summary" activeClassName='active' onClick={close}>Admin - Summary</NavLink>
                        <NavLink to="/admin-campaign" activeClassName='active' onClick={close}>Admin - Campaign</NavLink>
                    </div>
                    : ''
                }

                {click ?
                    <div className='sidebar-dd'>
                        <button onClick={close}>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                        <NavLink to="/senior-management" activeClassName='active' onClick={close}>Senior Management</NavLink>
                        <NavLink to="/" activeClassName='active' onClick={close}>What if Scenario</NavLink>
                        <NavLink to="/senior-product" activeClassName='active' onClick={close}>Product</NavLink>
                        <NavLink to="/senior-customer" activeClassName='active' onClick={close}>Customer</NavLink>
                        <NavLink to="/senior-campaign" activeClassName='active' onClick={close}>Campaign</NavLink>
                    </div>
                    : ''
                }

            </div>
        </>
    )
}

export default Sidebar