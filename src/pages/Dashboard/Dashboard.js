import Header from '../../component/Header'
import Sidebar from '../../component/Sidebar'
import SeniorManagement from '../Senior-Management'
import SeniorCampaign from '../SeniorCampaign'
import SeniorProduct from '../SeniorProduct'
import SeniorCustomer from '../SeniorCustomer'
import AdminPage from '../Admin'
import AdminCampaign from '../AdminCampaign'
import AdminSummary from '../AdminSummary'
import AdminProduct from '../AdminProduct'

import firebase from '../../firebase'
import { Route, useHistory, Redirect } from 'react-router-dom'
// import { useState } from 'react'

const Dashboard = () => {

    const history = useHistory();

    // Create a currentUser state

    // const [currentUser, setCurrentUser] = useState(null);

    // useEffect(() => {
    //     const firebase = getFirebase();

    //     if (firebase) {
    //         firebase.auth().onAuthStateChanged((authUser) => {
    //             if (authUser) {
    //                 setCurrentUser(authUser.email);
    //             } else {
    //                 setCurrentUser(null);
    //             }
    //         });
    //     }
    // }, []);


    // const [userData , getUserData] = useState('')

    const handleLogout = () => {
        firebase
            .auth()
            .signOut();
        history.push('/login')
        // console.log('logout')
        // getUserData(user.uid)

    }

    const userName = firebase.auth().currentUser;
    const name = userName.displayName;


    return (
        <div className="App">

            <Header handleLogout={handleLogout} userData={name} />
            {/* <span>Welcome {user?.displayName} {user?.updateProfile}</span> */}

            <Sidebar />

            <main>
                <Route exact path="/senior-management">
                    <SeniorManagement />
                </Route>

                <Route path="/senior-campaign">
                    <SeniorCampaign />
                </Route>

                <Route path="/senior-product">
                    <SeniorProduct />
                </Route>

                <Route path="/senior-customer" >
                    <SeniorCustomer />
                </Route>


                <Route path="/admin">
                    <AdminPage />
                </Route>

                <Route path="/admin-campaign">
                    <AdminCampaign />
                </Route>

                <Route path="/admin-summary">
                    <AdminSummary />
                </Route>

                <Route path="/admin-product">
                    <AdminProduct />
                </Route>
            </main>

        </div>
    );
}

export default Dashboard;
