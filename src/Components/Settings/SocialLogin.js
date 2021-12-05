import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Styles from "./css/styles.module.css"
const SocialLogin = () => {
    return (
        <div className={Styles.social}>
            <h3>Social Logins</h3>
            <p>Link social profiles for easier access to your Buuka account.</p>
            <hr />
            <div className={Styles.con}>
               <div className={Styles.gig}>
                    <div><FontAwesomeIcon className={Styles.face}  icon={faFacebookF} /></div>
                    <h4>FaceBook</h4>
               </div>
                <div className= {Styles.BtnCon}>
                    <button type= "button">Connect Account</button>
                </div>
            </div>
            <div className={Styles.con}>
                <div className={Styles.gig}>
                    <div><FontAwesomeIcon className={Styles.gg}  icon={faGoogle} /></div>
                    <h4>Google</h4>
                </div>
                <div className= {Styles.BtnCon}>
                    <button type= "button">Connect Account</button>
                </div>
            </div>
        </div>
    )
}

export default SocialLogin
