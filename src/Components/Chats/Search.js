import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Search = () => {
    return (
        <form className={Styles.search}>
            <input type="text" name="" id="" placeholder="Search all messages" />
            <button type='submit'><FontAwesomeIcon className={Styles.icon}  icon={faSearch} /></button>
        </form>
    )
}

export default Search
