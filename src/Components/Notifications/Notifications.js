import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import Miscellenous from "../miscellenous/Miscellenous"
import Logout from "../Logout/Logout";
import Styles from "./css/styles.module.css";

const Notifications = ({togglelogout, logout}) => {
    const [notification, setNotifcation] = useState(null);

    const name = "Notifications";

    useEffect(() => {
        let isMounted = true;
        fetch(`http://localhost:8000/notifications`)
        .then(res => { return  res.json() })
        .then(data => {
            if(isMounted){
                //console.log(data);
                setNotifcation(data);
            }
            
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false };
    }, [])

    const date = DateTime.local().toString();
    console.log(date)
      
    return (
        <div className="my-container">
            <Miscellenous togglelogout={togglelogout} name={name}/>

            <div className={Styles.newnotifications}>
                <h4>New notifications</h4>
               {
                   notification ?
                   <div>
                       {notification.map((message, index) => (
                        <div key={message.id} className={Styles.notCon}>
                        <a href="/" className={Styles.notification}>
                                <div className={Styles.content}>
                                    <div className={Styles.imgCon}>
                                        <img src={message.img_src} alt="call" />
                                    </div>
                                    <div className={Styles.nameInfo}>
                                        <h3>{message.title}</h3>
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                                <div className={Styles.time}>
                                    <span>{message.time}</span>
                                </div>
                            </a>
                            <hr />
                        </div>
                    ))}
                   </div>
                   : 

                   <h3>No newer notifications</h3>
               }
            </div>

            <div className={`${Styles.newnotifications} ${Styles.more}`}>
                <h4>Older notifications</h4>
                {
                   notification ?
                   <div>
                       {notification.map((message, index) => (
                        <div key={message.id} className={Styles.notCon}>
                        <a href="/" className={Styles.notification}>
                                <div className={Styles.content}>
                                    <div className={Styles.imgCon}>
                                        <img src={message.img_src} alt="call" />
                                    </div>
                                    <div className={Styles.nameInfo}>
                                        <h3>{message.title}</h3>
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                                <div className={Styles.time}>
                                    <span>{message.time}</span>
                                </div>
                            </a>
                            <hr />
                        </div>
                    ))}
                   </div>
                   : 

                   <h3>No newer notifications</h3>
               }
            </div>
            {logout && <Logout togglelogout={togglelogout}/>}
        </div>
    )
}

export default Notifications
