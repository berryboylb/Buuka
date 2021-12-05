import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHome, faBriefcase, faBox} from '@fortawesome/free-solid-svg-icons';
import Styles from "./css/styles.module.css";
const AddressForm = ({handleAddressForm}) => {
    const initialValues = {
        addressType : "",
        address : ""
    }

    const [address, setAddress] = useState({
        activeObject: null,
        objects: [{id:1, addressType: "Home"}, 
                  {id:2, addressType: "Work"}, 
                  {id:3, addressType: "Others"}
                ]
    })

    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    
    const handleActive = (index) =>{
        setAddress({...address, activeObject: address.objects[index]});
        setFormValues({...formValues, addressType: address.objects[index].addressType});
    }

    const toggleClass = (index) => {
        if(address.objects[index] === address.activeObject){
            return `${Styles.active}`;
        }else {
            return `${Styles.boxx}`;
        }
    }

    const validate = (values) => {
        const errors = {};
        if(!values.addressType) {
            errors.addressType = "Please select an address type";
        } if(!values.address){
            errors.address = "Address field cannot be empty";
        }else if(values.length > 200){
            errors.address = "Address is too long";
        }
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validate(formValues));
        // if(Object.keys(errors).length === 0){
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
        <div className={Styles.addressform}>
            <form onSubmit={handleSubmit}>
                 {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                <button className={Styles.cancel} onClick={handleAddressForm} type = "button"><FontAwesomeIcon icon={faTimes} /></button>
                <h3>Edit address</h3>
                <div className={Styles.type}>
                    { address.objects.map((address, index)=> (
                        <div key={index} onClick = {() => handleActive(index)} className = {toggleClass(index)}>
                            {address.addressType === "Home" ? <FontAwesomeIcon className={Styles.icon} icon={faHome} /> : ""}
                            {address.addressType === "Work" ? <FontAwesomeIcon className={Styles.icon} icon={faBriefcase} />: ""}
                            {address.addressType === "Others" ?<FontAwesomeIcon className={Styles.icon} icon={faBox} /> : ""}
                            <h4>{address.addressType}</h4>
                        </div> 
                    ))}
                </div>
                <div className={Styles.new}>
                    <label htmlFor="textarea">Address</label>
                    <textarea name="address" id="textarea" cols="30" rows="10" maxLength={200}  defaultValue={formValues.address} onChange={handleChange}></textarea>
                    {errors.address && <p className={Styles.errors}>{errors.address}</p> }
                    {errors.addressType && <p className={Styles.errors}>{errors.addressType}</p> }
                </div>
                <div className={Styles.bottom}>
                    <button type="button" onClick={handleAddressForm} className={Styles.cancell}>Cancel</button>
                    <button type="submit" className={Styles.save}>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddressForm
