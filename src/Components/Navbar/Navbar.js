import { useState } from "react";
import { useMediaQuery } from 'react-responsive';
import "./css/styles.css"

const Index = () => {
    const [mobileNav, setmobileNav] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const handleMobileNav = () => {
        //if(isMobile){
            setmobileNav(!mobileNav);
        //}
    }

   
    return (
        <nav >
           <div className="myContainer con">
           <div className="logo">
              <a to = "/"><img src="./buuka logo.png" alt="logo"/></a>
           </div>
           <ul className={mobileNav ? "nav-active" : "nav-links"}>
                {/* <li><a onClick={handleMobileNav}  >HOME</a></li>
                <li><a onClick={handleMobileNav} >ABOUT</a></li>
                <li><a onClick={handleMobileNav}  >TOKENOMICS</a></li>
                <li><a onClick={handleMobileNav} >ACCESSBILITY</a></li>
                <li><a onClick={handleMobileNav} >ROADMAP</a></li>
                <li className="login"><a onClick={handleMobileNav} >FAQ</a></li> */}
                <li> Coming Soon </li>
                <li> Coming Soon </li>
                <li> Coming Soon </li>
                <li> Coming Soon </li>
           </ul>
           <div className={mobileNav ? "bro" : "burger"}  onClick={handleMobileNav}>
                <div className="line0"></div>
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
           </div>
        </nav>
    )
}

export default Index
