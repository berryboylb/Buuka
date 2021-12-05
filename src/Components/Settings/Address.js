import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Styles from "./css/styles.module.css";
const Address = ({address, handleAddressForm}) => {
    return (
        <div className={Styles.address}> 
            <div className={Styles.con}>
                <h3>My Address</h3>
                <p>{address}</p>
            </div>
            <div className={Styles.btncon}>
                <button type="button" onClick={handleAddressForm}><FontAwesomeIcon icon={faPencilAlt} /></button>
            </div>
        </div>
    )
}

export default Address
