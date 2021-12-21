import { useMediaQuery } from 'react-responsive';
import Appointment from '../Appointments/Appointment';
import SecondAppointment from '../Appointments/SecondAppointment';
import DasboardHeader from '../miscellenous/DasboardHeader';
import Sidebar from "../SideBar/Sidebar"
import VendorChart from '../VendorChart/VendorChart';
import Styles from "./css/styles.module.css";

const Dashboard = ({togglelogout}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    return (
        <div className={`${Styles.dashboard} `}>
            <Sidebar togglelogout={togglelogout}/>
            <div className={isMobile ? "my-container" : ""}>
                <div className={Styles.content}>
                    <DasboardHeader/>
                    <VendorChart/>
                    <Appointment/>
                    <SecondAppointment/>
                </div>
            </div>
           
        </div>
    )
}

export default Dashboard
