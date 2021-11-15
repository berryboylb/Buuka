import { useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import {  faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Signup = () => {
    let navigate = useNavigate();
    const [firstname, setFirstname]= useState("");
    const [lastname, setLastname]= useState("");
    const [email, setEmail]= useState("");
    const [mobileNumber, setMobileNumber]= useState("");
    const [password, setPassword]= useState("");
    
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
          console.log( firstname + lastname + email + mobileNumber + password)
      }
    return (
        <div className={Styles.signup}>
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
                        <h3>Sign up to buuka services</h3>
                        <div className={Styles.names}>
                            <input value={firstname} onChange={(e)=> {setFirstname(e.target.value)}} type="text" name="firstname" id="firstname" placeholder="Your first name" />
                            <input value={lastname} onChange={(e)=> {setLastname(e.target.value)}} type="text" name="lastname" id="lastname" placeholder="Last name" />
                        </div>
                        <input className={Styles.fields} value={email} onChange={(e)=> {setEmail(e.target.value)}} type="email" name="email" id="email" placeholder="Enter your email address" />
                        <input className={Styles.fields} value={mobileNumber} onChange={(e)=> {setMobileNumber(e.target.value)}} type="tel" name="tel" id="tel" placeholder="Mobile Number" />
                        <div className={Styles.pswcon}>
                            <input className={Styles.fields} value={password} onChange={(e)=> {setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="Create Password"/>
                            <span onClick={showPassword}><img src="./Visibility.png" alt="Visible" /></span>
                        </div>
                        
                        <input  className={Styles.submit} type="submit" value="Sign Up" />
                        <p className={Styles.already}>Already have an account? <Link to="/login">Sign in</Link> </p>
                        <hr />
                        <div className={Styles.bottom}>
                            <p>You can also sign up with</p>
                            <a href="mailto:Info@Harxplus.com"><img src="./images/gmail.png" alt="Gmail Logo" /></a>
                            <a href="/"><FontAwesomeIcon className= {Styles.icon} icon={faFacebookF} /></a>
                        </div>
                    </form>
                </div>
           </div>
        </div>
    )
}

export default Signup
