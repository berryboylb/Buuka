import React,{ useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Pending = () => {
    const [trigger, setTrigger] = useState(false);
    const [tasks, setTasks] = useState({
        activeObject: null,
        objects: null,
    });
    const toggleTrigger = () => {
        setTrigger(!trigger);
    }
    const handleActive = (index) =>{
        setTasks({...tasks, activeObject: tasks.objects[index]});
    }

    useEffect(()=> {
        let isMounted = true;
        fetch(`http://localhost:8000/pending`)
        .then(res => { return  res.json() })
        .then(data => {
            if(isMounted){
                //console.log(data);
                setTasks({...tasks, objects : data});
                //console.log(initialState)
            }
            
        })
        .catch(error => {
            console.log(error.message)
        })
        return () => { isMounted = false };
    }, []);

    const toggleClass = (index) => {
        if(tasks.objects[index] === tasks.activeObject){
            return `${Styles.triggerBox}`;
        }
        else {
            return `${Styles.none}`;
        }
    }

    


    return (
        <div className={Styles.pending}>
            <h2>Pending</h2>
            {tasks.objects && 
            <div className={Styles.grid}>
                {tasks.objects.map((task,index)=> (
                    <div key={task.id} className={Styles.pend}>
                    <div className={Styles.top}>
                        <div className={Styles.name}>
                            <h4>{task.name}</h4>
                            <p>{task.details}</p>
                        </div>
                        <div className={Styles.trigger}>
                            <button onClick={() => handleActive(index)} id="base">
                                <FontAwesomeIcon className={Styles.icon}  icon={faChevronDown} />
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className={Styles.bottom}>
                        <h4>{task.date}</h4> 
                        <span>·</span>
                        <h4>{task.time}</h4>
                    </div>

                    <div className={toggleClass(index)} id="base">
                        <button>Reschedule</button>
                        <button>Cancel</button>
                    </div>
                </div>
                ))}
            


               
            </div>}
        </div>
    )
}

export default Pending
