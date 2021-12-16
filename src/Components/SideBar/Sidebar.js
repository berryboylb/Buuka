import {Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css";
const Sidebar = ({togglelogout}) => {
    const location = useLocation();
    return (
        <div className={Styles.Sidebar}>
            <div className={Styles.logo}>
                <Link to="/"><img src="./images/buukalogowhite.svg" alt="buuka" /></Link>
            </div>
            <ul>
                <li className={location.pathname === "/dashboard" ? Styles.active : ""}><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Home</Link></li>
                <li className={location.pathname === "/vendorbookings" ? Styles.active : ""}><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> My Bookings</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Messgaes</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> My Services</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Clients</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Payments</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Analytics</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Giftcards</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Staffs</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Reviews</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Notifications</Link></li>
                <li><Link to="/"><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Settings</Link></li>
                <hr />
                <button type='button' onClick={togglelogout}><FontAwesomeIcon  icon={faCalendarMinus} className={Styles.con} /> Logout</button>
            </ul>
          
        </div>
    )
}

export default Sidebar
