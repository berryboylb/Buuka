import Styles from "./css/styles.module.css"
const Logout = ({deleted}) => {
    return (
        <div className={Styles.logout}>
            <div className={Styles.inner}>
                {deleted && <pre>{JSON.stringify(deleted, undefined, 2)}</pre>}
                <h3>Remove Card</h3>
                <p>Are you sure you want to remove card? This action cannot be revered when done.</p>
                <div>
                    <button className={Styles.cancel}>Cancel</button>
                    <button className={Styles.log}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Logout