
import Styles from "./css/styles.module.css"

const Type = ({toggleState,toggleTab}) => {
    
    return (
        <div className={Styles.tabBtn}>
            <button className={ toggleState === 1 ? Styles.active : Styles.tabs} onClick={() => toggleTab(1)} type="button">New messages</button>
            <button className={ toggleState === 2 ? Styles.active : Styles.tabs} onClick={() => toggleTab(2)} type="button">All messages</button>
            <button className={ toggleState === 3 ? Styles.active : Styles.tabs} onClick={() => toggleTab(3)} type="button">Starred</button>
            <button className={ toggleState === 4 ? Styles.active : Styles.tabs} onClick={() => toggleTab(4)} type="button">Deleted</button>
        </div>
    )
}

export default Type
