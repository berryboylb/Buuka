import { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const BasicInformationForm = () => {
    const [value, setValue] = useState();
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(success, rejected);
    // }, []);
    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        telephone: "",
        gender: "",
        date: ""
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };
    

    return (
        <div className={Styles.basicInfo}>
           
            <form>
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
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
                </div>
                <div className={Styles.email}>
                    <label htmlFor="tel">Mobile number</label>
                    <PhoneInput
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
                    </div>
                    <div>
                        <label htmlFor="date">Day Of Birth</label>
                        <input type="date" name="date" id="date" value={formValues.date} onChange={handleChange} />
                    </div>
                </div>

                <div className={Styles.pop}>
                    <button  className={Styles.cancel}>Cancel</button>
                    <button className={Styles.log}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default BasicInformationForm
