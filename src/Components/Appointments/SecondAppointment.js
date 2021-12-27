import { useState, useEffect } from "react";
import Appointmentheader from "../miscellenous/Appointmentheader";
import Styles from "./css/styles.module.css";
const SecondAppointment = () => {
    const [appointments, setAppointments] = useState(null);
    const [values, setValues] = useState(null);
    const title = "Appointment Activity";
    const numberofDays = "Next 7days";
    // const headers = [
    //     {
    //         id : 1,
    //         title: "Service"
    //     },
    //     {
    //         id : 2,
    //         title: "This month"
    //     },
    //     {
    //         id : 3,
    //         title: "Last month"
    //     },
    //     {
    //         id : 4,
    //         title: "Total"
    //     }
    // ];

    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/appointment`)
        .then(res => {
        return  res.json()
        })
        .then(data => {
            if(isMounted){
                //console.log(data);
                setAppointments(data)
            }
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false }; 
    }, [appointments]);

    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/values`)
        .then(res => {
            return  res.json()
        })
        .then(data => {
            if(isMounted){
                setValues(data)
            }
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false }; 
    }, [values]);

    return (
        <div className={Styles.secondAppointment}>
            <div className={Styles.activity}>
                <Appointmentheader title={title} days= {numberofDays}/>
                {appointments ?
                 <div className={Styles.appointment_list}>
                   {appointments.map((appointment, index) => (
                       <div key={index} className={Styles.single_appointment}>
                            <div className={Styles.content}>
                                <div className={Styles.date}>
                                    <p>{appointment.dateOnly}</p>
                                </div>
                               <div className={Styles.info}>
                                    <h4>{appointment.name}</h4>
                                    <p>{appointment.about}</p>
                                    <p>{appointment.date} · <span>{appointment.time}</span> · <span className={`${appointment.status === "Canceled" ? Styles.error : ""} ${appointment.status === "New" ? Styles.new : ""}`}>{appointment.status}</span></p>
                               </div>
                            </div>
                            <div className={Styles.amount}>
                                <p>NGN{appointment.amount}</p>
                            </div>
                        </div>
                   ))}
                </div>: 
                <div className={Styles.empty}>
                    <h3 >No Appointments</h3>
                </div>
                }
            </div>

            <div className={Styles.services}>
                <h3 className={Styles.title}>Top Services</h3>
                <div className={Styles.meg}>
                        <div className={Styles.prob}>
                            <div className={Styles.king}>
                                <h4>Service</h4>
                            </div>
                            <div className={Styles.others}>
                                <div>
                                    <h4>This month</h4>
                                </div>
                                <div>
                                    <h4>Last Month</h4>
                                </div>
                                <div>
                                    <h4>Total</h4>
                                </div>
                            </div>
                        </div>
                        {values ? 
                        
                            <div>
                                {values.map((value, index) => (
                                <div key={index} className={Styles.prob2}>
                                    <div className={Styles.king}>
                                        <h4>{value.service}</h4>
                                    </div>
                                    <div className={Styles.others}>
                                        <div>
                                            <h4>{value.thisMonth}</h4>
                                        </div>
                                        <div>
                                            <h4>{value.lastMonth}</h4>
                                        </div>
                                        <div>
                                            <h4>{value.total}</h4>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            
                            :
                            <div className={Styles.empty}>
                                <h3>No Services</h3>
                            </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default SecondAppointment;
