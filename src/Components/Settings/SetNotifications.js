import { useState } from "react"
import Styles from "./css/styles.module.css"
const SetNotifications = () => {
    const [textstate, setTextState] = useState(false);
    const [emailState, setEmailState] = useState(false);
    const handletextstate = () => setTextState(!textstate);
    const handleEmailState = () => setEmailState(!emailState);
       
    const toggleTextClass = () => {
        if(textstate === true){
            return `${Styles.active}`
        }else {
            return  `${Styles.check}`
        }
    }

    const toggleEmailClass = () => {
        if(emailState === true){
            return `${Styles.active}`
        }else {
            return  `${Styles.check}`
        }
    }

    return (
        <div className={Styles.SetNotifications}>
            <h3>Notiifcations</h3>
            <p>We'll send you updates about your appointments so you never miss out.</p>
            <hr />
            <div className={Styles.pow}>
                <div>
                    <h4>Text Messages</h4>
                    <button type= "button" className={toggleTextClass()} onClick= {handletextstate}><span></span></button>
                </div>
                <div>
                    <h4>Email</h4>
                    <button type= "button" className={toggleEmailClass()} onClick= {handleEmailState}><span></span></button>
                </div>
            </div>
        </div>
    )
}

export default SetNotifications
