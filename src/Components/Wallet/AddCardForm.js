import React,{ useState, useEffect } from "react"
import Cards from 'react-credit-cards';
import Styles from "./css/styles.module.css";
import 'react-credit-cards/es/styles-compiled.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
const AddCardForm = ({handleCardForm}) => {
    //initialize the values
    const initialValues = {
        name: "",
        cardNo: "",
        expiryDate: "",
        cvc: "",
        cardtype: ""
    }

    //get states
    const [formValues, setFormValues] = useState(initialValues);
    //focus for react card package
    const [focus, setFocus] = useState("");
    //for errors when the user types
    const [errors, setErrors] = useState({});
    //flag
    const [isSubmit, SetIsSubmit] = useState(false);

    //handle onchange events for each form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
        typeOfCard(formValues.cardNo);
    };

    const [visa, setVisa] = useState(false);
    const [mastercard, setMasterCard] = useState(false);

    const cardImage = React.useCallback(() => {
        if(formValues.cardtype === "Visa"){
            setVisa(true)
        }else if (formValues.cardtype === "MasterCard"){
            setMasterCard(true);
        }
        else {
            setVisa(false);
            setMasterCard(false);
        }
    }, [formValues])
    React.useEffect(() => {
        cardImage()
      }, [cardImage]);

    useEffect(()=> {
        //console.log(errors)
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(formValues)
        }
        // if(formValues) {
        //    cardImage();
        //  }
        
    }, [errors, formValues, isSubmit, cardImage]);

    //type of card 
    const typeOfCard = (value) => {
        let type = "";
        //Cardtype regex
        const visaRegEx = new RegExp("^(?:4[0-9]{12}(?:[0-9]{3})?)$");
        const mastercardRegEx = new RegExp("^(?:5[1-5][0-9]{14})$");
        const amexpRegEx = new RegExp("^(?:3[47][0-9]{13})$");
        const discovRegEx = new RegExp("^(?:6(?:011|5[0-9][0-9])[0-9]{12})$"); 

        if(visaRegEx.test(value)){
            type = "Visa";
        }else if(value.startsWith(4)){
            type = "Visa";
        }else if(value.startsWith(51) || 
        value.startsWith(52) ||
        value.startsWith(53) ||
        value.startsWith(54) ||
        value.startsWith(55)
        ){
            type = "MasterCard";
        }
        else if(mastercardRegEx.test(value)){
            type = "MasterCard";
        }else if(amexpRegEx.test(value)){
            type = "American Express";
        }else if(discovRegEx.test(value)){
            type = "Discovery";
        }else {
            type = "Invalid";
        }

        formValues.cardtype = type;
        return type;
    }

    typeOfCard(formValues.cardNo);

    //validate data on the frontend
    const validate = (values) => {
        //email regex 
        //const emailRegex = new RegExp("^(w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+)$")
        const errors = {};
        //regex for expiry date
        const pattern = new RegExp("^(0[1-9]|1[0-2]|[1-9])/(1[4-9]|[2-9][0-9]|20[1-9][1-9])$");
        //regex for cvc
        const cvcPattern = new RegExp("^([0-9]{3,4})$");

        //Cardtype regex
        const visaRegEx = new RegExp("^(?:4[0-9]{12}(?:[0-9]{3})?)$");
        const mastercardRegEx = new RegExp("^(?:5[1-5][0-9]{14})$");
        const amexpRegEx = new RegExp("^(?:3[47][0-9]{13})$");
        const discovRegEx = new RegExp("^(?:6(?:011|5[0-9][0-9])[0-9]{12})$"); 


        if(!values.name){
            errors.name = "Name is required";
        }
        if(!values.cardNo){
            errors.cardNo = "Card Number  is required";
        }
        else if(!(visaRegEx.test(values.cardNo) || mastercardRegEx.test(values.cardNo) || amexpRegEx.test(values.cardNo) || discovRegEx.test(values.cardNo)) ){
            errors.cardNo = "Card Number is invalid"
        }
        if(!values.expiryDate){
            errors.expiryDate = "Expiry Date is required";
        }else if(!pattern.test(values.expiryDate)){
            errors.expiryDate = "expiry date do not match the requested format";
        }
        if(!values.cvc){
            errors.cvc = "Cvc is required";
        }else if(!cvcPattern.test(values.cvc)){
            errors.cvc = "Cvc does not match the requested format";
        }
        return errors;
    }

    //handle form submission
    const handleForm = async (e) => {
        e.preventDefault();
        setErrors(validate(formValues));
        SetIsSubmit(true);
        if(Object.keys(errors).length === 0 && isSubmit){
            await fetch('http://localhost:8000/cardDetails', {
                method: 'POST',
                headers: {
                'Content-type': 'application/json',
                },
                body: JSON.stringify(formValues, undefined, 2),
            })
        }
    }

   
    
    

    return (
        <div className={Styles.AddCardForm}>
            <form onSubmit= {handleForm}>
                {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                <button onClick={handleCardForm} type="button" className= {Styles.ball}><FontAwesomeIcon   icon={faTimes} /></button>
                <div className = {Styles.cardo}>
                    <Cards 
                        name= {formValues.name}
                        number= {formValues.cardNo}
                        expiry = {formValues.expiryDate}
                        cvc = {formValues.cvc}
                        focused = {focus}
                    />
                </div>
                

                <h3>Add new card</h3>
                {Object.keys(errors).length === 0 && isSubmit ? (<div className={Styles.success}>Card Details Added sucessfully</div>) : ""}
                <div className={Styles.big}>
                    <label htmlFor="cardName">Card holder full name</label>
                    <input 
                        type="text" 
                        value= {formValues.name} 
                        onChange={handleChange} 
                        name="name" 
                        id="cardName" 
                        placeholder="Add card holder full name"
                        onFocus= {e => setFocus(e.target.name)}
                        />
                </div>
                { errors.name && <p className={Styles.error}>{errors.name}</p>}
                <div className={Styles.big}>
                    <label htmlFor="cardNo">Card number</label>
                    <input 
                        type="number" 
                        value= {formValues.cardNo} 
                        onChange={handleChange} 
                        name="cardNo" 
                        id="cardNo" 
                        placeholder="Credit or debit card number"
                        onFocus= {e => setFocus(e.target.name)}
                        />
                  { errors.cardNo && <p className={Styles.error}>{errors.cardNo}</p>}  
                </div>
                <div className={Styles.frame}>
                    <div>
                        <label htmlFor="date">Expiry date</label>
                        <input 
                            type="text" 
                            value= {formValues.expiryDate} 
                            onChange={handleChange} 
                            name="expiryDate" 
                            id="date" 
                            placeholder="MM / YY"
                            onFocus= {e => setFocus(e.target.name)}
                            />
                            {errors.expiryDate && <p className={Styles.error}>{errors.expiryDate}</p>}
                    </div>
                    <div>
                        <label htmlFor="cvc">CVC</label>
                        <input  
                            type="text" 
                            value= {formValues.cvc} 
                            onChange={handleChange}  
                            name="cvc" 
                            id="cvc" 
                            placeholder="cvc"
                            onFocus= {e => setFocus(e.target.name)}
                            />
                         {errors.cvc && <p className={Styles.error}>{errors.cvc}</p>}
                    </div>
                </div>
                <div className= {Styles.burn}>
                    <p>Pay securely with </p>
                    {visa && <img className={Styles.visa} src="./visa.png" alt="Visa" />}
                    {mastercard && <img className={Styles.ms} src="./ms.png" alt="MasterCard" />}
                </div>
                
                <div className={Styles.btns}>
                    <button onClick={handleCardForm} type="button" className= {Styles.cancel}>Cancel</button>
                    <button className = {Styles.save} type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddCardForm
