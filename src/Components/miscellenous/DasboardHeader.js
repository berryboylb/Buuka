import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import Styles from "./css/styles.module.css";
const DasboardHeader = ({name}) => {
    return (
        <div className={Styles.dasboardHeader}>
            <h3>{name}</h3>
            <div className={Styles.searchPic}>
                <form>
                    <input type="text" name="" id="" placeholder="Search" />
                    <button><FontAwesomeIcon className={Styles.icon}  icon={faSearch} /></button>
                </form>
                   
                <Link to = '/' className={Styles.profile}>
                    <div>
                        <img src="./profile.png" alt="Profile" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default DasboardHeader
