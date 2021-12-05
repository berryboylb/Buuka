import { useState, useEffect } from "react";
import Backbtn from "../backbtn/Backbtn"
import Filter from "../Filter/Filter"
import Footer from "../Footer/Footer"
import Styles from "./css/styles.module.css"
const AllGiftCards = () => {
    const [giftcard, setGiftCard] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:8000/giftcards`)
        .then(res => {
            return  res.json()
        })
        .then(data => {
            //console.log(data);
            setGiftCard(data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, []);
    return (
        <div className={Styles.AllGiftCards}>
            <div className="my-container">
                <div className={Styles.inner}>
                    <Filter/>
                    <Backbtn/>

                    <div className={Styles.gifty}>
                        <h3>GiftCards</h3>

                        { giftcard && <div className={Styles.grid}>
                            {
                                giftcard.map((giftcard) => (
                                    <a href={`/buygiftcard/${giftcard.id}`} key={giftcard.id}>
                                        <div className={Styles.single}>
                                            <h5>Gift Card</h5>
                                            <h6>Redeem on all services</h6>
                                                <hr />
                                            <p>₦ {giftcard.price}</p>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AllGiftCards
