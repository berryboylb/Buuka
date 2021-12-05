import { useState } from "react";
import Giftcard from "../Giftcard/Giftcard";
import Logout from "../Logout/Logout"
import Miscellenous from "../miscellenous/Miscellenous"
import AddCard from "./AddCard";
import AddCardForm from "./AddCardForm";
import Cash from "./Cash";
import FundCard from "./FundCard";


const Wallet = ({togglelogout, logout}) => {
    const [cardForm , setCardForm] = useState(false);
    const [fundCard, setFundCard] = useState(false);
    const handlefundCard = () => {
        setFundCard(!fundCard);
    }
    const handleCardForm = () => {
        setCardForm(!cardForm);
    }
    const name = "Wallet";
    return (
        <div className="my-container">
            <Miscellenous togglelogout={togglelogout} name={name}/>
            <Cash handlefundCard= {handlefundCard}/>
            {fundCard && <FundCard handlefundCard = {handlefundCard} handleCardForm = {handleCardForm}/>}
            <AddCard handleCardForm = {handleCardForm}/>
            {cardForm && <AddCardForm handleCardForm = {handleCardForm}/>}
            <Giftcard/>
            {logout && <Logout togglelogout={togglelogout}/>}
        </div>
    )
}

export default Wallet
