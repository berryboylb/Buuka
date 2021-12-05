import { useState, useEffect} from "react"
import Styles from "./css/styles.module.css"
const Completed = () => {
    const [tasks, setTasks] = useState(null);
    //let initialState;

    useEffect(()=> {
        fetch(`http://localhost:8000/pending`)
        .then(res => { return  res.json() })
        .then(data => {
            //console.log(data);
            setTasks(data)
            // initialState = Array.from({ length: data.length }).map((_, idx) => {
            //     return { id: idx + 1, clicked: false };
            // });
            //console.log(initialState)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, []);
    return (
        <div className={Styles.pending}>
            <h2>Completed</h2>
            {tasks && 
            <div className={Styles.grid}>
                {tasks.map((task)=> (
                    <div  key={task.id} className={Styles.pend}>
                    <div className={Styles.top}>
                        <div className={Styles.name}>
                            <h4>{task.name}</h4>
                            <p>{task.details}</p>
                        </div>
                        <div className={Styles.book}>
                            <button>Re Book</button>
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

export default Completed
