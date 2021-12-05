import React,{ useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Styles from "./css/styles.module.css"
const Pending = () => {
    const [trigger, setTrigger] = useState(false);
    const [tasks, setTasks] = useState(null);
    const toggleTrigger = () => {
        setTrigger(!trigger);
    }

    useEffect(()=> {
        fetch(`http://localhost:8000/pending`)
        .then(res => { return  res.json() })
        .then(data => {
            //console.log(data);
            setTasks(data);
            //console.log(initialState)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, []);

    // const initialState = Array.from({ length: 8 }).map((_, idx) => {
    //     return { id: idx + 1, clicked: false };
    // });

    // const [buttons, setButtons] = useState(initialState);
    //console.log(buttons);


    // function handleButtonClick(buttonId) {
    //     const nextState = buttons.map(button => {
    //       if (button.id !== buttonId) {
    //         return button;
    //       }
    //       return { ...button, clicked: !button.clicked };
    //     });
    //     setButtons(nextState);
    // }


    return (
        <div className={Styles.pending}>
            <h2>Pending</h2>
            {tasks && 
            <div className={Styles.grid}>
                {tasks.map((task)=> (
                    <div key={task.id} className={Styles.pend}>
                    <div className={Styles.top}>
                        <div className={Styles.name}>
                            <h4>{task.name}</h4>
                            <p>{task.details}</p>
                        </div>
                        <div className={Styles.trigger}>
                            <button onClick={toggleTrigger} id="base">
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

                    {trigger && <div className={Styles.triggerBox} id="base">
                        <button>Reschedule</button>
                        <button>Cancel</button>
                    </div>}
                </div>
                ))}
            


               
            </div>}
        </div>
    )
}

export default Pending
