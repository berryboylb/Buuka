import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Styles from "./css/styles.module.css";
const Appointmentheader = ({title, days}) => {
    return (
        <div className={Styles.appoint}>
            <div className={Styles.content}>
                <h3>{title}</h3>
                <p>{days}</p>
            </div>
            <div className={Styles.toggle}>
                <button><FontAwesomeIcon className={Styles.icon}  icon={faSlidersH} /></button>
            </div>
        </div>
    )
}

export default Appointmentheader
