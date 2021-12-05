import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from 'react-responsive';
import {Link, useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell, faDownload, faFileImport , faCalendarMinus, faCogs, faWallet, faGift} from '@fortawesome/free-solid-svg-icons'
import "./css/styles.css"

const Navbar = ({togglelogout}) => {
    const location = useLocation();
    const boxRef = useRef();
    const [mobileNav, setmobileNav] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [box, setBox] = useState(false)
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const handleMobileNav = () => {
        if(isMobile){
            setmobileNav(!mobileNav);
        }
        
    }

    useEffect(() => {
        if(box){
            gsap.from(boxRef.current, { x:100, opacity:0, duration: 1.5, ease: "elastic" });
        }
      }, [box]);

    const toogleBox = ({ currentTarget }) => {
        if(!box) {
            gsap.from(currentTarget, { scale:1.5, duration: 1.5, ease: "elastic" });
        }else {
            gsap.from(currentTarget, { scale:1.5, duration: 1.5, ease: "elastic" });
        }
        setBox(!box);
    }
   
    return (
        <nav className= "my-container">
           <div className="logo">
              <Link to = "/"><img src="./Images/buuka logo.png" alt="logo"/></Link>
           </div>

           {isLoggedIn ? 
           <div className="loggedin">
                {box && 
                <div ref={boxRef} className="login-menu">
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
               <div className="profile-com" onClick={toogleBox}>
                   <img src="./profile.png" alt="profile" />
               </div>

              
           </div>
           : <ul className={mobileNav ? "nav-active" : "nav-links"}>
                <li><Link onClick={handleMobileNav} to = "/" className ={location.pathname === "/" ? "activate" : ""}>Explore</Link></li>
                <li><Link onClick={handleMobileNav} to = "seller" className ={location.pathname === "/seller" ? "activate" : ""}>Become A Vendor</Link></li>
                <li className="login"><Link onClick={handleMobileNav} to = "login" className ={location.pathname === "/login" ? "activate" : ""}>Login</Link></li>
                <li className="request"><Link onClick={handleMobileNav} to = "signup" className ={location.pathname === "/signup" ? "activate" : ""}>Sign Up</Link></li>
           </ul>}
           {isLoggedIn ? "" :<div className={mobileNav ? "bro" : "burger"}  onClick={handleMobileNav}>
                <div className="line0"></div>
                <div className="line1"></div>
                <div className="line2"></div>
            </div>}
        </nav>
    )
}

export default Navbar
