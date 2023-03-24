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
                    <a onClick={Menu02} data-tip="Senior Management" activeClassName='active'>
                        <FontAwesomeIcon icon={faChalkboardTeacher} />
                    </a>
                </div>

                <div>
                    <a onClick={Menu01} data-tip="Admin">
                        <FontAwesomeIcon icon={faPeopleRoof} />
                    </a>
                </div>
            </aside>

            <div className='sidebar-dd-wrapper'>

                {click02 ?
                    <div className='sidebar-dd'>
                        <button onClick={close}>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                        <h5>Admin</h5>
                        <NavLink to="/admin" activeClassName='active' onClick={close}>Home</NavLink>
                        <NavLink to="/admin-product" activeClassName='active' onClick={close}>Product</NavLink>
                        <NavLink to="/admin-campaign" activeClassName='active' onClick={close}>Campaign</NavLink>
                    </div>
                    : ''
                }

                {click ?
                    <div className='sidebar-dd'>
                        <button onClick={close}>
                            <FontAwesomeIcon icon={faClose} />
                        </button>
                        <h5>Senior Management</h5>
                        <NavLink to="/" activeClassName='active' onClick={close}>Home</NavLink>
                        <NavLink to="/what-if-scenario" activeClassName='active' onClick={close}>What if Scenario</NavLink>
                        <NavLink to="/senior-product" activeClassName='active' onClick={close}>Product</NavLink>
                        <NavLink to="/senior-customer" activeClassName='active' onClick={close}>Customer</NavLink>
                        <NavLink to="/senior-campaign" activeClassName='active' onClick={close}>Campaign</NavLink>
                        <NavLink to="/admin-summary" activeClassName='active' onClick={close}>Summary</NavLink>
                    </div>
                    : ''
                }

            </div>
        </>
    )
}

export default Sidebar