import { useState, useRef, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faBell, faDownload, faFileImport , faCalendarMinus, faCogs, faWallet, faGift} from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap";
import Styles from "./css/styles.module.css"
const Miscellenous = ({name, togglelogout}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [box, setBox] = useState(false);
    const boxRef = useRef();
    const toogleBox = ({ currentTarget }) => {
        if(!box) {
            gsap.from(currentTarget, { scale:1.5, duration: 1.5, ease: "elastic" });
        }else {
            gsap.from(currentTarget, { scale:1.5, duration: 1.5, ease: "elastic" });
        }
        setBox(!box);
    }
    useEffect(() => {
        if(box){
            gsap.from(boxRef.current, { x:100, opacity:0, duration: 1.5, ease: "elastic" });
        }
      }, [box]);
    return (
        <div className={Styles.loginNav}>
            <div className={Styles.inner}>
                <div className={Styles.cont}>
                    <button onClick={handleClick}><FontAwesomeIcon className={Styles.icon}  icon={faChevronLeft} /></button>
                    <h3>{name}</h3>
                </div>
                {isLoggedIn ? 
                <div className={Styles.loggedin}>
                {box && 
                <div ref={boxRef} className={Styles.loginMenu}>
                    <h3>Adara Beauty</h3>
                    <hr />
                    <ul>
                    <li><Link to="/pending"><FontAwesomeIcon  icon={faCalendarMinus} /> My Bookings</Link></li>
                        <li><Link to="/"><FontAwesomeIcon  icon={faEnvelope} /> Messages</Link></li>
                        <li><Link to="/"><FontAwesomeIcon  icon={faBell} /> Notifications</Link></li>
                        <li><Link to="/giftcards"><FontAwesomeIcon  icon={faGift} /> Giftcards</Link></li>
                        <li><Link to="/wallet"><FontAwesomeIcon  icon={faWallet} /> Wallet</Link></li>
                        <li><Link to="/"><FontAwesomeIcon  icon={faDownload} /> Download App</Link></li>
                        <li><Link to="/settings"><FontAwesomeIcon  icon={faCogs} /> Settings</Link></li>
                        <li onClick={togglelogout}><FontAwesomeIcon  icon={faFileImport} /> Log out</li>
                    </ul>
                </div>}
               <div className={Styles.profileCom} onClick={toogleBox}>
                   <img src="./profile.png" alt="profile" />
               </div>
           </div>
           :''}
            </div>
        </div>
    )
}

export default Miscellenous
