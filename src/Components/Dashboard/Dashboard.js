import { useMediaQuery } from 'react-responsive';
import Appointment from '../Appointments/Appointment';
import Bottom from '../Appointments/Bottom';
import SecondAppointment from '../Appointments/SecondAppointment';
import DasboardHeader from '../miscellenous/DasboardHeader';
import Sidebar from "../SideBar/Sidebar"
import VendorChart from '../VendorChart/VendorChart';
import Styles from "./css/styles.module.css";

const Dashboard = ({togglelogout}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
    const name = "Adara Beauty & Hairstyling Saloon";
    return (
        <div className={`${Styles.dashboard} `}>
            <Sidebar togglelogout={togglelogout}/>
            <div className={isMobile ? "my-container" : ""}>
                <div className={Styles.content}>
                    <DasboardHeader name={name}/>
                    <VendorChart/>
                    <Appointment/>
                    <SecondAppointment/>
                    <Bottom/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
