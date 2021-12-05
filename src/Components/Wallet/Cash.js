import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Cash = ({handlefundCard}) => {
    return (
        <div className={Styles.cash}>
                <div className={Styles.inner}>
                    <div className={Styles.money}>
                        <div>
                            <h3>Balance</h3>
                            <h2>NGN22,024.34</h2>
                        </div>
                        <div className={Styles.total}>
                            <h3>Total Cash</h3>
                            <h2>NGN22,024.34</h2>
                        </div>
                    </div>
                    <div className={Styles.fund}>
                        <button onClick={handlefundCard}><FontAwesomeIcon  className={Styles.icon} icon={faPlus} /></button>
                    </div>
                </div>
            </div>
    )
}

export default Cash
