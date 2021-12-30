import { useEffect, useState } from "react";
import Styles from "./css/styles.module.css";
import ViewBookings from './ViewBookings';
const BookingsList = () => {

    const [tasks, setTasks] = useState(null);
    const [activeObject, setActiveObject] = useState(null);

    const handleActive = (index) =>{
        //setTasks({...tasks, activeObject: tasks.objects[index]});
        setActiveObject(index);
        handlesSingleBooking();
    }

    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/pending`)
        .then(res => { return  res.json() })
        .then(data => {
            if(isMounted){
                setTasks(data);
            }
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false };
    }, []);

    const [singleBooking, setSingleBooking] = useState(false);
    const handlesSingleBooking = () => setSingleBooking(!singleBooking);

    return (
        <div className={Styles.bookinglist}>
            {/* <pre>{JSON.stringify(tasks.activeObject)}</pre> */}
            {tasks && 
            <div className={Styles.grid}>
                {tasks.map((task,index)=> (
                    <div key={task.id} className={Styles.list} onClick={() => handleActive(task.id)}>
                        <div className={Styles.top}>
                            <div className={Styles.name}>
                                <h4>{task.name}</h4>
                                <p>{task.details}</p>
                            </div>
                            <div className={Styles.imgCon}>
                                <img src="./bookinglistimg.png" alt="Booking" />
                            </div>
                        </div>
                        <hr />
                        <div className={Styles.bottom}>
                            <h4>{task.date}</h4> 
                            <span>·</span>
                            <h4>{task.time}</h4>
                        </div>
                    </div>
                ))}
            </div>}
            {singleBooking && <ViewBookings activeObject={activeObject} handlesSingleBooking={handlesSingleBooking} />}
        </div>
    )
}

export default BookingsList
