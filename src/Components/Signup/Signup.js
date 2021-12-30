import { useState} from "react";
import axios from 'axios';
import { useNavigate, Link} from "react-router-dom";
import { NotificationManager} from 'react-notifications';
import {  faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Signup = () => {
    let navigate = useNavigate();
    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: ""
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    //handle onchange events for each form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    //validate data on the frontend
    const validate = (values) => {
        //email regex 
        const emailRegex = new RegExp("^(w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+)$");
        const lettersAndWhitespaces = new RegExp("^[a-zA-Zs]*$") ;  
        
        if(!values.first_name){
            errors.first_name = "first_name is required";
        }
        else if(!lettersAndWhitespaces.test(values.first_name)){
            errors.first_name = "Only letters and whitespaces are allowed.";
        }
        if(!values.last_name){
            errors.last_name = "last_name is required";
        }
        else if(!lettersAndWhitespaces.test(values.last_name)){
            errors.last_name = "Only letters and whitespaces are allowed.";
        }
        if(!values.email) {
            errors.email = "Email is required.";
        }
        else if(emailRegex.test(values.email)) {
            errors.email = "Doesn't match requested email format";
        }
        if(!values.phone) {
            errors.phone = "Phone number is reqired";
        }
        if(!values.password) {
            errors.password = "Phone number is reqired";
        }
        return errors;
    }

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
          if(Object.keys(errors).length === 0 ){
            axios.post('https://lab.buuka.app/api/register?', formValues)
            .then(response => 
                { 
                    NotificationManager.success('Success', response.data.message, 3000, ()=> {alert('You\'ve sucessfully signed up')})
                })
            .catch(error => {
                NotificationManager.error('Error message', 'Click me!', 5000, () => { alert(error.message);});
                console.error('There was an error!', error.message);
            });
          }
      }
    return (
        <div className={Styles.signup}>
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
                        <h3>Sign up to buuka services</h3>
                        <div className={Styles.names}>
                            <input value={formValues.first_name} onChange={handleChange} type="text" name="first_name" id="first_name" placeholder="Your first name" />
                            <input value={formValues.last_name} onChange={handleChange} type="text" name="last_name" id="last_name" placeholder="Last name" />
                        </div>
                        { errors.first_name && <p className={Styles.error}>{errors.first_name}</p>}
                        { errors.last_name && <p className={Styles.error}>{errors.last_name}</p>}
                        <input className={Styles.fields} value={formValues.email} onChange={handleChange} type="email" name="email" id="email" placeholder="Enter your email address" />
                        { errors.email && <p className={Styles.error}>{errors.email}</p>}
                        <input className={Styles.fields} value={formValues.phone} onChange={handleChange} type="tel" name="phone" id="tel" placeholder="Mobile Number" />
                        { errors.phone && <p className={Styles.error}>{errors.phone}</p>}
                        <div className={Styles.pswcon}>
                            <input className={Styles.fields} value={formValues.password} onChange={handleChange} type="password" name="password" id="password" placeholder="Create Password"/>
                            <span onClick={showPassword}><img src="./Visibility.png" alt="Visible" /></span>
                        { errors.phone && <p className={Styles.error}>{errors.phone}</p>}
                        </div>

                        <div className={Styles.pswcon}>
                            <input className={Styles.fields} value={formValues.password_confirmation} onChange={handleChange} type="password" name="password_confirmation" id="password_confirmation" placeholder="Create Password"/>
                            <span onClick={showPassword}><img src="./Visibility.png" alt="Visible" /></span>
                        { errors.phone && <p className={Styles.error}>{errors.phone}</p>}
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
