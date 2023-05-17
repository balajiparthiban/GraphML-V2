import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../images/latent-view-analytics-logo.jpg'
import './style.scss'
// import { auth } from '../../firebase'
// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const Header = ({ handleLogout, name }) => {
    return (
        <header>
            <div className='header-left'>
                <div><img src={Logo} alt={Logo} /></div>
                <span>One Customer View</span>
            </div>
            <div className='header-right'>
                <FontAwesomeIcon icon={faSignOut} onClick={handleLogout} title="Logout" />
            </div>
        </header>
    )
}

export default Header