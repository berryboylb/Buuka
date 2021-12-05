import Styles from "./css/styles.module.css";
import React,{ useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
const FundCard = ({handlefundCard, handleCardForm}) => {
    const [cards, setCards] = useState({
        activeObject: null,
        objects: null,
    });

    const initialValues = {
        name: "",
        cardNo: "",
        expiryDate: "",
        cvc: "",
        cardtype: "",
        amount: ""
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    //const [isSubmit, SetIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/cardDetails`)
        .then(res => {
        return  res.json()
        })
        .then(data => {
            if(isMounted){
                //console.log(data);
                setCards({...cards, objects : data});
            }
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false }; 
    }, [cards]);

    

    const handleActive = (index) =>{
        setCards({...cards, activeObject: cards.objects[index]});
        setFormValues({...formValues, 
            name: cards.objects[index].name,
            cardNo: cards.objects[index].cardNo,
            expiryDate: cards.objects[index].expiryDate,
            cvc: cards.objects[index].cvc,
            cardtype: cards.objects[index].cardtype
        });
    }

    const toggleClass = (index) => {
        if(cards.objects[index] === cards.activeObject){
            return `${Styles.active}`;
        }else {
            return `${Styles.ping}`;
        }
    }

    const validate = (values) => {
        //Cardtype regex
        const visaRegEx = new RegExp("^(?:4[0-9]{12}(?:[0-9]{3})?)$");
        const mastercardRegEx = new RegExp("^(?:5[1-5][0-9]{14})$");
        const amexpRegEx = new RegExp("^(?:3[47][0-9]{13})$");
        const discovRegEx = new RegExp("^(?:6(?:011|5[0-9][0-9])[0-9]{12})$"); 

        const errors = {};
        const numberOnly = new RegExp("^([0-9]*)$");
        if(!values.amount) {
            errors.amount = "You have to set a specific amount";
        }else if (!numberOnly.test(values.amount)){
            errors.amount = "Invalid Number";
        }if(!values.name){
            errors.name = "Name is empty";
        }
        if(!values.cardNo){
            errors.cardNo = "Card Number is empty";
        }else if(!(visaRegEx.test(values.cardNo) || mastercardRegEx.test(values.cardNo) || amexpRegEx.test(values.cardNo) || discovRegEx.test(values.cardNo)) ){
            errors.cardNo = "Card Number is invalid";
        }if(!values.expiryDate){
            errors.expiryDate = "Expiry Date is empty";
        }if(!values.cvc){
            errors.cvc = "Cvc is empty";
        }if(!values.cardtype){
            errors.cardtype = "Card type is invalid";
        }
        return errors;
    }

    const handleSubmit = async (e)  => {
        e.preventDefault();
        setErrors(validate(formValues));
        //SetIsSubmit(true);
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
        <div className= {Styles.fundAccount}>
            <form onSubmit={handleSubmit}>
                 {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                <button type="button" onClick={handlefundCard} className={Styles.ball}><FontAwesomeIcon  className={Styles.icon} icon={faTimes} /></button>
                <h3>Fund Wallet</h3>
                <p>Choose a card to charge from</p>
                {cards.objects && <div id="cards" className={Styles.No}>
                    {cards.objects.map((card, index) => (
                        <div onClick = {() => handleActive(index)} id="divs" key = {index} className = {toggleClass(index)}>
                            {card.cardtype === "Visa" ?   <img src="./visa.png" alt="Visa"/> : ""}
                            {card.cardtype === "MasterCard" ? <img src="./ms.png" alt="MasterCard"/> : "" }
                            <h2>{card.cardNo.slice(-4)}</h2>
                        </div>
                    ))}
                </div>}
                <div className={Styles.settings}>
                    <button onClick={handleCardForm} type= "button">Add a new card</button>
                    <button type= "button">Manage Cards</button>
                </div>
                <div className = {Styles.amount}>
                    <label htmlFor="amount">Amount to fund</label>
                    <input  
                        type="text" 
                        value= {formValues.amount}
                        onChange={handleChange} 
                        name="amount" 
                        placeholder="Enter amount here"
                    />
                    
                </div>
                { errors.amount && <p className={Styles.error}>{errors.amount}</p>}
                { errors.name && <p className = {Styles.error}>{errors.name}</p>}
                { errors.cardNo && <p className = {Styles.error}>{errors.cardNo}</p>}
                { errors.expiryDate && <p className = {Styles.error}>{errors.expiryDate}</p>}
                { errors.cvc && <p className = {Styles.error}>{errors.cvc}</p>}
                { errors.cardtype && <p className = {Styles.error}>{errors.cardtype}</p>}
                <div className={Styles.bottom}> 
                    <button onClick = {handlefundCard} type="button" className={Styles.cancel}>Cancel</button>
                    <button type= "submit" className={Styles.log}>Fund</button>
                </div>
            </form>
        </div>
    )
}

export default FundCard
