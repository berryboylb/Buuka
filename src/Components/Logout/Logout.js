import Styles from "./css/styles.module.css"
const Logout = ({togglelogout}) => {
    return (
        <div className={Styles.logout}>
            <div className={Styles.inner}>
                <h3>Logout</h3>
                <p>Are you sure you want to logout from our account?</p>
                <div>
                    <button onClick={togglelogout} className={Styles.cancel}>Cancel</button>
                    <button className={Styles.log}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Logout
