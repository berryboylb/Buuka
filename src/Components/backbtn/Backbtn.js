import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Backbtn = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
       <button onClick={handleClick} className= {Styles.backbtn}><FontAwesomeIcon  icon={faChevronLeft} /></button>
    )
}

export default Backbtn
