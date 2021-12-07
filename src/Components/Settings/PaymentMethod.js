import { useState, useEffect } from 'react'
import RemoveCard from "./RemoveCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const PaymentMethod = ({handleCardForm}) => {
    const [cards, setCards] = useState({
        activeObject: null,
        objects: null,
    });

    const [deleted, setDeleted] = useState(null);
    const [popup, setPopup] = useState(false)

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
        setDeleted(cards.activeObject);
        //setPopup(!popup);
        console.log(deleted)
    }

    const toggleClass = (index) => {
        if(cards.objects[index] === cards.activeObject){
            return `${Styles.active}`;
        }else {
            return `${Styles.singleCard}`;
        }
    }

    return (
        <div className={Styles.paymentMethod}>
            <div className={Styles.payment}>
                <h3>Payment Methods</h3>
                <p>Securely save your card details for hassle-free payments.</p>
               {cards.objects && <div className={Styles.cards}>
                    {cards.objects.map((card, index) => (
                        <div key={index} onClick={() => handleActive(index)} className={toggleClass(index)}>
                            <div >
                                {card.cardtype === "Visa" ?   <img src="./visa.png" alt="Visa"/> : ""}
                                {card.cardtype === "MasterCard" ? <img src="./ms.png" alt="MasterCard"/> : "" }
                                <h2>{card.cardNo.slice(-4)}</h2>
                            </div>
                            <button className={Styles.remove} type="button"><FontAwesomeIcon  icon={faTimes} /></button>
                        </div>
                    ))}
                     {/* <div className={Styles.singleCard}>
                            <div>
                                 <img src="./visa.png" alt="Visa"/> 
                                 <h2>4999</h2>
                            </div>
                            <button className={Styles.remove} type="button"><FontAwesomeIcon  icon={faTimes} /></button>
                    </div>
                    <div className={Styles.singleCard}>
                            <div>
                                 <img src="./visa.png" alt="Visa"/> 
                                 <h2>4999</h2>
                            </div>
                            <button className={Styles.remove} type="button"><FontAwesomeIcon  icon={faTimes} /></button>
                    </div>
                    <div className={Styles.singleCard}>
                            <div>
                                 <img src="./visa.png" alt="Visa"/> 
                                 <h2>4999</h2>
                            </div>
                            <button className={Styles.remove} type="button"><FontAwesomeIcon  icon={faTimes} /></button>
                    </div>
                    <div className={Styles.singleCard}>
                            <div>
                                 <img src="./visa.png" alt="Visa"/> 
                                 <h2>4999</h2>
                            </div>
                            <button className={Styles.remove} type="button"><FontAwesomeIcon  icon={faTimes} /></button>
                    </div>
                    <div className={Styles.singleCard}>
                            <div>
                                 <img src="./visa.png" alt="Visa"/> 
                                 <h2>4999</h2>
                            </div>
                            <button className={Styles.remove} type="button"><FontAwesomeIcon  icon={faTimes} /></button>
                    </div> */}
                </div>}
            </div>

            <div className={Styles.add}>
                <button onClick={handleCardForm}  type='button'><FontAwesomeIcon  icon={faPlus} /></button>
            </div>
             {popup && <RemoveCard deleted = {deleted} />}
        </div>
    )
}

export default PaymentMethod
