import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Styles from "./css/styles.module.css";
const ViewBookings = () => {
    return (
        <div className={Styles.view_bookings}>
            <div className={Styles.inner}>
                <div className={Styles.top}>
                    <h4>My Bookings</h4>
                    <button type="button">
                        <FontAwesomeIcon className={Styles.icon}  icon={faTimes} />
                    </button>
                </div>
                <h3 className={Styles.date}>Friday 29th October</h3>
                <div className={Styles.schedule}>
                   <div className={Styles.title}>
                        <div className={Styles.thing}>
                            <div>
                                <h4>Service</h4>
                            </div>
                            <div>
                                <h4>Duration and Staff</h4>
                            </div>
                            <div>
                                <h4>Scheduled Time</h4>
                            </div>
                        </div>
                        <div className={Styles.amount}>
                            <h4>Amount</h4>
                        </div>
                   </div>

                   <div className={Styles.list}>
                        <div className={Styles.thing}>
                            <div>
                                <h4>Tall Afro Haistyling</h4>
                            </div>
                            <div>
                                <h4>30min with Benita Grace</h4>
                            </div>
                            <div>
                                <h4>10:30 - 11:00</h4>
                            </div>
                        </div>
                        <div className={Styles.amount}>
                            <h4>NGN500</h4>
                        </div>
                   </div>

                   <div className={Styles.list}>
                        <div className={Styles.thing}>
                            <div>
                                <h4>Service 2</h4>
                            </div>
                            <div>
                                <h4>30min with Benita Grace</h4>
                            </div>
                            <div>
                                <h4>11:00 - 11:30</h4>
                            </div>
                        </div>
                        <div className={Styles.amount}>
                            <h4>NGN500</h4>
                        </div>
                   </div>

                   <div className={Styles.list}>
                        <div className={Styles.thing}>
                            <div>
                                <h4>Third Service</h4>
                            </div>
                            <div>
                                <h4>30min with Benita Grace</h4>
                            </div>
                            <div>
                                <h4>11:00 - 11:30</h4>
                            </div>
                        </div>
                        <div className={Styles.amount}>
                            <h4>NGN500</h4>
                        </div>
                   </div>

                   <hr />

                   <div className={Styles.total}>
                        <div className={Styles.thing}>
                            <div>
                                <h4>Total</h4>
                            </div>
                            <div>
                                <h4></h4>
                            </div>
                            <div>
                                <h4>1hr 30mins</h4>
                            </div>
                        </div>
                        <div className={Styles.amount}>
                            <h4>NGN1,500</h4>
                        </div>
                   </div>
                </div>

                <div className={Styles.bottom}>
                    <form>
                        <select name="more_options" id="more_options">
                            <option value="1">More Options</option>
                            <option value="1">More Options</option>
                            <option value="1">More Options</option>
                            <option value="1">More Options</option>
                        </select>
                    </form>
                    <button type='button'>Edit Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default ViewBookings