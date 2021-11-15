import { useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import {  faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Login = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    function showPassword(evt){
        var x = evt.currentTarget.previousElementSibling;
        let y = evt.currentTarget;
        if (x.type === "password") {
          x.type = "text";
          y.firstChild.src="./hidden.png"
        } else {
          x.type = "password";
          y.firstChild.src="./Visibility.png"
        }
     }

     const handleForm = (e) => {
        e.preventDefault()
        console.log( email + password)
    }
    return (
        <div className={Styles.login}>
           <div className="my-container">
                <div className={Styles.inner}>
                    <div className={Styles.top}>
                       <button onClick={handleClick}> <FontAwesomeIcon className={Styles.icon} icon={faChevronLeft} /></button>
                       
                       <div className={Styles.burger} >
                            <div className={Styles.line0}></div>
                            <div className={Styles.line1}></div>
                            <div className={Styles.line2}></div>
                        </div>
                    </div>

                    <form onSubmit={handleForm}>
                        <h3>Login to Buuka services</h3>
                        <input className={Styles.fields} value={email} onChange={(e)=> {setEmail(e.target.value)}} type="email" name="email" id="email" placeholder="Enter your email address" />
                        <div className={Styles.pswcon}>
                            <input className={Styles.fields} value={password} onChange={(e)=> {setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="*******"/>
                            <span onClick={showPassword}><img src="./Visibility.png" alt="Visible" /></span>
                        </div>
                        
                        <input  className={Styles.submit} type="submit" value="Log In" />
                        <p className={Styles.already}>Don’t have an account? <Link to="/signup">Sign Up</Link> </p>
                        <hr />
                        <div className={Styles.bottom}>
                            <p>You can also Login In with</p>
                            <a href="mailto:Info@Harxplus.com"><img src="./images/gmail.png" alt="Gmail Logo" /></a>
                            <a href="/"><FontAwesomeIcon className= {Styles.icon} icon={faFacebookF} /></a>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}

export default Login
