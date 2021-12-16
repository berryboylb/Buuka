import Sidebar from "../SideBar/Sidebar"
import Styles from "./css/styles.module.css";

const Dashboard = ({togglelogout}) => {
    return (
        <div className={Styles.dashboard}>
            <Sidebar togglelogout={togglelogout}/>
            <div className={Styles.content}>
                word goes here
            </div>
        </div>
    )
}

export default Dashboard
