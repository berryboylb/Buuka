import { useMediaQuery } from 'react-responsive';
import DasboardHeader from '../miscellenous/DasboardHeader';
import Sidebar from "../SideBar/Sidebar";
import BookingList from "./BookingsList";
import Styles from "./css/styles.module.css";
import ViewBookings from './ViewBookings';
const VendorBookings = ({togglelogout}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const name = "My Bookings";
    return (
        <div className={Styles.VendorBookings}>
            <Sidebar togglelogout={togglelogout}/>
            <div className={isMobile ? "my-container" : ""}>
                <div className={Styles.content}>
                    <DasboardHeader name={name}/>
                    <BookingList/>
                    <ViewBookings/>
                </div>
            </div>
        </div>
    )
}

export default VendorBookings
