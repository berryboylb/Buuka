import { useState } from "react";
import Miscellenous from "../miscellenous/Miscellenous";
import Address from "./Address";
import AddressForm from "./AddressForm";
import PaymentMethod from "./PaymentMethod";
import AddCardForm from "../Wallet/AddCardForm"
import Profile from "./Profile";

import SocialLogin from "./SocialLogin";
import SetNotifications from "./SetNotifications";
import BasicInformationForm from "./BasicInformationForm";

const Settings = ({togglelogout}) => {
    const [addressForm, setAddressForm] = useState(false);
    const [addCard, setAddCard] = useState(false);
    const [basicInformation, setBasicInformation] = useState(false);

    const handleCardForm = () => setAddCard(!addCard);
    const handleAddressForm = () => setAddressForm(!addressForm);
    const handleBasicInformation = () => setBasicInformation(!basicInformation)
    
    const name = "Settings";
    const address = "10b Ajike Faleye Street, Opposite Egbeda rd, Lagos, Nigeria.";

    return (
        <div className="my-container">
             <Miscellenous togglelogout={togglelogout} name={name}/>
             <Profile handleBasicInformation={handleBasicInformation}/>
             <Address address={address} handleAddressForm={handleAddressForm}/>
             <PaymentMethod handleCardForm={handleCardForm}/>
             <SocialLogin/>
             <SetNotifications/>
             {addCard && <AddCardForm handleCardForm = {handleCardForm}/>}
             {basicInformation && <BasicInformationForm handleBasicInformation={handleBasicInformation}/>}
             {addressForm && <AddressForm handleAddressForm={handleAddressForm}/>}
        </div>
    )
}

export default Settings
