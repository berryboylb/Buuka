import { useState } from "react";
import {Link, useLocation } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarMinus} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css";
const Sidebar = ({togglelogout}) => {
    const location = useLocation();
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const [mobileNav, setmobileNav] = useState(false);
    const handleMobileNav = () => {
        if(isMobile){
            setmobileNav(!mobileNav);
        }
    }
    return (
            <div className={ Styles.Sidebar}>
               <div className={isMobile ? 'my-container' : ""}>
                <div className={Styles.inner}>
                    <div className={`${Styles.logo} ${isMobile ? "my-container" : ""}`}>
                        <Link to="/"><img src="./images/buukalogowhite.svg" alt="buuka" /></Link>
                    </div>

                    <div className={mobileNav ? Styles.bigbro : Styles.hamburger}  onClick={handleMobileNav}>
                        <div className={Styles.line0}></div>
                        <div className={Styles.line1}></div>
                        <div className={Styles.line2}></div>
                    </div>
                    <ul className={mobileNav ? Styles.side_active : Styles.side_list}>
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
               </div>
            </div>
    )
}

export default Sidebar
