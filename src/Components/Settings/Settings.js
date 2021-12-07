import { useState } from "react";
import Logout from "../Logout/Logout";
import Miscellenous from "../miscellenous/Miscellenous";
import Address from "./Address";
import AddressForm from "./AddressForm";
import PaymentMethod from "./PaymentMethod";
import AddCardForm from "../Wallet/AddCardForm"
import Profile from "./Profile";

import SocialLogin from "./SocialLogin";
import SetNotifications from "./SetNotifications";
import BasicInformationForm from "./BasicInformationForm";

const Settings = ({togglelogout, logout}) => {
    const [addressForm, setAddressForm] = useState(false);
    const [addCard, setAddCard] = useState(false);
    const handleCardForm = () => setAddCard(!addCard);
    const handleAddressForm = () => setAddressForm(!addressForm);
    
    const name = "Settings";
    const address = "10b Ajike Faleye Street, Opposite Egbeda rd, Lagos, Nigeria.";

    return (
        <div className="my-container">
             <Miscellenous togglelogout={togglelogout} name={name}/>
             <Profile/>
             <Address address={address} handleAddressForm={handleAddressForm}/>
             <PaymentMethod handleCardForm={handleCardForm}/>
             <SocialLogin/>
             <SetNotifications/>
             {/* <BasicInformationForm/> */}
            
            {addCard && <AddCardForm handleCardForm = {handleCardForm}/>}
             {addressForm && <AddressForm handleAddressForm={handleAddressForm}/>}
             {logout && <Logout togglelogout={togglelogout}/>}
        </div>
    )
}

export default Settings
