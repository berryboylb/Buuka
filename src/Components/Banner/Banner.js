import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"

const Banner = () => {
    const [newline, setNewline] = useState(true);
    const [mobileNav, setmobileNav] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    
    useEffect(()=> {
        if (window.innerWidth <= 720) {
            setNewline(false)
        } else {
            setNewline(true)
        }    
    }, [newline])

    // useEffect(()=> {
    //     if(isMobile){
    //         setmobileNav(!mobileNav);
    //     }
    // }, [])

    window.addEventListener("load", ()=> {
        if(isMobile){
            setmobileNav(!mobileNav);
        } 
    })
   

    return (
        <div className={Styles.banner}>
            <div className={mobileNav ?  Styles.myContainer : `${Styles.inner} ${Styles.myContainer}` }>
                {/* {window.innerWidth} */}
                <h1>Why Stress?{newline && <br/>} Book Services at a Go.</h1>
                <p>Easily book  services with experts around you at the best prices.</p>
                <div className={Styles.linkForm}>
                    <Link to ="/">Get Started <FontAwesomeIcon className={Styles.icon} icon={faChevronCircleRight} /></Link>
                    <form action="">
                        <input type="search" name="" id="" placeholder="&#128270; Search Services" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Banner
