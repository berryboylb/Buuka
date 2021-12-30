import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Styles from "./css/styles.module.css";
const EditBooking = ({handleEditBooking}) => {
    return (
        <div className={Styles.edit_bookings}>
            <div className={Styles.inner}>
                <div className={Styles.top}>
                    <h4>Edit Appointment</h4>
                    <button type="button" onClick={handleEditBooking}>
                        <FontAwesomeIcon className={Styles.icon}  icon={faTimes} />
                    </button>
                </div>
                <h3 className={Styles.date}>Friday 29th October</h3>
                <form>
                    <div className={Styles.first}>
                        <div className={Styles.select}>
                            <label htmlFor="start">Start Time</label>
                            <select name="" id="start">
                                <option value="">10:30</option>
                                <option value="">11:30</option>
                                <option value="">12:30</option>
                            </select>
                        </div>
                        <div className={Styles.input}>
                            <label htmlFor="Service">Service</label>
                            <input type="text" name="" id="Service" />
                        </div>
                        <div className={Styles.select}>
                            <label htmlFor="Staff">Staff</label>
                            <select name="" id="Staff">
                                <option value="">Benita Grace</option>
                                <option value="">Benita Grace</option>
                                <option value="">Benita Grace</option>
                            </select>
                        </div>
                        <div className={Styles.select}>
                            <label htmlFor="Duration">Duration</label>
                            <select name="" id="Duration">
                                <option value="">1hr 30mins</option>
                                <option value="">1hr 30mins</option>
                                <option value="">1hr 30mins</option>
                            </select>
                        </div>
                    </div>

                    <div className={`${Styles.first} ${Styles.second}`}>
                        <div className={Styles.select}>
                            <label htmlFor="start">Start Time</label>
                            <select name="" id="start">
                                <option value="">10:30</option>
                                <option value="">11:30</option>
                                <option value="">12:30</option>
                            </select>
                        </div>
                        <div className={Styles.input}>
                            <label htmlFor="Service">Service</label>
                            <input type="text" name="" id="Service" />
                        </div>
                        <div className={Styles.select}>
                            <label htmlFor="Staff">Staff</label>
                            <select name="" id="Staff">
                                <option value="">Benita Grace</option>
                                <option value="">Benita Grace</option>
                                <option value="">Benita Grace</option>
                            </select>
                        </div>
                        <div className={Styles.select}>
                            <label htmlFor="Duration">Duration</label>
                            <select name="" id="Duration">
                                <option value="">1hr 30mins</option>
                                <option value="">1hr 30mins</option>
                                <option value="">1hr 30mins</option>
                            </select>
                        </div>
                    </div>
                    <a className={Styles.link} href="/">Add another service...</a>
                    <button className={Styles.submit} type='button'>Save Appointment</button>
                </form>
            </div>
        </div>
    )
}

export default EditBooking
