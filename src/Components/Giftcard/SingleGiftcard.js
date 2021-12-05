import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Backbtn from "../backbtn/Backbtn"
import Filter from "../Filter/Filter"
import DynamicFooter from "../Footer/DynamicFooter"
import Styles from "./css/styles.module.css"

const SingleGiftcard = () => {
    const {id} = useParams();
    useEffect(() => {
        if(id){
            fetch(`http://localhost:8000/giftcards/${id}`)
            .then(res => {
            return  res.json()
            })
            .then(data => {
                console.log(data);
                setGiftCard(data)
            })
            .catch(error => {
                console.log(error.message)
            })
        }else {
            setGiftCard(null);
            return null;
        }
        
    }, [id])
   
    const [giftcard, setGiftCard] = useState(null)
    const [amount, setAmount] = useState(1)
    const increment = () => {
        setAmount(amount + 1);
    }
    const decrement = () => {
        if(amount !== 1){
            setAmount(amount - 1)
        }
        else {
            setAmount(1)
            alert("Number cannot be lesser than 1");
        }
      
    }
    const process = () => {
        alert("transaction is being processed");
    }
    return (
        <div className={Styles.SingleGiftcard}>
            <div className="my-container">
            <Filter/>
            <Backbtn/>
               {giftcard && <div className={Styles.inner}>
                    <h3>Additional Info/Quantity</h3>

                    <div className={Styles.single}>
                        <div className={Styles.card}>
                            <h5>GiftCard</h5>
                            <h6>Redeem on all services</h6>
                            <hr />
                            <p>₦ {giftcard.price}</p>

                            <div className={Styles.amount}>
                                <button onClick={decrement}> - </button>
                                <input type="text" value={amount} maxLength="1" onChange={(e) => {setAmount(e.target.value)}} />
                                <button onClick={increment}> + </button>
                            </div>
                        </div>
                            <div className={Styles.matrix}>
                                <div className={Styles.blue}>
                                    <div className={Styles.space}>
                                        <h5>GiftCard rate</h5>
                                        <h5>₦ {giftcard.price}</h5>
                                    </div>
                                    <div className={Styles.space}>
                                        <h5>Quantity</h5>
                                        <h5>{amount}</h5>
                                    </div>
                                    <hr />
                                    <div>
                                        <h4>Total</h4>
                                        <h4>₦ {giftcard.price * amount}</h4>
                                    </div>
                                </div>

                                <h6>Note:</h6>

                                <p>{giftcard.note}</p>
                            </div>
                    </div>

                    <button onClick={process} className={Styles.confirm}>Buy Giftcards {giftcard.price * amount} ({amount})</button>
               </div>}

            </div>
            <DynamicFooter/>
        </div>
    )
}

export default SingleGiftcard
