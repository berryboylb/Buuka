import { useState, useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const BasicInformationForm = ({handleBasicInformation}) => {
    const [value, setValue] = useState();
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(success, rejected);
    // }, []);
    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        telephone: "",
        gender: "",
        date: ""
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, SetIsSubmit] = useState(false);
    const [errors, setErrors] = useState({});
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };
    
    useEffect(() => {
        if(value){
            formValues.telephone = value;
        }
    }, [value, formValues])
    

    const validate = (values) => {
        const errors = {};
        const emailRegex = new RegExp("^(w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+)$");
        const lettersAndWhiteSpacesRegex = new RegExp("^([a-zA-Zs]*)$"); ;  

        if(!values.firstname){
            errors.firstname = "Firstname is required"
        }else if(!lettersAndWhiteSpacesRegex.test(values.firstname)){
            errors.firstname = "Only letters and whitespaces are allowed"
        }
        if(!values.lastname){
            errors.lastname = "lastname is required"
        }else if(!lettersAndWhiteSpacesRegex.test(values.lastname)){
            errors.lastname = "Only letters and whitespaces are allowed"
        }
        if(!values.email){
            errors.email = "Email is required"
        }
        else if(!emailRegex.test(values.email) ){
            errors.email = "Invalid Email";
        }
        if(!values.gender) {
            errors.gender = "Gender is required";
        }
        if(!values.date) {
            errors.date = "Date of Birth is required";
        }

        return errors;
    }

    const handleSubmit = async (e)  => {
        e.preventDefault();
        setErrors(validate(formValues));
        SetIsSubmit(true);
        //endpoint we are posting to
        // if(Object.keys(errors).length === 0 && isSubmit){
        //     await fetch('http://localhost:8000/enpoint', {
        //         method: 'POST',
        //         headers: {
        //         'Content-type': 'application/json',
        //         },
        //         body: JSON.stringify(formValues, undefined, 2),
        //     })
        // }
    }
    

    return (
        <div className={Styles.basicInfo}>
           {Object.keys(errors).length === 0 && isSubmit ? (<div className={Styles.success}>Card Details Added sucessfully</div>) : ""}
            <form onSubmit= {handleSubmit}>
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                <button className={Styles.fit} type="button"><FontAwesomeIcon  icon={faTimes} /></button>
                <h3>Edit basic information</h3>
                <div className={Styles.check}>
                    <div>
                        <label htmlFor="firstname">FirstName</label>
                        <input 
                            type="text" 
                            name="firstname" 
                            id="firstname" 
                            value= {formValues.firstname}
                            onChange={handleChange} 
                            />
                        { errors.firstname && <p className={Styles.error}>{errors.firstname}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastname">LastName</label>
                        <input 
                            type="text" 
                            name="lastname" 
                            id="lastname"
                            value= {formValues.lastname}
                            onChange={handleChange}  
                            />
                         { errors.lastname && <p className={Styles.error}>{errors.lastname}</p>}
                    </div>
                   
                </div>
                <div className={Styles.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        value= {formValues.email}
                        onChange={handleChange}  
                        />
                    
                    { errors.email && <p className={Styles.error}>{errors.email}</p>}
                </div>
                <div className={Styles.email}>
                    <label htmlFor="telephone">Mobile number</label>
                    <PhoneInput
                        name = "telephone"
                        id = "telephone"
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                        />
                </div>
                <div className={Styles.genTime}>
                    <div>
                        <label htmlFor="Select">Gender</label>
                        <select name="gender" id="gender" value={formValues.gender} onChange={handleChange}  >
                            <option value="">--Select--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        { errors.gender && <p className={Styles.error}>{errors.gender}</p>}
                    </div>
                    <div>
                        <label htmlFor="date">Day Of Birth</label>
                        <input type="date" name="date" id="date" value={formValues.date} onChange={handleChange} />
                        { errors.date && <p className={Styles.error}>{errors.date}</p>}
                    </div>
                </div>

                <div className={Styles.pop}>
                    <button onClick={handleBasicInformation}  className={Styles.cancel} type="button">Cancel</button>
                    <button className={Styles.log} type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default BasicInformationForm
