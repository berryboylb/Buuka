import Miscellenous from "../miscellenous/Miscellenous"
import Logout from '../Logout/Logout';
import Pending from "./Pending";
import Completed from "./Completed";
import Cancelled from "./Cancelled";

const MyBookings = ({togglelogout, logout}) => {
    const name = "My Bookings";
    return (
        <div>
            <div className="my-container">
                <Miscellenous togglelogout={togglelogout} name={name}/>
                <Pending/>
                <Completed/>
                <Cancelled/>
                {logout && <Logout togglelogout={togglelogout}/>}
            </div>
        </div>
    )
}

export default MyBookings
