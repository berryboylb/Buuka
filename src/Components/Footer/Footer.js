import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Styles from "./css/styles.module.css"
import Links from './Links';

const Footer = () => {

    const links = [
        {
            id:1,
            title: "About Buuka",
            link1: "About",
            link2: "FAQs",
            link3: "Customer support",
            link4: "Blog"
        },
        {
            id:2,
            title: "Business",
            link1: "For Sellers",
            link2: "Pricing",
            link3: "Buy Giftcards",
            link4: "Refer & Earn"
        },
        {
            id:3,
            title: "Legal",
            link1: "Booking Terms",
            link2: "Privacy Policy",
            link3: "Buyer Protection",
            link4: "Disclaimer"
        },
    ]
    return (
        <footer className={Styles.footer}>
            <div className="my-container">
                <div className={Styles.inner}>
                    <div className={Styles.content}>
                        <div  className={Styles.connin}>
                            <div className={Styles.main}>
                                <img src="./images/white.png" alt="Logo" />
                                <a className={Styles.mail} href="mailto:support@buuka.app" >support@buuka.app</a>
                                <div className={Styles.socials}>
                                <a href="https://instagram.com/buuka.app"><FontAwesomeIcon className= "icons" icon={faInstagram} /></a>
                                <a href="https://facebook.com/mybuukaapp"><FontAwesomeIcon className= "icons" icon={faFacebook} /></a>
                                <a href="https://twitter.com/mybuukaapp/buuka.app"><FontAwesomeIcon className= "icons" icon={faTwitter} /></a>
                                </div>
                            </div>
                            <div className={Styles.links}>
                                <Links links= {links}/>
                            </div>

                        </div>

                        <div className={Styles.store}>
                            <a href="/"><img src="./images/play white.png" alt="goggle play store" /></a>
                            <a href="/"><img src="./images/App Store.png" alt="App store" /></a>
                        </div>
                    </div>
                        <hr />
                    <div className={Styles.right}>
                        <p>© 2021 buuka.app All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
