import { useEffect, useState } from "react";
import Styles from "./css/styles.module.css";
const BookingsList = () => {

    const [tasks, setTasks] = useState({
        activeObject: null,
        objects: null,
    });

    const handleActive = (index) =>{
        setTasks({...tasks, activeObject: tasks.objects[index]});
    }

    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/pending`)
        .then(res => { return  res.json() })
        .then(data => {
            if(isMounted){
                setTasks({...tasks, objects : data});
            }
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false };
    }, [tasks]);

    return (
        <div className={Styles.bookinglist}>
            {/* <pre>{JSON.stringify(tasks.activeObject)}</pre> */}
            {tasks.objects && 
            <div className={Styles.grid}>
                {tasks.objects.map((task,index)=> (
                    <div key={task.id} className={Styles.list} onClick={() => handleActive(index)}>
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
        </div>
    )
}

export default BookingsList
