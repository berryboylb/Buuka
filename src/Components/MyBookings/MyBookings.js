import Miscellenous from "../miscellenous/Miscellenous"
import Pending from "./Pending";
import Completed from "./Completed";
import Cancelled from "./Cancelled";

const MyBookings = ({togglelogout}) => {
    const name = "My Bookings";
    return (
        <div>
            <div className="my-container">
                <Miscellenous togglelogout={togglelogout} name={name}/>
                <Pending/>
                <Completed/>
                <Cancelled/>
            </div>
        </div>
    )
}

export default MyBookings
