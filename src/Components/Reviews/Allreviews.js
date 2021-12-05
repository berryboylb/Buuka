import Backbtn from "../backbtn/Backbtn"
import Filter from "../Filter/Filter"
import Styles from "./css/styles.module.css"
import FetchReview from "./FetchReview"
const Allreviews = () => {
    return (
        <div className={Styles.Allreviews}>
            <div className="my-container">
                <div className={Styles.inner}>
                    <Filter/>
                    <Backbtn/>
                    <FetchReview/>
                </div>
            </div>
        </div>
    )
}

export default Allreviews
