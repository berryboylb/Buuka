import { NotificationManager } from 'react-notifications';
import Styles from "./css/styles.module.css"
const Logout = ({togglelogout}) => {

    const logoutUser = () => {
        sessionStorage.clear();
        localStorage.clear();
        togglelogout();
        NotificationManager.success('Success', "Logout Sucessful", 3000, () => {alert('User has beeen signed out sucessfully')});
    }

    return (
        <div className={Styles.logout}>
            <div className={Styles.inner}>
                <h3>Logout</h3>
                <p>Are you sure you want to logout from our account?</p>
                <div>
                    <button onClick={togglelogout} className={Styles.cancel}>Cancel</button>
                    <button onClick={logoutUser} className={Styles.log}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Logout
