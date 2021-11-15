import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import {Link, useLocation} from "react-router-dom";
import "./css/styles.css"

const Navbar = () => {
    const location = useLocation();
    const [mobileNav, setmobileNav] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const handleMobileNav = () => {
        if(isMobile){
            setmobileNav(!mobileNav);
        }
        
    }
   
    return (
        <nav className= "my-container">
           <div className="logo">
              <Link to = "/"><img src="./Images/buuka logo.png" alt="logo"/></Link>
           </div>
           <ul className={mobileNav ? "nav-active" : "nav-links"}>
                <li><Link onClick={handleMobileNav} to = "/" className ={location.pathname === "/" ? "activate" : ""}>Explore</Link></li>
                <li><Link onClick={handleMobileNav} to = "seller" className ={location.pathname === "/seller" ? "activate" : ""}>Become A Seller</Link></li>
                <li className="login"><Link onClick={handleMobileNav} to = "login" className ={location.pathname === "/login" ? "activate" : ""}>Login</Link></li>
                <li className="request"><Link onClick={handleMobileNav} to = "signup" className ={location.pathname === "/signup" ? "activate" : ""}>Sign Up</Link></li>
           </ul>
           <div className={mobileNav ? "bro" : "burger"}  onClick={handleMobileNav}>
                <div className="line0"></div>
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
        </nav>
    )
}

export default Navbar
