import { useState} from "react";
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { useNavigate, Link} from "react-router-dom";
import {  faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Login = () => {
    const initialValues = {
        email: "",
        password: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    //flag
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    const validate = (values) => {
        //email regex 
        const emailRegex = new RegExp("^(w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+)$");
        if(!values.email) {
            errors.email = "Email is required.";
        }
        else if(emailRegex.test(values.email)) {
            errors.email = "Doesn't match requested email format";
        }
        if(!values.password) {
            errors.password = "Phone number is reqired";
        }
        return errors;
    }

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


     const handleForm = async (e) => {
        e.preventDefault();
        setErrors(validate(formValues));
        if(Object.keys(errors).length === 0) {
            axios.post('https://lab.buuka.app/api/login?', formValues)
            .then(response => {
                sessionStorage.setItem('userToken', response.data.data.token);
                sessionStorage.setItem('isLoggedIn', true);
                navigate('/'); 
                window.location.reload();
                NotificationManager.success('Success', response.data.message, 3000);
            })
            .catch(error => {
                NotificationManager.error('Error', error.message, 5000, () => { alert('callback');});
                console.error('There was an error!', error.message);
            });
        }
    }
    return (
        <div className={Styles.login}>
           <div className="my-container">
                <div className={Styles.inner}>
                     {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
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
                        <input className={Styles.fields} value={formValues.email} onChange={handleChange} type="email" name="email" id="email" placeholder="Enter your email address" />
                        <div className={Styles.pswcon}>
                            <input className={Styles.fields} value={formValues.password} onChange={handleChange} type="password" name="password" id="password" placeholder="*******"/>
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
