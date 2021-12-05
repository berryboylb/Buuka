import { useState,useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Styles from "./css/styles.module.css";
const AddCard = ({handleCardForm}) => {
    const [cards, setCards] = useState(null);
    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/cardDetails`)
        .then(res => {
        return  res.json()
        })
        .then(data => {
            //console.log(data);
            if(isMounted){
                setCards(data);
            } 
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false };
    }, [cards]);

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {  scale: 1.5, ease: "elastic", duration: 0.5 });
    };

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, {  scale: 1, ease: "elastic", duration: 1 });
    };

    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:8000/cardDetails/${id}`, {
            method: 'DELETE',
        });
        res.status === 200
        ? setCards(cards.filter((card) => card.id !== id))
        : alert('Error Deleting This Task')
    }

    return (
        <div className={Styles.addCard}>
            <div className={Styles.add}>
                <h3>Manage Cards</h3>
                <button  onClick={handleCardForm}>Add a new card</button>
            </div>
            {cards ? 
            <div className={Styles.cardNo}>
                {cards.map((card) => (
                    <div key = {card.id} className={Styles.single}>
                        <div>
                            <h2>**** **** **** {card.cardNo.slice(-4)}</h2>
                            {card.cardtype === "Visa" ?   <img src="./visa.png" alt="Visa"/> : ""}
                            {card.cardtype === "MasterCard" ? <img src="./ms.png" alt="MasterCard"/> : "" }
                        </div>
                        <button onClick={() => handleDelete(card.id) } onMouseEnter={onEnter} onMouseLeave={onLeave} ><FontAwesomeIcon  icon={faTimes} /></button>
                    </div>
                ))}
            </div>
            :
             <div><h3>Put a card here let up bill you</h3></div>
            }
        </div>
    )
}

export default AddCard
